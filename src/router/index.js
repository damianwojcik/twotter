import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import { auth } from '../../firebase'
import Home from '../views/Home.vue'
import UserProfile from '../views/UserProfile.vue'
import Admin from '../views/Admin.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/:userId',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      requiresAdmin: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {

  auth.onAuthStateChanged(async user => {
    if (user) {
      localStorage.setItem('user', user.uid)
      await store.dispatch('User/setUser', user)
    } else {
      localStorage.removeItem('user')
      await store.dispatch('User/setUser', null)
    }
  })

  const isAdmin = false;
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin)

  if(requiresAdmin && !isAdmin) {
    next({
      name: 'Home'
    })
  } else {
    next()
  }
})

export default router

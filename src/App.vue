<template>
  <nav>
    <router-link to="/"
      ><div class="navigation__logo">Twotter</div></router-link
    >
    <div class="navigation user" v-if="store.state.User.user">
      {{ store.state.User.user.email }}
    </div>
    <button v-if="store.state.User.user" @click="handleSignOut">
      Sign Out
    </button>
  </nav>
  <router-view />
</template>

<script>
import { auth } from '../firebase'
import { useStore } from 'vuex'

export default {
  name: 'App',
  setup() {
    const store = useStore()

    function handleSignOut(e) {
      e.preventDefault()
      auth.signOut()
    }

    return {
      store,
      handleSignOut
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-color: #f3f5fa;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 5%;
    background-color: tomato;
    color: white;
    .navigation__logo {
      font-weight: bold;
      font-size: 24px;
    }
    .navigation__user {
      font-weight: bold;
    }
  }
}
</style>

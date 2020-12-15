<template>
  <div class="home" v-if="store.state.User.user">
    <h1>Home</h1>
    <div class="users-list">
      <router-link
        v-for="user in users"
        :to="{ name: 'UserProfile', params: { userId: user.id } }"
        :key="user.id"
      >
        {{ user.username }}
      </router-link>
    </div>
  </div>
  <Form v-if="!store.state.User.user" />
</template>

<script>
import Form from '../components/Form'
import { users } from '../assets/users'
import { useStore } from 'vuex'

export default {
  name: 'Home',
  components: {
    Form
  },
  setup() {
    const store = useStore()

    return {
      store,
      users
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding: 50px 5%;
  .users-list {
    display: flex;
    flex-direction: column;
  }
}
</style>

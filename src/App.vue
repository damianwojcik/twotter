<template>
  <nav>
    <div class="navigation__logo">Twotter</div>
    <div class="navigation user">{{ user.username }}</div>
  </nav>
  <UserProfile />
</template>

<script>
import UserProfile from './components/UserProfile'

export default {
  name: 'App',
  components: {
    UserProfile
  },
  data() {
    return {
      user: {
        username: '_damianwojcik'
      }
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

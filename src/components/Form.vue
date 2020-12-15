<template>
  <form>
    <label for="email-input">Email</label>
    <strong>{{ state.email }}</strong>
    <input
      placeholder="jondoe@gmail.com"
      id="email-input"
      type="email"
      name="email"
      :value="state.email"
      @change="handleInputChange"
      required
    />
    <label for="password-input">Email</label>
    <strong>{{ state.password }}</strong>
    <input
      placeholder="********"
      id="password-input"
      type="password"
      name="password"
      :value="state.password"
      @change="handleInputChange"
      required
    />
    <button @click="handleLogIn" type="submit">
      Log in
    </button>
    <button @click="handleSignUp" type="submit">
      Sign up
    </button>
  </form>
</template>

<script>
import { reactive } from 'vue'
import { auth } from '../../firebase'

export default {
  setup() {
    const state = reactive({
      email: '',
      password: ''
    })

    function handleInputChange(e) {
      state[e.target.name] = e.target.value
    }

    function handleLogIn(e) {
      e.preventDefault()
      auth
        .signInWithEmailAndPassword(state.email, state.password)
        .catch((error) =>
          alert(
            `Your email or password is incorrect, please check your data, ${error}`
          )
        )
    }

    function handleSignUp(e) {
      e.preventDefault()
      auth
        .createUserWithEmailAndPassword(state.email, state.password)
        .catch((error) =>
          alert(`Email is already in use, sign in or use other email, ${error}`)
        )
    }

    return {
      state,
      handleInputChange,
      handleLogIn,
      handleSignUp
    }
  }
}
</script>

<style lang="scss" scoped></style>

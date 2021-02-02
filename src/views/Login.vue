<template>
  <h1>Login</h1>
  <h3>with your Librus Synergia account</h3>
  <div class="center">
    <form @submit.prevent="login">
      <p
        class="message"
        :class="{ warn: !loading && loginFailMessage }"
        v-if="loading || loginFailMessage"
        @click="resetMessage()"
      >
        <span v-if="loading"> Please wait.. </span>
        <span v-else>
          {{ loginFailMessage }}
        </span>
      </p>
      <input placeholder="username" v-model="username" :disabled="loading" />
      <input
        placeholder="password"
        type="password"
        v-model="password"
        :disabled="loading"
      />
      <button type="submit" :disabled="loading">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
          />
          <path
            fill-rule="evenodd"
            d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
          />
        </svg>
        Log in
      </button>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { AuthenticationApi, Configuration } from '@/api'

export default defineComponent({
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      loading: false,
      loginFailMessage: ''
    }
  },
  methods: {
    login () {
      this.loading = true
      const conf = new Configuration({
        username: this.username,
        password: this.password
      })
      const authApi = new AuthenticationApi(conf)
      authApi
        .getAuthorizeToken()
        .then((resp) => {
          const token = resp.data.data?.token!
          this.$store.dispatch('setToken', token)
        })
        .catch((err) => {
          const data = err.response.data
          if (data.status === 'error') {
            this.loginFailMessage = data.message
          }
        })
        .finally(() => {
          this.loading = false
        })
    },
    resetMessage () {
      this.loginFailMessage = ''
    }
  },
  mounted () {
    if (this.$store.getters.isAuthorized) {
      this.$store.dispatch('setNavbarVisible', true)
      this.$router.push('/')
    } else {
      this.$store.dispatch('setNavbarVisible', false)
    }
  }
})
</script>
<style lang="stylus" scoped>
@import '../assets/inputs.styl'
@import '../assets/colors.styl'

form
  display flex
  flex-direction column
  justify-content center
  max-width 50rem
  width 100%

input, button, .message
  margin 1rem

.message
  padding 2rem 1rem
  border-radius 8px
  background-color light-blue
  color darken(light-blue, 75%)
  text-align center
  font-weight bold
  font-size 1.2rem

button
  font-size 2rem
  svg
    width 3.2rem
    height 3.2rem

.center
  display flex
  justify-content center
</style>

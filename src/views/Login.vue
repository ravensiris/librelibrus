<template>
  <h1>Login</h1>
  <h3>with your Librus Synergia account</h3>
  <div class="center">
    <form @submit.prevent="login">
      <p
        class="message"
        :class="{ warn: !loading && message }"
        v-if="loading || message"
      >
        <span v-if="loading"> Please wait..</span>
        <span v-else>
          {{ message }}
        </span>
      </p>
      <input
        placeholder="username"
        v-model="form.username"
        :disabled="loading"
      />
      <input
        placeholder="password"
        type="password"
        v-model="form.password"
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
import { mapGetters } from 'vuex'

export default defineComponent({
  name: 'Login',
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.loading = true
      this.$store.dispatch('authorize', this.form)
    }
  },
  computed: {
    ...mapGetters(['authorized', 'loading', 'message'])
  },
  watch: {
    authorized (v) {
      if (v) {
        this.$router.push('/')
      }
    }
  },
  mounted () {
    if (this.authorized) { this.$router.push('/') }
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
  background-color blue
  color darken(blue, 75%)
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

.warn
  color-contrast(red)
</style>

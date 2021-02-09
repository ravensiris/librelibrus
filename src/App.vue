<template>
  <main>
    <router-view />
  </main>
  <bottom-navbar :items="navbarItems" v-if="authorized"></bottom-navbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BottomNavbar from '@/components/BottomNavbar.vue'
import { mapGetters } from 'vuex'

export default defineComponent({
  name: 'App',
  components: {
    BottomNavbar
  },

  data () {
    const navbarItems = [
      { title: 'Home', icon: 'house.svg', url: '/' },
      { title: 'Timetable', icon: 'calendar4-week.svg', url: '/timetable' },
      { title: 'Messages', icon: 'mailbox.svg', url: '/messages' }
    ]
    return {
      navbarItems
    }
  },
  computed: {
    ...mapGetters(['authorized'])
  }
})
</script>

<style lang="stylus">
@import 'assets/buttons.styl'
@import 'assets/colors.styl'

navbar-height = 4rem

@font-face
  font-style normal
  font-family Poppins
  src url('fonts/Poppins/Poppins-Regular.ttf')

@font-face
  font-style bold
  font-family 'Poppins Bold'
  src url('fonts/Poppins/Poppins-Bold.ttf')

#app
  display flex
  flex-direction column
  align-items center
  color white
  font-family Poppins

html, body
  margin 0
  background-color gray

*
  max-width 100vw

nav
  position fixed
  bottom 0
  width 100%
  height navbar-height
  background-color black

main
  display flex
  flex-direction column
  align-items center
  margin-bottom navbar-height
  width 100%
</style>

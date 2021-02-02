<template>
  <nav>
    <router-link v-for="item in items" :key="item.title" :to="item.url">
      <img :src="require('@/assets/' + item.icon)" alt="" />
      <span>{{ item.title }}</span>
    </router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

interface NavbarItem {
  title: string;
  icon: string;
  url: string;
}

export default defineComponent({
  name: 'BottomNavbar',
  props: {
    items: {
      type: Object as PropType<NavbarItem[]>,
      required: true
    }
  }
})
</script>

<style lang="stylus" scoped>
nav
  display flex
  justify-content space-around
  font-weight bold

.router-link-active
  filter brightness(0) invert(54%) sepia(77%) saturate(323%) hue-rotate(140deg) brightness(91%) contrast(90%)

nav > a
  display flex
  flex-direction column
  justify-content center
  align-items center
  width 100%
  color white
  text-decoration none
  font-family Poppins

  img
    height 38%

  span
    font-size 0.8rem
</style>

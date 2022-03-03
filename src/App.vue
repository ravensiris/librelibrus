<script setup lang="ts">
import { RouterView, useRouter } from "vue-router"
import BottomNavbar from "@/components/BottomNavbar.vue"
import BottomNavbarItem from "@/components/BottomNavbarItem.vue"
import type { IconType } from "@/assets/icons"

const router = useRouter()
const routes = router.getRoutes()
</script>

<template>
  <RouterView class="mb-14" />

  <BottomNavbar :routes="routes">
    <BottomNavbarItem
      v-for="route in routes"
      :key="route.name"
      :title="route.name"
      :href="route.path"
      :icon="(route.meta?.icon) as IconType"
      :iconActive="(route.meta?.iconActive) as IconType"
    />
  </BottomNavbar>
</template>

<script setup lang="ts">
import Icon from "./icons/Icon.vue"
import type { IconType } from "@/assets/icons"
import type { RouteRecordName } from "vue-router"

interface Props {
  title?: string | RouteRecordName
  icon: IconType
  href: string
  active?: boolean
}

const props = defineProps<Props>()
console.log(props.icon)
</script>

<template>
  <RouterLink
    class="flex dark:text-slate-300 text-slate-700 flex-col items-center justify-center w-full pt-1.5"
    :to="href"
  >
    <div
      class="active-outline hidden w-14 absolute dark:bg-blue-600 bg-blue-100 h-7 rounded-full top-1"
    />
    <div class="w-6 z-10">
      <Icon :icon="icon" />
    </div>
    <span class="text-sm font-bold pt-1 capitalize">{{ title }}</span>
  </RouterLink>
</template>

<style lang="scss" scoped>
@keyframes expand {
  0% {
    @apply w-10;
  }
  50% {
    @apply w-16;
  }
  100% {
    @apply w-14;
  }
}

.router-link-active {
  @apply text-slate-900 dark:text-slate-100;
  & > .active-outline {
    animation: expand 0.3s ease-in-out;
    display: unset;
  }
}
</style>

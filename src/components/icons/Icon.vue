<script setup lang="ts">
import { computed } from "vue"
import type { IconType } from "@/assets/icons"
import { icons } from "@/assets/icons"

interface Props {
  icon: IconType
}

const props = defineProps<Props>()
const icon = computed(() => icons[props.icon])
</script>

<template>
  <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
    <path fill="currentColor" :d="icon" />
  </svg>
</template>

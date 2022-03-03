<script setup lang="ts">
import Icon from "@/components/icons/Icon.vue"

interface Props {
  subject: string
  time: string
  teacher: string
  room: string
}

defineProps<Props>()
</script>

<template>
  <div
    class="flex items-center justify-center w-full h-20 my-2 bg-blue-100 rounded-md dark:bg-blue-500"
  >
    <div
      v-if="time"
      class="flex flex-col items-center justify-center w-20 w-18"
    >
      <div class="w-8">
        <Icon icon="clock-time-four-outline" />
      </div>
      <h2 class="px-3">{{ time }}</h2>
    </div>
    <div
      class="flex flex-col w-full h-full max-w-xs p-1 overflow-hidden whitespace-nowrap text-clip justify-evenly"
    >
      <h1 class="text-lg font-bold">{{ subject }}</h1>
      <h3>{{ teacher }}</h3>
    </div>
    <div
      v-if="room"
      class="flex items-center justify-center h-full bg-teal-200 dark:bg-teal-500 rounded-r-md"
    >
      <h2 class="px-4 font-bold">{{ room }}</h2>
    </div>
  </div>
</template>

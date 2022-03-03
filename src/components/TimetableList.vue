<script setup lang="ts">
interface Props {
  day: string
}

defineProps<Props>()
</script>

<template>
  <div class="flex flex-col items-center">
    <h1 class="font-bold">{{ day }}</h1>
    <div class="flex flex-col justify-center items-center px-1 w-full max-w-md">
      <slot />
    </div>
  </div>
</template>

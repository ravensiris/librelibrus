<template>
  <div v-if="!day">Loading...</div>
  <button class="refresh" v-else @click="updateUnits">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
      />
      <path
        d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"
      />
    </svg>
    {{ lastUpdated }}
  </button>
  <div class="lesson-units-wrapper">
    <div v-for="unit in day" :key="unit.name">
      <lesson-unit-component :unit="unit"></lesson-unit-component>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LessonUnitComponent from '@/components/LessonUnitComponent.vue'
import { DateTime, Duration } from 'luxon'
import { LessonUnit } from '@/api'

export default defineComponent({
  name: 'Timetable',
  components: {
    LessonUnitComponent
  },
  created () {
    const now = DateTime.local()
    this.$store.dispatch('setDay', now)
  },
  computed: {
    day () {
      return this.$store.getters.day
    }
  },
  methods: {
    updateUnits () {
      const now = this.$store.getters.currentDay
      this.$store.dispatch('setDay', now.plus(Duration.fromObject({ days: 1 })))
    }
  }
})
</script>

<style lang="stylus" scoped>
button
  margin-top 1rem
  border-radius 32px
  font-weight bold
  font-size 1rem

.lesson-units-wrapper
  width 100%

  div
    margin-top 1rem
</style>

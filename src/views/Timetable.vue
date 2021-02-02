<template>
  <div v-if="!units">Loading...</div>
  <button class="refresh" v-else @click="$store.dispatch('updateTimetable')">
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
    <div v-for="unit in units" :key="unit.starts">
      <lesson-unit-component
        :unit="unit"
        @lessonEnded="$store.dispatch('updateTimetable')"
        @breakEnded="$store.dispatch('updateTimetable')"
      ></lesson-unit-component>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LessonUnitComponent, {
  LessonUnitPlus
} from '@/components/LessonUnitComponent.vue'

export default defineComponent({
  name: 'Timetable',
  components: {
    LessonUnitComponent
  },
  created () {
    this.$store.dispatch('getTimetable')
    this.tick = setInterval(this.onTick, 1000)
  },
  data () {
    return {
      lastUpdated: this.getLastUpdated(),
      tick: null as any,
      selectedWeekDay: new Date().getDay()
    }
  },
  methods: {
    getLastUpdated (): string {
      const lastUpdated = this.$store.getters.timetableUpdated
      if (!lastUpdated) {
        return 'Updating'
      }
      const now = new Date()
      const delta = (now.valueOf() - lastUpdated.valueOf()) / 1000
      const mins = Math.floor(delta / 60)
      const secs = Math.floor(delta % 60).toString()
      let result
      if (mins) {
        result =
          mins.toString().padStart(2, '0') + ':' + secs.padStart(2, '0') + 'm'
      } else {
        result = secs + 's'
      }
      return result + ' ago'
    },
    onTick () {
      this.lastUpdated = this.getLastUpdated()
    }
  },
  computed: {
    units () {
      let timetable = this.$store.getters.timetable as LessonUnitPlus[]
      timetable = timetable.filter((unit) => {
        if (unit.start) {
          const start = new Date(unit.start)
          return start.getDay() === this.selectedWeekDay
        }
      })
      let prev: LessonUnitPlus
      timetable.map((unit) => {
        if (unit.start && unit.duration) {
          const start = new Date(unit.start).valueOf()
          unit.start = start
          unit.end = start + unit.duration * 1000
          if (prev) {
            prev.next = unit
          }
          prev = unit
        }
      })
      return timetable
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

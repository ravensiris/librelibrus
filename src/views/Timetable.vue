<template>
  <div class="buttons">
    <button v-if="day" @click="$router.push('dayselect')">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"
        />
        <path
          d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
        />
      </svg>
      {{ day }}
    </button>
    <button
      v-if="deltaUpdated"
      class="refresh"
      @click="
        deltaUpdated = undefined;
        loadWeek();
      "
    >
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
      {{ deltaUpdated }}
    </button>
  </div>
  <div class="lesson-units-wrapper" v-if="dayUnits && dayUnits.length > 0">
    <div v-for="unit in dayUnits" :key="unit.name">
      <lesson-unit-component :unit="unit"></lesson-unit-component>
    </div>
  </div>
  <div v-else-if="!deltaUpdated" class="timetable-status">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.5a.5.5 0 0 1 1 0V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0zm-.354 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V11h-1v3.293l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"
      />
    </svg>
  </div>
  <div v-else class="timetable-status">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5.146-5.146l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708z"
      />
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LessonUnitComponent from '@/components/LessonUnitComponent.vue'
import { mapActions, mapGetters } from 'vuex'
import { DateTime } from 'luxon'

export default defineComponent({
  name: 'Timetable',
  components: {
    LessonUnitComponent
  },
  data () {
    return {
      tickHandle: undefined as undefined | number,
      deltaUpdated: undefined as undefined | string
    }
  },
  computed: {
    ...mapGetters('timetable', ['dayUnits']),
    updated (): DateTime | undefined {
      return this.$store.getters['timetable/updated'] as DateTime | undefined
    },
    day () {
      const day = this.$store.getters['timetable/day'] as DateTime | undefined
      return day?.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)
    }
  },
  watch: {
    updated () {
      if (this.tickHandle) {
        clearInterval(this.tickHandle)
      }
      this.tickHandle = setInterval(this.tick, 1000)
      this.tick()
    }
  },
  methods: {
    ...mapActions('timetable', ['loadWeek']),
    tick () {
      if (!this.updated) {
        return
      }
      const delta = this.updated.diffNow().negate()
      this.deltaUpdated = delta.toFormat("ss' s'")
    }
  },
  created () {
    this.loadWeek()
  }
})
</script>

<style lang="stylus" scoped>
@import '../assets/colors.styl'

.buttons
  display flex
  justify-content space-evenly
  width 100%
  max-width 20rem
  flex-wrap wrap

  button
    margin-top 1rem
    border-radius 32px
    font-weight bold
    font-size 1rem

.lesson-units-wrapper
  width 100%
  max-width 40rem

  div
    margin-top 1rem

.timetable-status
  position absolute
  top 50%
  width 40%
  max-width 20rem
  color lighten(background-main, 25%)
  transform translateY(-50%)
</style>

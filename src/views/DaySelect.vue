<template>
  <div class="month-select">
    <div class="wrapper">
      <button class="info" @click="prev()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
        PREV
      </button>
      <span>{{ monthString }}</span>
      <button class="info" @click="next()">
        NEXT
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </button>
    </div>
  </div>
  <div class="day-select">
    <div
      class="day"
      v-for="dayn in month"
      :key="dayn.text"
      :class="dayn.cssClass"
      @click="setDay(dayn.date)"
    >
      <span>{{ dayn.text }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'
import { DateTime } from 'luxon'

class Day {
  text: string;
  cssClass: Array<string>;
  date: DateTime;
  constructor (day: DateTime, selected: boolean) {
    this.text = day.day.toString()
    this.cssClass = [day.weekdayLong.toLowerCase()]
    if (selected) {
      this.cssClass.push('selected')
    }
    this.date = day
  }
}

export default defineComponent({
  name: 'Timetable',
  computed: {
    ...mapGetters('timetable', ['day'])
  },
  data () {
    return {
      monthString: '',
      month: [] as Array<Day>
    }
  },
  methods: {
    ...mapActions('timetable', ['setDay']),
    apply () {
      const nextDay = this.day?.plus({ days: 1 })
      this.setDay(nextDay)
    },
    setMonthString (day: DateTime) {
      this.monthString = day.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)
    },
    setMonth () {
      const monthStart = (this.day as DateTime).set({ day: 1 })
      let day = monthStart
      this.month = []
      while (day.month === monthStart.month) {
        this.month.push(new Day(day, day.day === (this.day as DateTime).day))
        day = day.plus({ days: 1 })
      }
    },
    next () {
      this.setDay((this.day as DateTime).plus({ months: 1 }))
    },
    prev () {
      this.setDay((this.day as DateTime).minus({ months: 1 }))
    }
  },
  watch: {
    day (v) {
      this.setMonthString(v)
      this.setMonth()
    }
  },
  mounted () {
    this.setMonthString(this.day)
    this.setMonth()
  }
})
</script>

<style lang="stylus" scoped>
@import '../assets/colors.styl'
@import '../assets/buttons.styl'

.month-select
  display flex
  flex-direction column
  justify-content center
  align-items center
  padding 1rem 0
  width 100%
  background-color gray

  .wrapper
    display flex
    justify-content center
    align-items center
    max-width 24rem
    width 95%

  span
    padding 0 1rem
    font-size 1.2rem

.day-select
  display grid
  box-sizing border-box
  margin-top 1rem
  max-width 32rem
  width 100%
  grid-gap 2px
  grid-template-columns repeat(7, auto)

  .day
    height 5rem
    text-align right
    color-contrast-reverse(white)
    font-size 1.4rem

  .selected
    color-contrast(white)

  span
    margin-right 2px

.tuesday
  grid-column 2

.wednesday
  grid-column 3

.thursday
  grid-column 4

.friday
  grid-column 5

.saturday
  grid-column 6

.sunday
  grid-column 7
</style>

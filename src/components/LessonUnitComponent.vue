<template>
  <div class="unit" :class="status">
    <div class="left">
      <h3 class="time">{{ hhmm(unit) }}</h3>
      <div class="hourglass-wrapper" v-if="breakMinutes">
        <svg
          v-if="status.onBreak"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"
          />
        </svg>
        <svg
          v-else-if="status.done"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5zm2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702s.18.149.5.149.5-.15.5-.15v-.7c0-.701.478-1.236 1.011-1.492A3.5 3.5 0 0 0 11.5 3V2h-7z"
          />
        </svg>
        <svg
          v-else-if="status.running"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="M2 14.5a.5.5 0 0 0 .5.5h11a.5.5 0 1 0 0-1h-1v-1a4.5 4.5 0 0 0-2.557-4.06c-.29-.139-.443-.377-.443-.59v-.7c0-.213.154-.451.443-.59A4.5 4.5 0 0 0 12.5 3V2h1a.5.5 0 0 0 0-1h-11a.5.5 0 0 0 0 1h1v1a4.5 4.5 0 0 0 2.557 4.06c.29.139.443.377.443.59v.7c0 .213-.154.451-.443.59A4.5 4.5 0 0 0 3.5 13v1h-1a.5.5 0 0 0-.5.5zm2.5-.5v-1a3.5 3.5 0 0 1 1.989-3.158c.533-.256 1.011-.79 1.011-1.491v-.702s.18.101.5.101.5-.1.5-.1v.7c0 .701.478 1.236 1.011 1.492A3.5 3.5 0 0 1 11.5 13v1h-7z"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5zm2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702c0 .7-.478 1.235-1.011 1.491A3.5 3.5 0 0 0 4.5 13v1h7v-1a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351v-.702c0-.7.478-1.235 1.011-1.491A3.5 3.5 0 0 0 11.5 3V2h-7z"
          />
        </svg>
        <span class="break"> {{ breakMinutes }}m </span>
      </div>
      <div v-else class="hourglass-wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"
          />
        </svg>
        <span>{{ hhmm(unit, true) }}</span>
      </div>
    </div>
    <div class="detail">
      <h3 class="name">{{ unit.name }}</h3>
      <div class="bottom">
        <div class="information" v-if="unit.info">{{ unit.info }}</div>
        <div class="classroom">{{ unit.classroom }}</div>
        <div class="teacher">{{ unit.teacher }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { LessonUnit } from '@/api'
import { defineComponent, PropType } from 'vue'

export interface LessonUnitPlus extends Omit<LessonUnit, 'start'> {
  // start is a timestamp
  start: number;
  end: number;
  next: LessonUnitPlus | undefined;
}

export default defineComponent({
  name: 'LessonUnitComponent',
  props: {
    unit: {
      type: Object as PropType<LessonUnitPlus>,
      required: true
    }
  },
  data () {
    return {
      endTriggerTimer: undefined as any,
      status: {
        running: false,
        done: false,
        onBreak: false
      }
    }
  },
  mounted () {
    if (!this.unit.duration) {
      return
    }
    const now = new Date().valueOf()
    const delta = now - this.unit.start
    const hasStarted = delta > 0
    const isRunning = hasStarted && delta <= this.unit.duration * 1000
    const isDone = hasStarted && !isRunning
    if (isDone && this.unit.next) {
      const onBreak = isDone && now <= this.unit.next.start
      this.status.onBreak = onBreak
      if (onBreak) {
        setInterval(() => {
          this.$emit('breakEnded')
        }, this.breakMinutes! * 60000 + 2000)
      }
    }
    this.status.running = isRunning
    this.status.done = isDone

    // Add a timer that emits after lesson ends
    const timerAfter = this.unit.duration * 1000 - delta + 2000
    if (isRunning) {
      setInterval(() => {
        this.$emit('lessonEnded')
      }, timerAfter)
    }
  },
  emits: ['lessonEnded', 'breakEnded'],
  computed: {
    breakMinutes (): number | undefined {
      if (this.unit.next) {
        const delta = (this.unit.next.start - this.unit.end) / 60000
        return delta
      }
      return undefined
    }
  },
  methods: {
    hhmm (unit: LessonUnitPlus, end = false) {
      if (!unit.start) {
        return 'err'
      }
      let date
      if (end) {
        date = new Date(unit.end)
      } else {
        date = new Date(unit.start)
      }
      return (
        date.getHours().toString().padStart(2, '0') +
        ':' +
        date.getMinutes().toString().padStart(2, '0')
      )
    }
  }
})
</script>

<style lang="stylus" scoped>
@import '../assets/colors.styl'

colorize-unit(main-color, classroom-color, info-color)
  color-contrast(main-color)

  .classroom
    color-contrast-reverse(classroom-color)

  .information
    color-contrast-reverse(info-color)

.unit.running
  colorize-unit(light-cyan, light-cyan, light-purple)

.unit.done
  colorize-unit(light-purple, light-purple, light-blue)

.unit
  display flex
  align-items center
  margin 0 1rem
  width calc(100% - 2rem)
  border-radius 16px
  colorize-unit(light-blue, light-blue, light-purple)

  .left
    display flex
    flex-direction column
    padding 0 1em

    .time, .break
      margin 0

  .detail
    display flex
    flex-direction column
    width 100%

    .bottom
      display flex
      align-items center
      width 100%

      div
        margin 0 0.2em

      margin-bottom 1rem

  .classroom, .information
    padding 0 0.4em
    max-height 1.5em
    border-radius 4px

.hourglass-wrapper
  display flex
  align-items center

  svg
    margin-bottom 0.15em
    height 1.2em
</style>

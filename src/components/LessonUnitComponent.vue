<template>
  <div class="unit" :class="status">
    <div class="left">
      <h3 class="time">{{ beginTime }}</h3>
    </div>
    <div class="detail">
      <h3 class="name">{{ unit.name }}</h3>
      <div class="bottom">
        <div class="information" v-if="unit.info">{{ unit.info }}</div>
        <div class="classroom" v-if="unit.classroom">{{ unit.classroom }}</div>
        <div class="teacher">{{ unit.teacher }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { LessonUnit } from '@/api'
import { DateTime } from 'luxon'
import { defineComponent, PropType } from 'vue'

interface UnitStatus {
  running: boolean;
  done: boolean;
}

export default defineComponent({
  name: 'LessonUnitComponent',
  props: {
    unit: {
      type: Object as PropType<LessonUnit>,
      required: true
    }
  },
  computed: {
    beginTime () {
      const start = DateTime.fromISO(this.unit.start)
      return start.toFormat('HH:mm')
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
  colorize-unit(cyan, cyan, purple)

.unit.done
  colorize-unit(purple, purple, blue)

.unit
  display flex
  align-items center
  margin 0 1rem
  width calc(100% - 2rem)
  border-radius 16px
  colorize-unit(blue, blue, purple)

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
      flex-wrap wrap
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

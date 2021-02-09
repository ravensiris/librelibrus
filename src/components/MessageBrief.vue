<template>
  <div class="message">
    <div class="title">
      <div class="wrapper">
        <svg
          v-if="message.is_read"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="envelope"
          viewBox="0 0 16 16"
        >
          <path
            d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.818l5.724 3.465L8 8.917l1.276.766L15 6.218V5.4a1 1 0 0 0-.53-.882l-6-3.2zM15 7.388l-4.754 2.877L15 13.117v-5.73zm-.035 6.874L8 10.083l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738zM1 13.117l4.754-2.852L1 7.387v5.73zM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2z"
          />
        </svg>
        <svg
          v-if="message.has_attachment"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"
          />
        </svg>
        <span>{{ message.title }}</span>
      </div>
    </div>
    <hr />
    <div class="detail">
      <div class="date">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM8.5 8.5V10H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V11H6a.5.5 0 0 1 0-1h1.5V8.5a.5.5 0 0 1 1 0z"
          />
        </svg>
        <span> {{ prettyDate }} </span>
      </div>
      <div class="sender">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path
            fill-rule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
          />
        </svg>
        <span> {{ message.sender }} </span>
      </div>
    </div>
    <div class="wrapper">
      <button class="info">OPEN</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { MessageBrief } from '@/api'
import { DateTime } from 'luxon'

export default defineComponent({
  name: 'MessageBrief',
  props: {
    message: {
      type: Object as PropType<MessageBrief>,
      required: true
    }
  },
  computed: {
    prettyDate () {
      const sent = DateTime.fromISO(this.message.sent)
      return sent.toLocaleString(DateTime.DATETIME_SHORT)
    }
  }
})
</script>

<style lang="stylus" scoped>
@import '../assets/colors.styl'
@import '../assets/buttons.styl'

.message
  margin 0 1rem
  width 100%
  border-radius 16px
  color-contrast blue

  > .wrapper
    display flex
    justify-content center
    align-items center

    button
      width 100%
      border-radius 0 0 16px 16px

.envelope
  padding-right 4px

.title
  padding 0.8rem 0
  border-radius 16px 16px 0 0
  font-weight bold

  svg
    width 1.4rem
    height 1.4rem

  .wrapper
    display flex
    align-items center
    margin 0 1rem

.date, .sender
  display flex
  align-items center
  margin-bottom 4px

  svg
    width 1rem
    height 1rem

  span
    margin-left 4px
    height auto

.detail
  display flex
  flex-direction column
  margin 0 1rem
  margin-top 4px

  svg
    width 1.4rem
    height 1.4rem

hr
  margin 0
  border 1px solid black
</style>

<template>
  <div class="messages-wrapper">
    <message-brief v-for="msg in messages" :message="msg" :key="msg.id" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MessageBrief from '@/components/MessageBrief.vue'
import { mapActions, mapGetters, mapState } from 'vuex'

export default defineComponent({
  name: 'Messages',
  components: { MessageBrief },
  methods: {
    ...mapActions('messages', ['setPage'])
  },
  computed: {
    ...mapGetters('messages', ['messages']),
    ...mapState('messages', ['currentPage', 'maxPage'])
  },
  mounted () {
    this.setPage()
  }
})
</script>

<style lang="stylus">
.messages-wrapper
  margin-top 1rem
  width 100%
  display flex
  flex-direction column
  max-width 40rem
  > .message
    margin-top 1rem
</style>

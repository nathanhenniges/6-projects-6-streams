<template>
  <div class="bg-gray-900">
    <div class="flex items-center justify-center h-screen">
      <Countdown v-if="$store.state.countdown.showCountdown" />
      <Control v-else />
    </div>
  </div>
</template>

<script>
import Countdown from '@/components/countdown'
import Control from '@/components/control'
export default {
  components: {
    Countdown,
    Control,
  },
}
</script>

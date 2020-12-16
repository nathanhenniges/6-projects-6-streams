<template>
  <div class="bg-gray-900">
    <div class="flex items-center justify-center h-screen">
      <Countdown />
    </div>
  </div>
</template>

<script>
import Countdown from '@/components/countdown'
export default {
  components: {
    Countdown,
  },
}
</script>

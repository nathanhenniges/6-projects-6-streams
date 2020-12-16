<template>
  <div>
    <h1 class="text-5xl text-center text-white font-roboto">Countdown Timer</h1>
    <div
      class="inline-grid items-center grid-cols-4 text-8xl p-15 gap-x-6 justify-items-center"
    >
      <div class="col-span-1">
        <span class="font-extrabold text-primary-500 font-montserrat">
          {{ days | two_digits }}
        </span>
        <span
          class="block text-xl font-semibold text-center font-roboto text-primary-400"
          >Days</span
        >
      </div>
      <div class="col-span-1">
        <span class="font-extrabold text-primary-500 font-montserrat">
          {{ hours | two_digits }}</span
        >
        <span
          class="block text-xl font-semibold text-center font-roboto text-primary-400"
          >Hours</span
        >
      </div>
      <div class="col-span-1">
        <span class="font-extrabold text-primary-500 font-montserrat">
          {{ minutes | two_digits }}</span
        >
        <span
          class="block text-xl font-semibold text-center font-roboto text-primary-400"
          >Minutes
        </span>
      </div>
      <div class="col-span-1">
        <span class="font-extrabold text-primary-500 font-montserrat">
          {{ seconds | two_digits }}</span
        >
        <span
          class="block text-xl font-semibold text-center font-roboto text-primary-400"
          >Seconds
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
      default: '2020-12-30 24:00:00',
    },
  },
  data() {
    return {
      timer: {
        days: '00',
        hours: '00',
      },
      now: Math.trunc(new Date().getTime() / 1000),
    }
  },
  computed: {
    toInnMilliSeconds() {
      return Math.trunc(Date.parse(this.to) / 1000)
    },
    seconds() {
      return (this.toInnMilliSeconds - this.now) % 60
    },
    minutes() {
      return Math.trunc((this.toInnMilliSeconds - this.now) / 60) % 60
    },
    hours() {
      return Math.trunc((this.toInnMilliSeconds - this.now) / 60 / 60) % 24
    },
    days() {
      return Math.trunc((this.toInnMilliSeconds - this.now) / 60 / 60 / 24)
    },
  },
  mounted() {
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000)
    }, 1000)
  },
}
</script>

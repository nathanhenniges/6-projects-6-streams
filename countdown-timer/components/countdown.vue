<template>
  <div>
    <h1 class="text-5xl text-center text-white font-roboto">Countdown Timer</h1>
    <div
      class="inline-grid items-center grid-cols-4 text-8xl p-15 gap-x-6 justify-items-center sm:w-full"
    >
      <div class="col-span-4 sm:col-span-2 md:col-span-1">
        <span
          class="font-extrabold text-primary-500 font-montserrat tabular-nums tnum-feature-setting"
        >
          {{ days | two_digits }}
        </span>
        <span
          class="block text-xl font-semibold text-center font-roboto text-primary-400"
          >Days</span
        >
      </div>
      <div class="col-span-4 sm:col-span-2 md:col-span-1">
        <span
          class="font-extrabold text-primary-500 font-montserrat tabular-nums tnum-feature-setting"
        >
          {{ hours | two_digits }}</span
        >
        <span
          class="block text-xl font-semibold text-center font-roboto text-primary-400"
          >Hours</span
        >
      </div>
      <div class="col-span-4 sm:col-span-2 md:col-span-1">
        <span
          class="font-extrabold text-primary-500 font-montserrat tabular-nums tnum-feature-setting"
        >
          {{ minutes | two_digits }}</span
        >
        <span
          class="block text-xl font-semibold text-center font-roboto text-primary-400"
          >Minutes
        </span>
      </div>
      <div class="col-span-4 sm:col-span-2 md:col-span-1">
        <span
          class="font-extrabold text-primary-500 font-montserrat tabular-nums tnum-feature-setting"
        >
          {{ seconds | two_digits }}</span
        >
        <span
          class="block text-xl font-semibold text-center font-roboto text-primary-400"
          >Seconds
        </span>
      </div>
    </div>
    <div
      class="inline-grid items-center grid-cols-4 mt-5 text-8xl p-15 gap-x-2 justify-items-center sm:w-full"
    >
      <button
        type="button"
        class="col-span-4 px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
        @click="resetCountdown"
      >
        Reset
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: Object,
      required: true,
      default: () => this.$dayjs.utc('2020-12-31 24:00:00'),
    },
  },
  data() {
    return {
      now: Math.trunc(this.$dayjs.utc() / 1000),
    }
  },
  computed: {
    toInnMilliSeconds() {
      return Math.trunc(this.$dayjs.utc(this.to) / 1000)
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
    const countdown = window.setInterval(() => {
      this.now = Math.trunc(this.$dayjs.utc() / 1000)
    }, 1000)
    this.$on('hook:destroyed', () => {
      clearInterval(countdown)
    })
  },
  methods: {
    async resetCountdown() {
      try {
        await this.$store.dispatch('countdown/RESET_COUNTDOWN')
        await this.$store.commit('countdown/SET_SHOW_COUNTDOWN', false)
      } catch (e) {}
    },
  },
}
</script>

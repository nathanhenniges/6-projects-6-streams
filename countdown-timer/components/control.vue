<template>
  <div>
    <h1 class="text-5xl text-center text-white font-roboto">Countdown Timer</h1>
    <div
      class="inline-grid items-center grid-cols-4 text-8xl p-15 gap-x-2 justify-items-center sm:w-full"
    >
      <div>
        <label for="days" class="block text-sm font-medium leading-5 text-white"
          >Days
        </label>
        <select
          id="days"
          v-model="date.day"
          class="block w-full py-2 pl-3 pr-10 mt-1 text-base leading-6 border-gray-300 form-select focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
        >
          <option v-for="day in days" :key="day" :value="day">
            {{ day }}
          </option>
        </select>
      </div>
      <div>
        <label
          for="hours"
          class="block text-sm font-medium leading-5 text-white"
        >
          Hours
        </label>
        <select
          id="hours"
          v-model="date.hour"
          class="block w-full py-2 pl-3 pr-10 mt-1 text-base leading-6 border-gray-300 form-select focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
        >
          <option v-for="hour in hours" :key="hour" :value="hour">
            {{ hour }}
          </option>
        </select>
      </div>
      <div>
        <label
          for="minutes"
          class="block text-sm font-medium leading-5 text-white"
          >Minutes
        </label>
        <select
          id="minutes"
          v-model="date.minute"
          class="block w-full py-2 pl-3 pr-10 mt-1 text-base leading-6 border-gray-300 form-select focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
        >
          <option v-for="minute in minutes" :key="minute" :value="minute">
            {{ minute }}
          </option>
        </select>
      </div>
      <div>
        <label
          for="seconds"
          class="block text-sm font-medium leading-5 text-white"
          >Seconds
        </label>
        <select
          id="seconds"
          v-model="date.second"
          class="block w-full py-2 pl-3 pr-10 mt-1 text-base leading-6 border-gray-300 form-select focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
        >
          <option v-for="second in seconds" :key="second" :value="second">
            {{ second }}
          </option>
        </select>
      </div>
    </div>
    <div
      class="inline-grid items-center grid-cols-4 mt-5 text-8xl p-15 gap-x-2 justify-items-center sm:w-full"
    >
      <button
        type="button"
        class="col-span-4 px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
        @click="toggleShowCountdown"
      >
        Start
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: {
        day: '00',
        hour: '00',
        minute: '00',
        second: '00',
      },
      days: [
        '00',
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31',
      ],
      hours: [
        '00',
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
      ],
      minutes: [
        '00',
        '05',
        '10',
        '15',
        '20',
        '25',
        '30',
        '35',
        '40',
        '45',
        '50',
        '55',
      ],
      seconds: [
        '00',
        '05',
        '10',
        '15',
        '20',
        '25',
        '30',
        '35',
        '40',
        '45',
        '50',
        '55',
      ],
    }
  },
  methods: {
    async toggleShowCountdown() {
      try {
        const to = this.$dayjs()
          .add(this.date.day, 'day')
          .add(this.date.hour, 'hour')
          .add(this.date.minute, 'minute')
          .add(this.date.second, 'second')

        await this.$store.dispatch('countdown/START_COUNTDOWN', to)
        await this.$store.dispatch('countdown/TOGGLE_SHOW_COUNTDOWN')
      } catch (e) {
        console.log(e)
      }
    },
    async resetCountdown() {
      try {
        await this.$store.dispatch('countdown/RESET_COUNTDOWN')
        await this.$store.dispatch('countdown/SET_SHOW_COUNTDOWN', false)
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>

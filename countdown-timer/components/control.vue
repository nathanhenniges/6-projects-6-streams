<template>
  <div>
    <h1 class="text-5xl text-center text-white font-roboto">Countdown Timer</h1>
    <div
      class="inline-grid items-center grid-cols-4 text-8xl p-15 gap-x-6 justify-items-center sm:w-full"
    >
      <div>
        <label
          for="location"
          class="block text-sm font-medium leading-5 text-gray-700"
          >Location
        </label>
        <select
          id="location"
          class="block w-full py-2 pl-3 pr-10 mt-1 text-base leading-6 border-gray-300 form-select focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
        >
          <option>USA</option>
          <option selected>Canada</option>
          <option>EU</option>
        </select>
      </div>
      <div>
        <label
          for="location"
          class="block text-sm font-medium leading-5 text-gray-700"
          >Location
        </label>
        <select
          id="location"
          class="block w-full py-2 pl-3 pr-10 mt-1 text-base leading-6 border-gray-300 form-select focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
        >
          <option>USA</option>
          <option selected>Canada</option>
          <option>EU</option>
        </select>
      </div>
      <div>
        <label
          for="location"
          class="block text-sm font-medium leading-5 text-gray-700"
          >Location
        </label>
        <select
          id="location"
          class="block w-full py-2 pl-3 pr-10 mt-1 text-base leading-6 border-gray-300 form-select focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
        >
          <option>USA</option>
          <option selected>Canada</option>
          <option>EU</option>
        </select>
      </div>
      <div>
        <label
          for="location"
          class="block text-sm font-medium leading-5 text-gray-700"
          >Location
        </label>
        <select
          id="location"
          class="block w-full py-2 pl-3 pr-10 mt-1 text-base leading-6 border-gray-300 form-select focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
        >
          <option>USA</option>
          <option selected>Canada</option>
          <option>EU</option>
        </select>
      </div>
      <button
        type="button"
        class="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
        @click="toggleShowCountdown"
      >
        Start
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async toggleShowCountdown() {
      try {
        await this.$store.dispatch('countdown/TOGGLE_SHOW_COUNTDOWN')
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>

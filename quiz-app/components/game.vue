<template>
  <div class="container p-24 m-auto bg-gray-700">
    {{ $store.state.qustions }}
    <div class="flex">
      <span class="inline-flex mx-auto shadow-sm">
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-green-600 border border-green-400 rounded-l-md focus:z-10 focus:outline-none hover:text-gray-900 hover:bg-green-300 focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700"
        >
          Yes
        </button>
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 -ml-px text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-red-600 border border-red-400 rounded-r-md focus:z-10 focus:outline-none hover:text-gray-900 hover:bg-red-300 focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700"
        >
          No
        </button>
      </span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

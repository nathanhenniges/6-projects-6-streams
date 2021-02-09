<template>
  <div class="container p-24 m-auto bg-gray-700">
    <h1 class="text-4xl font-bold text-center text-white font-montserrat">
      {{ $store.state.game.qustions[$store.state.game.currentQustion].qustion }}
    </h1>
    <div class="flex">
      <span class="inline-flex mx-auto shadow-sm">
        <button
          v-for="(answer, index) in $store.state.game.qustions[
            $store.state.game.currentQustion
          ].answers"
          :key="index"
          type="button"
          class="inline-flex items-center px-5 py-3 mx-1 text-2xl font-medium leading-5 text-white transition duration-150 ease-in-out border rounded-md bg-primary-600 border-primary-400 focus:z-10 focus:outline-none hover:text-gray-900 hover:bg-primary-300 focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700"
          @click="pickAnswer(index)"
        >
          {{ answer }}
        </button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async pickAnswer(index) {
      const userPickedAnswer = this.$store.state.game.qustions[
        this.$store.state.game.currentQustion
      ].answers[index]

      const rightAnswer = this.$store.state.game.qustions[
        this.$store.state.game.currentQustion
      ].answer

      const isRight = userPickedAnswer.includes(rightAnswer)

      const qustionsLength = this.$store.state.game.qustions.length - 1
      // const currentQustion = this.$store.state.game.qustions.length

      if (isRight) {
        if (this.$store.state.game.currentQustion === qustionsLength) {
          await this.$store.dispatch('game/RESET_GAME')
          alert('YOU WON!!!')
        } else {
          await this.$store.commit('game/GO_TO_NEXT_QUSTION')
        }
      } else {
        alert('YOUR WRONG!!!!!!!!!!')
      }
    },
  },
}
</script>

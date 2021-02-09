<template>
  <div class="container p-24 m-auto">
    <h1 class="font-extrabold text-center text-white text-9xl font-montserrat">
      YOU WON
    </h1>
    <h2 class="text-4xl font-extrabold text-center text-white font-roboto">
      Score:
      {{ $store.state.game.score }} /
      {{ $store.state.game.qustions.length }}
    </h2>
  </div>
</template>

<script>
export default {
  middleware: 'won',
  async created() {
    await this.$store.commit('game/SET_ENDED', false)
  },
}
</script>

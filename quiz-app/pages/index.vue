<template>
  <Base v-if="!$store.state.game.status" />
  <Game v-else />
</template>

<script>
import Base from '@/components/base'
import Game from '@/components/game'
export default {
  components: {
    Base,
    Game,
  },
}
</script>

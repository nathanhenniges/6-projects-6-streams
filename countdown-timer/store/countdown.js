export const state = () => ({
  showCountdown: false,
})

export const actions = {
  TOGGLE_SHOW_COUNTDOWN({ state, commit }) {
    commit('SET_SHOW_COUNTDOWN', !state.showCountdown)
  },
}

export const mutations = {
  SET_SHOW_COUNTDOWN(state, status) {
    return (state.showCountdown = status)
  },
}

export const getters = {
  SHOW_COUNTDOWN: (state) => {
    return state.showCountdown
  },
}

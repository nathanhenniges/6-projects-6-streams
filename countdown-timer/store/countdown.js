export const state = () => ({
  showCountdown: false,
  to: undefined,
})

export const actions = {
  TOGGLE_SHOW_COUNTDOWN({ state, commit }) {
    commit('SET_SHOW_COUNTDOWN', !state.showCountdown)
  },
  START_COUNTDOWN({ commit }, to) {
    commit('SET_TO', to)
  },
  RESET_COUNTDOWN({ commit }) {
    commit('SET_TO', undefined)
    commit('SET_SHOW_COUNTDOWN', false)
  },
}

export const mutations = {
  SET_SHOW_COUNTDOWN(state, status) {
    return (state.showCountdown = status)
  },
  SET_TO(state, to) {
    return (state.to = to)
  },
}

export const getters = {
  SHOW_COUNTDOWN: (state) => {
    return state.showCountdown
  },
}

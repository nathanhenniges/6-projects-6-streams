export const state = () => ({
  status: false,
})

export const actions = {
  START_GAME({ commit }) {
    commit('SET_STATUS', true)
  },
}

export const mutations = {
  SET_STATUS(state, status) {
    return (state.status = status)
  },
}

export const getters = {
  STATUS: (state) => {
    return state.status
  },
}

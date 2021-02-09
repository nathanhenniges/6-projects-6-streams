export const state = () => ({
  status: false,
  currentQustion: 0,
  qustions: [
    {
      qustion: 'What is Nuxt JS built on top of?',
      answer: 'VueJS',
      answers: ['ReactJS', 'PHP', 'jQuery', 'VueJS'],
    },
    {
      qustion: 'What is the most used front-end library',
      answer: 'jQuery',
      answers: ['Tailwind', 'Bootstrap', 'jQuery', 'VueJS'],
    },
    {
      qustion: 'Whats the most used CMS on the web today?',
      answer: 'WordPress',
      answers: ['WordPress', 'Joomla', 'GravCMS', 'Drupal'],
    },
  ],
  score: 0,
  ended: false,
})

export const actions = {
  START_GAME({ commit }) {
    commit('SET_STATUS', true)
  },
  RESET_GAME({ commit }) {
    commit('SET_STATUS', false)
    commit('SET_CURRENT_QUSTION', 0)
  },
}

export const mutations = {
  SET_STATUS(state, status) {
    return (state.status = status)
  },
  SET_ENDED(state, ended) {
    return (state.ended = ended)
  },
  SET_CURRENT_QUSTION(state, currentQustion) {
    return (state.currentQustion = currentQustion)
  },
  ADD_TO_SCORE(state) {
    return state.score++
  },
  GO_TO_NEXT_QUSTION(state) {
    return state.currentQustion++
  },
}

export const getters = {
  STATUS: (state) => {
    return state.status
  },
  QUSTIONS: (state) => {
    return state.qustions
  },
  SCORE: (state) => {
    return state.score
  },
}

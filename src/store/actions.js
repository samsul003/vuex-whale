const actions = {
  increment({ commit }, payload) {
    setTimeout(() => {
      commit('increment', payload)
    }, 300)
  },
  decrement({ commit }) {
    setTimeout(() => {
      commit('decrement')
    }, 100)
  },
  reset({ commit }, payload) {
    setTimeout(() => {
      commit('reset', payload)
    }, 200)
  },
}

export default actions

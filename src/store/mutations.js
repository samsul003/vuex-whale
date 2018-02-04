const mutations = {
  increment(state, payload) {
    if (payload) {
      state.growth += payload
    } else {
      state.growth++
    }
  },
  decrement(state) {
    state.growth--
  },
  reset(state, payload) {
    state.growth = payload
  }
}

export default mutations

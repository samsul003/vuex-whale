import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'development'

const store = new Vuex.Store({
  strict: debug,
  namespaced: true,
  state,
  actions,
  mutations
})

export default store

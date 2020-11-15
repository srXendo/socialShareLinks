import Vue from 'vue'
import Vuex from 'vuex'
import player from './mutations/player.js'
Vue.use(Vuex)
console.log(player.state)

export default new Vuex.Store({
  state: {
    ...player.state
  },
  mutations: {
    ...player.mutations
  },
  actions: {
    ...player.actions
  },
  getters: {
    ...player.getters
  },
  modules: {
  }
})

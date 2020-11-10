import Vue from 'vue'
import Vuex from 'vuex'
import user from './mutations/user'
Vue.use(Vuex)
console.log(user.state)

export default new Vuex.Store({
  state: {
    ...user.state
  },
  mutations: {
    ...user.mutations
  },
  actions: {
    ...user.actions
  },
  modules: {
  }
})

async function responseLogin (state, responseApi) {
  responseApi.then(response => {
    state.loading = false
    console.log('start login: ', state, response)
  }).catch(err => {
    console.error(new Error(err))
    state.loading = false
  })
}
async function login (context, playerLoginPromise) {
  context.commit('loading', true)
  playerLoginPromise.then(response => {
    context.commit('loading', false)
  }).catch(err => {
    context.commit('loading', false)
    console.error(err)
  })
}
async function addPlayer (context, responseApiPromise) {
  context.commit('loading', true)
  responseApiPromise.then(response => {
    context.commit('loading', false)
  }).catch(err => {
    context.commit('loading', false)
    console.error(err)
  })
}
function responseAddPlayer (state, responseApi) {

}
async function loading (state, status) {
  state.loading = status
}
export default {
  state: {
    login: false,
    playerName: undefined,
    loading: false,
    id: null
  },
  mutations: {
    responseLogin: responseLogin,
    responseAddPlayer: responseAddPlayer,
    loading: loading
  },
  actions: {
    login: login,
    addPlayer: addPlayer
  },
  getters: {
    login: (state, getters) => {
      return state.login
    }
  }
}

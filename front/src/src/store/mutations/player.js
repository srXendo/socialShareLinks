import playerService from '../../services/player.service'
async function responseLogin (state, responseApi) {
  responseApi.then(response => {
    state.loading = false
    console.log('start login: ', state, response)
  }).catch(err => {
    console.error(new Error(err))
    state.loading = false
  })
}
async function login (context, form) {
  console.log('commiting change')
  context.commit('responseLogin', playerService.loginRequest(form))
}
async function addPlayer (context, form) {
  context.commit('loading', true)
  context.commit('responseAddPlayer', playerService.addPlayer(form))
}
async function responseAddPlayer (state, responseApi) {
  responseApi.then(() => {
    console.log(state)
    state.loading = false
  })
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
    loading: (state, getters) => {
      return state.loading
    }
  }
}

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
  context.commit('responseLogin', playerService.loginRequest(form))
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
function responseAddPlayer (state, responseApi, commit) {
  console.log('--------', this, state.loading)
  responseApi.then(() => {
    commit('loading', false)
    console.log('--------', state.loading)
  }).catch(err => {
    commit('loading', false)
    console.log('--------', state.loading)
    console.log(err)
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

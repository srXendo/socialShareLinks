import playerService from './../../services/player.service'
async function responseLogin (state, responseApi) {
  const response = await responseApi
  console.log('start login: ', state, response)
}
async function login (context, form) {
  console.log('commiting change')
  context.commit('responseLogin', playerService.loginRequest(form))
}
async function addPlayer (context, form) {
  context.commit('responseAddPlayer', playerService.addPlayer(form))
}
async function responseAddPlayer (state, responseApi) {
  const response = await responseApi
  console.log('responseAddPlayer: ', state, response)
}
export default {
  state: {
    login: false,
    playerName: undefined,
    id: null
  },
  mutations: {
    responseLogin: responseLogin,
    responseAddPlayer: responseAddPlayer
  },
  actions: {
    login: login,
    addPlayer: addPlayer
  }
}

async function responseLogin (state, response) {
  if (response == 200){
    state.login = true
  }
  else {
    state.login = false
  }

  console.log('start login: ', state, response)
}
async function login (context, playerLoginPromise) {
  context.commit('loading', true)
  playerLoginPromise.then(response => {
    context.commit('responseLogin', response)
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
    loading: (state, getters) => {
      return state.loading
    }
  }
}

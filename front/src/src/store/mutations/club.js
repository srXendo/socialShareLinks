function responseLogin (state, response) {
  if (response.status === 200) {
    state.login = true
  } else {
    state.login = false
  }
  console.log('start login: ', state, response)
}
async function login (context, clubLoginPromise) {
  context.commit('loading', true)
  clubLoginPromise.then(response => {
    context.commit('responseLogin', response)
    context.commit('loading', false)
  }).catch(err => {
    context.commit('loading', false)
    console.error(err)
  })
}
async function addClub (context, responseApiPromise) {
  context.commit('loading', true)
  responseApiPromise.then(response => {
    context.commit('loading', false)
  }).catch(err => {
    context.commit('loading', false)
    console.error(err)
  })
}
function responseAddClub (state, responseApi) {
}
async function loading (state, status) {
  state.loading = status
}
export default {
  state: {
    login: false,
    nameClub: undefined,
    loading: false,
    id: null
  },
  mutations: {
    responseLogin: responseLogin,
    responseAddClub: responseAddClub,
    loading: loading
  },
  actions: {
    login: login,
    addClub: addClub
  },
  getters: {
    login: (state, getters) => {
      console.log('getters')
      return state.login
    }
  }
}

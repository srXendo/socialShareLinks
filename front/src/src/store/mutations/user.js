import userService from './../../services/user.service'
async function responseLogin (state, responseApi) {
  const response = await responseApi
  console.log('start login: ', state, response)
}
async function login (context, form) {
  console.log('commiting change')
  context.commit('responseLogin', userService.loginRequest(form))
}
export default {
  state: {
    login: false,
    userName: undefined
  },
  mutations: {
    responseLogin: responseLogin
  },
  actions: {
    login: login
  }
}

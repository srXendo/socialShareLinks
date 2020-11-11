import env from '../environment/environment.js'
import axios from 'axios'
const url = `${env.back.prot}://${env.back.domain}:${env.back.port}`
export default {
  addUser: function addUser (data) {
    return axios.post(`${url}/user/add`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  loginRequest: function loginRequest (data) {
    return axios.post(`${url}/user/signup`, data, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  getList: function getListHome () {
    return axios.get(`${url}/user/getList`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

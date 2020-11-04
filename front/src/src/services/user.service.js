import env from '../environment/environment.js'
import axios from 'axios'
const url = `${env.back.prot}://${env.back.domain}:${env.back.port}`
export default function addUser (data) {
  return axios.post(`${url}/user/add`, data)
}

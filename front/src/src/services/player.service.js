import env from '../environment/environment.js'
import axios from 'axios'
const url = `${env.back.prot}://${env.back.domain}:${env.back.port}`
export default {
  checkDni: function () {
    let errors = 1
    console.log(this.getRegexsDni(), this)
    for (const dniRegex of this.getRegexsDni()) {
      console.log(dniRegex.test(this.form.dni))
      if (dniRegex.test(this.form.dni)) {
        this.validDni = true
      } else {
        errors++
      }
    }
    if (errors === this.getRegexsDni().length) {
      this.validDni = false
    }
  },
  addPlayer: function addPlayer (data) {
    return axios.post(`${url}/player/add`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).catch(err => {
      return err
    })
  },
  getRegexsDni: function getREgexsDni () {
    return [/^(\d{8})([A-Z])$/, /^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/, /^[XYZ]\d{7,8}[A-Z]$/]
  },
  loginRequest: function loginRequest (data) {
    return axios.post(`${url}/player/signup`, data, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  getList: function getListPlayersHome () {
    return axios.get(`${url}/player/getList`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

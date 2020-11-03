<script>
import addUser from '../../services/user.service.js'
export default {
  name: 'signIn',
  data: () => {
    return {
      sucess: false,
      form: {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    sendRegister: function () {
      this.haveErrors()
      addUser(this.form)
    },
    haveErrors () {
    }
  }
}
</script>
<template>
  <div>
    <h1>sign in</h1>
    <div id="register">
      <input type='text' id='name' placeholder='name' v-model="form.name">
      <div v-if="this.form.name ===''">
        Rellena el espacio en blanco
      </div>
      <input type='email' id='email' placeholder='email' v-model="form.email">
      <div v-if="this.form.email === ''">
        Rellena el espacio en blanco
      </div>
      <input type='password' id='password' placeholder='password' v-model="form.password">
      <div v-if="this.form.email === ''">
        Rellena el espacio en blanco
      </div>
      <input type='password' id='confirmPassword' placeholder='confirm password' v-model="form.confirmPassword">
      <div v-if="this.form.email === ''">
        Rellena el espacio en blanco
      </div>
      <button type="button" id="sendRegister" @click="sendRegister">Register</button>
      <div v-if='!this.sucess'>
        error
      </div>
    </div>
  </div>
</template>

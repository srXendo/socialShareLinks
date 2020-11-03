<script>
import axios from 'axios'
export default {
  name: 'signIn',
  data: () => {
    console.log('eee')
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
      axios.post('user/add', this.form)
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
      <input type='email' id='email' placeholder='email' v-model="form.email">
      <input type='password' id='password' placeholder='password' v-model="form.password">
      <input type='password' id='confirmPassword' placeholder='confirm password' v-model="form.confirmPassword">
      <button type="button" id="sendRegister" @click="sendRegister">Register</button>
      <div v-if='!this.sucess'>
        error
      </div>
    </div>
  </div>
</template>

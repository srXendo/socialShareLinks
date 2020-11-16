<script>
import playerService from '../../services/player.service'
export default {

  name: 'signUp',
  data: () => {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    sendLogin () {
      this.$store.dispatch('login', playerService.loginRequest(this.form))
    }
  }
}
</script>

<template>
  <div>
    <h1>sign up</h1>
    <div v-if="!this.$store.getters.loading" style='display:flex; flex-direction:column;'>
      <input type='email' id='email' placeholder='email' v-model="form.email">
      <span  v-if="this.form.email === ''" class="errorValidationText">Email requerido</span>
      <span v-if="!(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g.test(this.form.email))" class="errorValidationText"> * <br>formato de email invalido<br><br></span>
      <input type='password' id='password' placeholder='password' v-model="form.password">
      <span v-if="this.form.password === '' " class="errorValidationText">rellene el campo password</span>
      <button type="button" id="sendLogin" @click="sendLogin">login</button>
    </div>
    <div v-if="this.$store.getters.loading">...loading</div>
  </div>
</template>

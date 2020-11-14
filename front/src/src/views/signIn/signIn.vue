<script>
import addUser from '../../services/player.service.js'

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
      addUser(this.form)
    }
  }
}
</script>
<template>
  <div>
    <h1>sign in</h1>
    <div id="register">
      <div style='display:flex; flex-direction:column;'>
        <input type='text' id='name' placeholder='name' v-model="form.name">
        <span v-if="this.form.name ===''" class="errorValidationText">* <br> Nombre de usuario requerido <br><br></span>
        <input type='email' id='email' placeholder='email' v-model="form.email">
        <span  v-if="this.form.email === ''" class="errorValidationText">Email requerido</span>
        <span v-if="!(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g.test(this.form.email))" class="errorValidationText"> * <br>formato de email invalido<br><br></span>
        <input type='password' id='password' placeholder='password' v-model="form.password">
        <span v-if="this.form.password === '' " class="errorValidationText">rellene el campo password</span>
        <input type='password' id='confirmPassword' placeholder='confirm password' v-model="form.confirmPassword">
        <span v-if="this.form.confirmPassword === '' " class="errorValidationText">Confirmacion de contraseña requerida</span>
        <span class="errorValidationText" v-if="this.form.confirmPassword !== this.form.password || this.form.confirmPassword === ''">contraseña no es igual y confirma contraseña no es lo mismo <br><br></span>
        <button type="button" id="sendRegister" @click="sendRegister">Register</button>
      </div>
    </div>
  </div>

</template>
<style>
  .errorValidationText{
    color:red;
  }
</style>

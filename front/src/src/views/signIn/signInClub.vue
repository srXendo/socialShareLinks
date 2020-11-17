<script>
import clubService from '../../services/club.service.js'
export default {
  name: 'signInClub',
  data: () => {
    return {
      sucess: false,
      loading: false,
      form: {
        nameClub: '',
        email: '',
        password: '',
        confirmPassword: '',
        cifEmpresa: ''
      }
    }
  },
  methods: {
    sendRegister: function () {
      console.log(this.$store.getters.loading)
      this.$store.dispatch('addClub', clubService.addClub(this.form))
      console.log(this.$store.getters.loading)
    },
    checkDni: function (dni) {
      const dniRegexs = [/^(\d{8})([A-Z])$/, /^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/, /^[XYZ]\d{7,8}[A-Z]$/]
      let errors = 1
      for (const dniRegex of dniRegexs) {
        if (dniRegex.test(dni)) {
          return true
        } else {
          errors++
        }
      }
      if (errors === dniRegexs.length) {
        return false
      }
    }
  }
}
</script>
<template>
  <div>
    <h1>sign in</h1>
    <div id="register" v-if="!this.$store.getters.loading">
      <div style='display:flex; flex-direction:column;'>
        <input type='text' id='name' placeholder='nameClub' v-model="form.name">
        <span v-if="this.form.name ===''" class="errorValidationText">* <br> Nombre de usuario requerido <br><br></span>
        <input type='email' id='email' placeholder='email' v-model="form.email">
        <span  v-if="this.form.email === ''" class="errorValidationText">Email requerido</span>
        <span v-if="!(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g.test(this.form.email))" class="errorValidationText"> * <br>formato de email invalido<br><br></span>
        <input type='password' id='password' placeholder='password' v-model="form.password">
        <span v-if="this.form.password === '' " class="errorValidationText">rellene el campo password</span>
        <input type='password' id='confirmPassword' placeholder='confirm password' v-model="form.confirmPassword">
        <span v-if="this.form.confirmPassword === '' " class="errorValidationText">Confirmacion de contraseña requerida</span>
        <span class="errorValidationText" v-if="this.form.confirmPassword !== this.form.password || this.form.confirmPassword === ''">contraseña no es igual y confirma contraseña no es lo mismo <br><br></span>
        <input type="text" placeholder="DNI:36647900E" v-model="form.cif">
        <span v-if="!this.checkDni(this.form.cif)" class="errorValidationText">Error al validar el DNi,NIE,CIF</span>
        <button type="button" id="sendRegister" @click="sendRegister">Register</button>
      </div>
    </div>
    <div class="preloader" v-if="this.$store.getters.loading"></div>
  </div>

</template>
<style>
  .errorValidationText{
    color:red;
  }
  .preloader {
  width: 70px;
  height: 70px;
  border: 10px solid #eee;
  border-top: 10px solid #666;
  border-radius: 50%;
  animation-name: girar;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  }
  @keyframes girar {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

<script>
export default {
  name: 'signIn',
  methods: {
    sendRegister: function () {
      console.log('ad')
    }
  }
}
</script>
<template>
  <div>
    <h1>sign in</h1>
    <div id="register">
      <input type='text' id='name' placeholder='name'>
      <input type='email' id='email' placeholder='email'>
      <input type='password' id='password' placeholder='password'>
      <input type='password' id='confirmPassword' placeholder='confirm password'>
      <button type="button" id="sendRegister" @click="sendRegister">Register</button>
    </div>
  </div>
</template>

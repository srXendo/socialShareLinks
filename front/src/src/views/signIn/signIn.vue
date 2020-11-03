<script>
export default {
  name: 'signIn',
  methods: {
    sendRegister: function () {
      console.log(this.name)
    }
  }
}
</script>
<template>
  <div>
    <h1>sign in</h1>
    <div id="register">
      <input type='text' id='name' placeholder='name' v-model="name">
      <input type='email' id='email' placeholder='email' v-model="email">
      <input type='password' id='password' placeholder='password' v-model="password">
      <input type='password' id='confirmPassword' placeholder='confirm password' v-model="confirmPassword">
      <button type="button" id="sendRegister" @click="sendRegister">Register</button>
    </div>
  </div>
</template>

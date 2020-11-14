<script>

import environment from '../../environment/environment.js'
export default {
  name: 'playerProfile',
  data: function () {
    return {
      createCv: function () {
        window.location.href = `${environment.front.prot}://${environment.front.domain}:${environment.front.port}/#/cvPlayer`
      }
    }
  }
}
</script>
<template>
    <div>
        <button @click="createCv()">Crear Rugby cv</button>
    </div>
</template>

<style>
</style>

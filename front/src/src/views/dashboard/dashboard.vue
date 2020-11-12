<script>
import userService from '../../services/user.service.js'
export default {
  name: 'dasboard',
  data: function () {
    return { playersList: null }
  },
  mounted: async function () {
    const doc = await userService.getList()
    this.playersList = doc.data
  }
}

</script>

<template>
    <div  v-if="playersList !== null">
        <div id="playerlist" v-for="player in playersList" v-bind:key="player">
            <span> {{player}} </span>
            <img src="" alt="">
            <p>Edad:</p>
            <input type="text" placeholder="...">
            <p>Peso:</p>
            <input type="text" placeholder="...">
            <p>Altura:</p>
            <input type="text" placeholder="...">
            <p>Posicion:</p>
            <input type="text" placeholder="...">
            <p>Categoria:</p>
            <input type="text" placeholder="...">
        </div>
    </div>
</template>

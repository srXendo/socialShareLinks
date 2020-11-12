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
            <p>Nombre:{{player.playerName}}</p>
            <img src="" alt="">
            <p>Edad:{{player.years}}</p>
            <p>Peso:{{player.weight}}</p>
            <p>Altura:{{player.height}}</p>
            <p>Posicion:{{player.position}}</p>
            <p>Categoria:{{player.category}}</p>
        </div>
    </div>
</template>

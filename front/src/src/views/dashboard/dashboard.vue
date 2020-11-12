<script>
import userService from '../../services/user.service.js'
export default {
  name: 'dasboard',
  data: function () {
    return {
      playersList: null,
      getCategoryForYears: function (years) {
        return years > 30 ? 'alebeines' : 'juvenil'
      }
    }
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
            <img v-bind:src="player.photoProfile" alt="">
            <p>Edad:{{player.years}}</p>
            <p>Peso:{{player.weight}}</p>
            <p>Altura:{{player.height}}</p>
            <p>Posicion:{{player.position}}</p>
            <p>Categoria:{{getCategoryForYears(player.years)}}</p>
        </div>
    </div>
</template>

<script>
import userService from '../../services/player.service.js'
import environment from '../../environment/environment.js'
export default {
  name: 'dashboard',
  data: function () {
    return {
      playersList: null,
      getCategoryForYears: function (years) {
        return years > 30 ? 'alebeines' : 'juvenil'
      },
      goToPlayerProfile: function (player) {
        window.location.href = `${environment.front.prot}://${environment.front.domain}:${environment.front.port}/#/playerProfile/${player.playerName}`
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
    <div  v-if="playersList !== null" class="orderList">
        <div id="playerlist" v-for="player in playersList" v-bind:key="player" class="listplayers"  @click="goToPlayerProfile(player)">
            <p>Nombre:{{player.playerName}}</p>
            <img v-bind:src="player.photoProfile" alt="" class="photoprofile">
            <div class="orderText">
              <p>Edad:{{player.years}}</p>
              <p>Peso:{{player.weight}}</p>
              <p>Altura:{{player.height}}</p>
              <p>Posicion:{{player.position}}</p>
              <p>Categoria:{{getCategoryForYears(player.years)}}</p>
            </div>
        </div>
    </div>
</template>

<style>
.listplayers {
  height: 6rem;
  width: 30%;
  background-color: rgb(241, 236, 236);
  list-style-type: none;
  text-align: center;
  border-radius: 8%;
  padding: 5% 57% 32% 6%;
  transition: 0.3s;
  cursor: pointer;
}
.listplayers:hover {
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.photoprofile {
float: left;
height: 9rem;
border-radius: 50%;
}
.orderList{
height: 27rem;
display: grid;
grid-template-columns: 33% 33% 33%;
grid-template-rows: 100%;

}
.orderText{
  float: right;
}
</style>

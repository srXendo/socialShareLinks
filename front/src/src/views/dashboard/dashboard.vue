<script>
import getList from '../../services/user.service.js'
export default {
  name: 'dasboard'
}
console.log(getList())
</script>

<template>
    <div>
        <div id="playerlist">
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

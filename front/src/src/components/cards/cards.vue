<script>
import card from '../../components/card/card.vue'
export default {
  name: 'cards',
  components: {
    card
  },
  data: function () {
    return {
    }
  },
  props: {
    title: String,
    placeholder: String // Define the data type
  }

}

</script>
<template>
  <div>
    <div id="cards">
        <card type="text" title="Nombre" placeholder="Escribe tu nombre completo"></card>
        <card type="date" placeholder="Ejemplo: 03/06/1992" title="Escribe tu fecha de nacimiento"></card>
        <card type="number" placeholder="Ejemplo: 1.78" title="Cual es tu altura?"></card>
    </div>
  </div>
</template>
<style>
  #cards{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin:0.5%;
  }
</style>

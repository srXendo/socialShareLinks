<script>
import card from '../../components/card/card.vue'
export default {
  name: 'cvPlayer',
  components: {
    card
  },
  data: function () {
    return {
    }
  }
}
</script>

<template>
  <div id="contentCards">
    <card type="text" title="Nombre" placeholder="Escribe tu nombre completo"> </card>
    <card type="date" placeholder="Ejemplo: 03/06/1992" title="Escribe tu fecha de nacimiento"> </card>
    <card type="number" placeholder="Ejemplo: 1.78" title="Cual es tu altura?"> </card>
    <card type="text" placeholder="Ejemplo: Ala" title="En que club juegas?"> </card>
    <card type="file" title="Foto de perfil"></card>
    <button>Subir foto</button>
  </div>
</template>
<style>
  #contentCards{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
</style>

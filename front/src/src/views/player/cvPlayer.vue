<script>
import cards from '../../components/cards/cards.vue'
export default {
  name: 'cvPlayer',
  components: {
    cards
  },
  data: function () {
    return {
      cards_info: [
        {
          id: 0,
          type: 'date',
          placeholder: 'Ejemplo: 03/06/1992',
          title: 'Escribe tu fecha de nacimiento'
        },
        {
          id: 1,
          type: 'input',
          placeholder: 'Alberto',
          title: 'Escribe tu Nombre'
        },
        {
          id: 2,
          type: 'number',
          placeholder: '1.8',
          title: 'Cual es tu altura?'
        }
      ]
    }
  }
}
</script>

<template>
  <div>
    <cards class="contentCards" :arrInfo="cards_info">
    </cards>
  </div>
</template>
<style>
  .contentCards{
    background-color: white;
    width: 55%;
    height: 10rem;
    border: none;
    border-top-left-radius: 4% 21%;
    border-top-right-radius: 4% 21%;
    border-bottom-left-radius: 4% 21%;
    border-bottom-right-radius: 4% 21%;
    box-shadow: 0px 0px 50px #ddbea9;
    padding-right: 4%;

  }
</style>

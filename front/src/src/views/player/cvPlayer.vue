<script>
import cards from '../../components/cards/cards.vue'
export default {
  name: 'cvPlayer',
  components: {
    cards
  },
  data: function () {
    return {
    }
  }
}
</script>

<template>
  <div>
    <cards class="contentCards">
    </cards>
    <cards class="contentCards">
    </cards>
  </div>
</template>
<style>
  .contentCards{
    flex-direction: row;
    justify-content: space-between;
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

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
    arrInfo: Array
  }

}

</script>
<template>
  <div id="cards">
    <div v-for="index in arrInfo" v-bind:key="index">
      <card :type="index.type" :title="index.title" :placeholder="index.placeholder"></card>
    </div>
  </div>
</template>
<style>
  #cards{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
</style>

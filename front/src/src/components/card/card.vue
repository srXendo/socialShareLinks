<script>
export default {
  name: 'card',
  data: function () {
    return {
    }
  },
  props: {
    title: String,
    placeholder: String, // Define the data type
    type: String
  }

}

</script>
<template>
  <div id="card">
    <h5>{{title}}</h5>
    <input :type="type" :placeholder="placeholder">
  </div>
</template>
<style>
  #card{
    display: flex;
    flex-direction: column;
    align-items:stretch;
    height: 100%;
  }
</style>

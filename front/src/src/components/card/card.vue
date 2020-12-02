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
    <h4>{{title}}</h4>
    <input :type="type" :placeholder="placeholder">
  </div>
</template>
<style>
  #card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin:0.5%;
  }
</style>

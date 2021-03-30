<template>
<div class="noties">
    <div class="icon"></div>
    <div class="text">{{message}}</div>
</div>
</template>


<script>
export default {
  name: "Notify",
  props: ['message'],
  methods: {}
 
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .noties{
     height: 60px;
     width: 180px;
     position: fixed;
     font-size: 18px;
     text-align: center;
     right: 0;
     bottom: 16px;
     background-color: red;
 }
</style>

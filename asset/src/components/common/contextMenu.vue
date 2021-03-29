<template>
<div id="demo" v-on="openMenu">
  
</div>
</template>


<script>
export default {
  name: "contextMenu",
   data: {
        viewMenu: false,
        top: '0px',
        left: '0px'
    },

    methods: {}
};
</script>

<style scoped>
 @import url("../../css/common/context.css"); 
</style>

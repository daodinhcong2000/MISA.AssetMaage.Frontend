<template>
<div class="alert">
    <div class="model"></div>
    <div class="alert-delete">
        <div class="alert-header">
            <h3>Xóa bản ghi</h3>
            <div class= "icon-cancle"  @click="cancleDelete"></div>
        </div>
        <div class="alert-content">
            <div>Bạn có chắc chắn muốn xóa bản ghi</div>
        </div>
        <div class="alert-footer">
            <button class = "btn-cancel" @click="cancleDelete">Hủy</button>
            <button class = "btn-accept" @click="aceptDelete">Xóa</button>
        </div>
    </div>
</div>
</template>


<script>
export default {
  name: "Alert",
  props: [],
  methods: {
    cancleDelete(){
        this.$emit("cancleDelete");
    },
    aceptDelete(){
        this.$emit("aceptDelete");
    }
  },
 
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 @import url("../../css/common/alert.css"); 
</style>

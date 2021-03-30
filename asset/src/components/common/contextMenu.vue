<template>
    <div class="context-menu" id="contextMenu">
        <div class="context-menu-title" @click="AddAsset()" >Thêm</div>
        <div class="context-menu-title">Sửa</div>
        <div class="context-menu-title" >Xóa</div>
        <div class="context-menu-title">Nhân bản</div>
    </div>
</template>

<script>
export default {
    name: "ContextMenu",
    props: [],
    data(){
        return{
        }
    },
    methods:{
        /**
         * Mở Dialog thêm tài sản
         * CreatedBy: DDCong
         */
        AddAsset(){
            this.$emit("addAsset");
        },
    }
}
</script>
<style lang="css" scoped>
  .context-menu{
    position: absolute;
    height: 80px;
    width: 100px;
    background-color: #ffffff;
    border: 1px solid #bbbbbb;
    display: none;
  }
  .context-menu-title{
        text-align: center;
  }
  .context-menu >div:hover{
      cursor: pointer;
      background-color: #bbbbbb;
      align-items: center;
      
  }
</style>
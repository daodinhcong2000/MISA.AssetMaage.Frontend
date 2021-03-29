<template>
<div>
  <div class="logo-box">
    <div class="menu-icon logo-1" @click="showMenu()"></div>
    <h1 class="menu-text">QLTS.VN</h1>
    <div class="icon-1" @click="isHideMenu()"></div>
  </div>
  <div class="menu">
    <div class="menu-item">
      <div class="menu-icon nav-item-dashboard"></div>
      <div class="menu-text">Tổng quan</div>
    </div>

    <div class="menu-item">
      <div class="menu-icon nav-item-property"></div>
      <div class="menu-text">Tài sản</div>
    </div>

    <div class="menu-item">
      <div class="menu-icon nav-item-tools"></div>
      <div class="menu-text">Công cụ dụng cụ</div>
    </div>

    <div class="menu-item">
      <div class="menu-icon nav-item-catagory"></div>
      <div class="menu-text">Danh mục</div>
    </div>
    <div class="menu-item">
      <div class="menu-icon nav-item-search"></div>
      <div class="menu-text">Tra cứu</div>
    </div>

    <div class="menu-item">
      <div class="menu-icon nav-item-system"></div>
      <div class="menu-text">Hệ thống</div>
    </div>

    <div class="menu-item">
      <div class="menu-icon nav-item-report"></div>
      <div class="menu-text">Báo cáo</div>
    </div>
  </div>
</div>
</template>


<script>
import $ from 'jquery';

export default {
  name: "TheMenu",
  props: {},
  methods: {

        /**
         * Hàm ẩn thanh menu và set lại độ rộng cho các trường
         * CreatedBy: DDCONG(27/03/2021)
         */
        isHideMenu(){
            $('.menu-text').css('display', 'none');
            $('.icon-1').css('display', 'none');
            $('.body-left').css('width', '65px');
            $('.menu-icon').css('margin-left', '15px');
            $('.body-right').css('width', 'calc(100% - 65px)');
        },
        /**
         * Mở thanh menu và set lại độ rộng 
         * CreatedBy: DDCONG(27/03/2021)
         */
        showMenu(){
            $('.menu-text').css('display', 'block');
            $('.icon-1').css('display', 'block');
            $('.body-left').css('width', '229px');
            $('.menu-icon').css('margin-left', '30px');
            $('.body-right').css('width', 'calc(100% - 230px)');
        }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../css/common/menu.css';
</style>

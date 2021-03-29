<template>
<div>
  <div class="logo-box">
    <div class="logo-1"></div>
    <h1 class="menu-text">QLTS.VN</h1>
    <div class="icon-1"></div>
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
export default {
  name: "TheMenu",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../css/common/menu.css';
</style>

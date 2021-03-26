<template>
  <div class="header">
    <div class="header-left">
      <p id="text-header">Tài sản</p>
      <div class="icon-seperator"></div>
      <p id="text-header">Danh sách tài sản</p>
    </div>
    <div class="header-right">
      <p id="text-header">Sở tài chính</p>
      <div class="year">
        <p>Năm 2021</p>
        <div class="icon-updown"></div>
      </div>
      <div class="icon-question"></div>

      <div class="icon-ring">
        <div>1</div>
      </div>

      <div class="icon-divide"></div>
      <div class="avatar-user"></div>
      <div class="icon-dropdown"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHead",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../css/common/header.css";
</style>

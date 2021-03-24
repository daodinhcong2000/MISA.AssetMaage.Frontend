<template>
  <div class="dialog">
    <div class="model"></div>
    <div class="dialog-content">
      <div class="header-dialog">
        <h1>Ghi tăng tài sản</h1>
        <div class="icon-dialog" @click="CloseDialog()"></div>
      </div>
      <div class="content-dialog">
        <div class="content-dialog-left">
          <div>
            <label>Mã tài sản (*)</label>
            <select name="" id="">
              <option value="">TS00004</option>
            </select>
          </div>
          <div>
            <label>Mã phòng ban</label>
            <select name="" id="">
              <option value=""></option>
            </select>
          </div>
          <div>
            <label>Mã loại tài sản</label>
            <select name="" id="">
              <option value=""></option>
            </select>
          </div>
          <div>
            <label>Ngày ghi tăng</label>
            <input type="date" name="" id="" />
          </div>
          <div>
            <label>Nguyên giá</label>
            <input type="text" />
          </div>
        </div>
        <div class="content-dialog-right">
          <div>
            <label>Tên tài sản</label>
            <input type="text" id="input-defalut" />
          </div>
          <div>
            <label>Tên phòng ban</label>
            <input type="text" name="" id="input-defalut" />
          </div>
          <div>
            <label>Tên loại tài sản</label>
            <input type="text" id="input-defalut" />
          </div>
          <div class="UseTime">
            <div>
              <label>Thời gian sử dụng (năm)</label>
              <input type="text" name="" id="" />
            </div>
            <div>
              <label>Tỷ lệ hao mòn (%)</label>
              <input type="text" name="" id="" />
            </div>
          </div>
          <div class="UsePrice">
            <label>Giá trị hao mòn năm</label>
            <input type="text" />
          </div>
        </div>
      </div>
      <div class="footer-dialog">
        <button class="btn-cancle" @click="CloseDialog()">
          <div class="btn-text">Hủy</div>
        </button>
        <button class="btn-save">
          <div class="btn-text">Lưu</div>
        </button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "AssetDetail",
  props: {},
  methods: {
    CloseDialog() {
      this.$emit("closeDialog");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("../../../css/pages/dictionary/dialog.css");
</style>

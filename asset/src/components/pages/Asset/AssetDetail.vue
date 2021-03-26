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
          <div class="input-item">
            <label>Mã tài sản (*)</label>
            <select name="" id="" v-model="asset.assetCode">
              <option>{{ asset.assetCode }}</option>
            </select>
            <div class="icon-arrow"></div>
          </div>
          <div class="input-item">
            <label>Mã phòng ban</label>
            <select name="" id="" v-model="asset.departmentCode">
              <option> {{asset.departmentCode}}</option>
            </select>
            <div class="icon-arrow"></div>
          </div>
          <div class="input-item">
            <label>Mã loại tài sản</label>
            <select name="" id="" v-model="asset.assetTypeCode">
              <option> {{asset.assetTypeCode}} </option>
            </select>
            <div class="icon-arrow"></div>
          </div>
          <div class="input-item">
            <label>Ngày ghi tăng</label>
            <input type="date" name="" id="" v-model="asset.increaseDate" />
          </div>
          <div class="input-item">
            <label>Nguyên giá</label>
            <input type="text" v-model="asset.originalPrice"/>
          </div>
        </div>
        <div class="content-dialog-right">
          <div class="input-item">
            <label>Tên tài sản</label>
            <input type="text" id="input-defalut" v-model="asset.assetName" />
          </div>
          <div class="input-item">
            <label>Tên phòng ban</label>
            <input type="text" name="" id="input-defalut" v-model="asset.departmentName"/>
          </div>
          <div class="input-item">
            <label>Tên loại tài sản</label>
            <input type="text" id="input-defalut" v-model="asset.assetTypeName" />
          </div>
          <div class="UseTime">
            <div class="input-item">
              <label>Thời gian sử dụng (năm)</label>
              <input type="text" name="" id="" v-model="asset.useTime" />
            </div>
            <div class="input-item">
              <label>Tỷ lệ hao mòn (%)</label>
              <input type="text" name="" id="" v-model="asset.wearRate"/>
            </div>
          </div>
          <div class="UsePrice input-item">
            <label>Giá trị hao mòn năm</label>
            <input type="text" v-model="asset.wearValue"/>
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
  props: ["asset"],
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

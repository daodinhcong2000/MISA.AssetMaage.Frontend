<template>
  <div class="dialog">
    <div class="model"></div>
    <div class="dialog-content">
      <div class="header-dialog">
        <h1>{{(asset.assetId == undefined ) ? 'Thêm tài sản' : 'Sửa tài sản'}}</h1>
        <div class="icon-dialog" @click="CloseDialog()"></div>
      </div>
      <div class="content-dialog">
        <div class="content-dialog-left">
          <div class="input-item">
            <label>Mã tài sản (*)</label>
            <input type="text" v-model="asset.assetCode" />
          </div>
          <div class="input-item">
            <label>Mã phòng ban</label>
            <select name="" id="" v-model="asset.departmentCode">
              <option
                v-for="department in departments"
                :value="department.departmentCode"
                :key="department.departmentId"
              >
                {{ department.departmentCode }}
              </option>
            </select>
            <div class="icon-arrow"></div>
          </div>
          <div class="input-item">
            <label>Mã loại tài sản</label>
            <select name="" id="" v-model="asset.assetTypeCode">
              <option
                v-for="assetType in assetTypes"
                :value="assetType.assetTypeCode"
                :key="assetType.assetTypeId"
              >
                {{ assetType.assetTypeCode }}
              </option>
            </select>
            <div class="icon-arrow"></div>
          </div>
          <div class="input-item">
            <label>Nguyên giá</label>
            <input type="text" v-model="asset.originalPrice" />
          </div>
        </div>
        <div class="content-dialog-right">
          <div class="input-item">
            <label>Tên tài sản</label>
            <input type="text" id="" v-model="asset.assetName" />
          </div>
          <div class="input-item">
            <label>Tên phòng ban</label>
            <input
              type="text"
              name=""
              id="input-defalut"
              v-model="asset.departmentName"
              disabled
            />
          </div>
          <div class="input-item">
            <label>Tên loại tài sản</label>
            <input id="input-defalut" v-model="asset.assetTypeName" disabled />
          </div>
          <div class="UseTime">
            <div class="input-item">
              <label>Thời gian sử dụng (năm)</label>
              <input type="text" name="" id="" v-model="asset.useTime" />
            </div>
            <div class="input-item">
              <label>Tỷ lệ hao mòn (%)</label>
              <input type="text" name="" id="" v-model="asset.wearRate" />
            </div>
          </div>
          <div class="UsePrice input-item">
            <label>Giá trị hao mòn năm</label>
            <input type="text" v-model="asset.wearValue" />
          </div>
        </div>
      </div>
      <div class="footer-dialog">
        <button class="btn-cancle" @click="CloseDialog()">
          <div class="btn-text">Hủy</div>
        </button>
        <button class="btn-save">
          <div class="btn-text" @click="postAsset()">Lưu</div>
        </button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "AssetDetail",
  props: ["asset", "departments", "assetTypes"],
  methods: {
    CloseDialog() {
      this.$emit("closeDialog");
    },
    postAsset(){
        this.$emit('changeAsset',this.asset);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("../../../css/pages/dictionary/dialog.css");
</style>

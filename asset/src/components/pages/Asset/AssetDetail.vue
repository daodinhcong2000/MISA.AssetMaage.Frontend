<template>
  <div class="dialog">
    <div class="model"></div>
    <div class="dialog-content" @keyup.enter="postAsset()" >
      <div class="header-dialog">
        <h1>
          {{ asset.assetId == undefined ? "Thêm tài sản" : "Sửa tài sản" }}
        </h1>
        <div class="icon-dialog" @click="CloseDialog()"></div>
      </div>
      <div class="content-dialog">
        <div class="content-dialog-left">
          <div class="input-item">
            <label>Mã tài sản (*)</label>
            <input type="text" v-model="asset.assetCode" @blur="checkValidateCode()" @input="resetValidateCode()"/>
            <p v-if="errors.errorCode" class="validate-error">{{errors.errorCode}}</p>
          </div>
          <div class="input-item">
            <label>Mã phòng ban</label>
            <select
              name=""
              id=""
              v-model="asset.departmentCode"
              @change="mappingData()"
            >
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
            <select
              name=""
              id=""
              v-model="asset.assetTypeCode"
              @change="mappingData()"
            >
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
            <input
              type="text"
              id="money-display"
              v-model="asset.originalPrice"
              @input="handlePrice"
            />
          </div>
        </div>
        <div class="content-dialog-right">
          <div class="input-item">
            <label>Tên tài sản</label>
            <input type="text" id="" v-model="asset.assetName" @blur="checkValidateName()" @input="resetValidateName()" />
            <p v-if="errors.errorName" class="validate-error" >{{errors.errorName}}</p>
          </div>
          <div class="input-item">
            <label>Tên phòng ban</label>
            <input
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
              <input type="text" name="" id="" v-model="asset.timeUse" />
            </div>
            <div class="input-item">
              <label>Tỷ lệ hao mòn (%)</label>
              <input type="text" name="" id="" v-model="asset.wearRate" />
            </div>
          </div>
          <div class="UsePrice input-item">
            <label>Giá trị hao mòn năm</label>
            <input type="text" v-model="asset.wearValue" @input="handlePrice" />
          </div>
        </div>
      </div>
      <div class="footer-dialog">
        <button class="btn-cancle" @click="CloseDialog()">
          <div class="btn-text">Hủy</div>
        </button>
        <button class="btn-save">
          <div class="btn-text" @click="postAsset()" >Lưu</div>
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import $ from "jquery";
export default {
  name: "AssetDetail",
  props: ["asset", "departments", "assetTypes","errors"],
  data: function () {
    return {
      assetCurent: this.asset,
 
    };
  },
  methods: {
    //Kiểm tra dữ liệu nhập vào
    //CreatedByDDCong(27/03/2021)
    checkValidateCode() {
      if(!this.asset.assetCode) this.errors.errorCode = "Yêu cầu nhập mã code!";
      else this.errors.errorCode = "";
    },

    //Kiểm tra dữ liệu nhập vào
    //CreatedByDDCong(27/03/2021)
    checkValidateName() {
      if(!this.asset.assetName) this.errors.errorName = "Yêu cầu nhập tên!";
      else this.errors.errorName="";
    },

    //Bỏ thông báo lỗi mã code
    //CreatedByDDCong(27/03/2021)
    resetValidateCode(){
      return this.errors.errorCode = "";
    },
     //Bỏ thông báo lỗi tên
    //CreatedByDDCong(27/03/2021)
    resetValidateName(){
      return this.errors.errorName = "";
    },
    //Lấy dữ liệu tên khi chon code 
    //CreatedBy: DDCong(27/03/2021)
    mappingData() { 
      this.asset.assetTypeName = this.assetTypes.find(
        (assetType) => assetType.assetTypeCode === this.asset.assetTypeCode
      )?.assetTypeName;
      this.asset.departmentName = this.departments.find(
        (department) => department.departmentCode === this.asset.departmentCode
      )?.departmentName;
      this.asset.assetTypeId = this.assetTypes.find(
        (assetType) => assetType.assetTypeCode === this.asset.assetTypeCode
      )?.assetTypeId;
      this.asset.departmentId = this.departments.find(
        (department) => department.departmentCode === this.asset.departmentCode
      )?.departmentId;
    },
    //Đóng form 
    //CreatedBy: DDCong(27/03/2021)
    CloseDialog() {
      this.$emit("closeDialog");
    },
    //Gửi lên thông báo thay đổi hoặc thêm mới tài sản
    //CreatedBy: DDCong(27/03/2021)
    postAsset() {
      this.checkValidateCode();
      this.asset.originalPrice = parseInt(this.asset.originalPrice);
      console.log(this.asset);
      this.$emit("changeAsset", this.asset);
    },
    //Định dạng lại tiền khi nhập vào  
    //DDCong(27/03/2021)
    handlePrice(event){
      $('#money-display').keyup(function () {
        var money = $(this).val();
        money = money.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        $(this).val(money);
      });
      this.asset.OriginalPrice = event.target.value;
    },

  },
  computed: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("../../../css/pages/dictionary/dialog.css");
</style>

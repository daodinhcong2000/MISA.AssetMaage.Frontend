<template>
  <div class="content">
    <div class="filter-bar">
      <div class="filter-left">
        <input
          type="text"
          placeholder="Tìm kiếm"
          class="input-search"
          v-model="searchKeyword"
          @keyup.enter="search"
        />
        <div class="icon-search"></div>
      </div>
      <div class="filter-right">
        <button @click="AddAsset()">Thêm</button>
        <button class="m-btn-refresh" @click="refreshData()"></button>
        <button class="m-btn-delete"></button>
      </div>
    </div>
    <div class="data">
      <table
        id="tbListData"
        cellspacing="0"
        cellpadding="0"
        class="el-table__body"
        style="min-width: 100%"
      >
        <thead class="has-gutter">
          <tr class="el-table__row">
            <th style="width: 3%">STT</th>
            <th style="width: 10%">MÃ TÀI SẢN</th>
            <th style="width: 25%">TÊN TÀI SẢN</th>
            <th style="width: 12%">LOẠI TÀI SẢN</th>
            <th style="width: 20%">PHÒNG BAN</th>
            <th class="cell-number" style="width: 10%">NGUYÊN GIÁ</th>
            <th style="width: 10%">CHỨC NĂNG</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="el-table__row"
            v-for="(asset, index) in assets"
            @mouseover="showOperation()"
            @mouseout="offOperation()"
            :key="index"
             multiple
          >
            <td style="width: 3%">{{ index + 1 }}</td>
            <td style="width: 10%">{{ asset.assetCode }}</td>
            <td style="width: 25%">{{ asset.assetName }}</td>
            <td style="width: 12%">
              {{ getAssetTypeName(asset.assetTypeId) }}
            </td>
            <td style="width: 20%">
              {{ getDepartmentName(asset.departmentId) }}
            </td>
            <td style="width: 10%" class="cell-number">
              {{ formatCurrency(asset.originalPrice) }}
            </td>
            <td style="width: 10%" class="asset-operation">
              <div class="icon-group" v-show="operation">
                <div class="icon" @click="showDetail(asset)">
                  <i class="icon far fa-edit"></i>
                </div>
                <div
                  class="icon icon-delete"
                  @click="deleteAsset(asset)"
                ></div>
                <div class="icon icon-history"></div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="footer-content">
      <div>Tổng số tài sản: {{ this.assets.length }}</div>
      <div>Tổng ngyên giá: {{ totalPrice() }}</div>
    </div>
    <AssetDetail
      v-show="currentState"
      @closeDialog="closeDialog()"
      v-bind:asset="asset"
      v-bind:departments="departments"
      v-bind:assetTypes="assetTypes"
      @changeAsset="changeAsset()"
    />
  </div>
</template>


<script>
import AssetDetail from "./AssetDetail";
import axios from "axios";
import moment from "moment";
export default {
  name: "Asset",
  components: {
    AssetDetail,
  },
  props: {},
  data: function () {
    return {
      currentState: false,
      BASE_URL: "https://localhost:44302",
      assets: [],
      assetTypes: [],
      departments: [],
      operation: true,
      asset: {},
      searchKeyword: "",
    };
  },
  methods: {
    //thêm dữ liệu tài sản
    AddAsset() {
      this.currentState = true;
      this.asset = {};
    },
    //Xem dữ liệu tài sản
    showDetail(asset) {
      this.asset = asset;
      this.asset.departmentName = this.departments.find(
        (department) => department.departmentID === asset.departmentId
      )?.departmentName;
      this.asset.assetTypeName = this.assetTypes.find(
        (assetType) => assetType.assetTypeId === asset.assetTypeId
      )?.assetTypeName;
      this.asset.departmentCode = this.departments.find(
        (department) => department.departmentId === asset.departmentId
      )?.departmentCode;
      console.log(this.asset.departmentCode);
      this.asset.assetTypeCode = this.assetTypes.find(
        (assetType) => assetType.assetTypeId === asset.assetTypeId
      )?.assetTypeCode;
      this.currentState = true;
    },
    //Đóng bản thêm dữ liệu
    closeDialog() {
      this.currentState = false;
    },
    ///Định dạng tiền
    //CreateBy : DDCONG(25/03/2021)
    formatCurrency(number) {
      return number?.toLocaleString("de-DE", { minimumFractionDigits: 0 });
    },

    // Định dạng ngày tháng
    // CreatedBy: DDCong(25/03/2021)
    formatDate(dateString, formater = "DD/MM/YYYY") {
      if (dateString != undefined) return moment(dateString).format(formater);
    },
    // convert Id loại tài sản => tên tài sản
    // CreatedBy: DDCong(25/03/2021)
    getAssetTypeName(assetTypeId) {
      return this.assetTypes.find(
        (assetType) => assetType.assetTypeId === assetTypeId
      )?.assetTypeName;
    },

    //Convert Id phòng ban sang tên phòng ban
    // CreatedBy: DDCong(25/03/2021)
    getDepartmentName(departmentId) {
      return this.departments.find(
        (department) => department.departmentID === departmentId
      )?.departmentName;
    },

    //Hiển thị chức năng cho từng dòng dữ liệu
    showOperation() {
      return (this.operation = true);
    },

    //Tính tổng nguyên giá
    totalPrice() {
      var sum;
      for (var asset in this.assets) {
        sum = asset.originalPrice;
      }
      return sum;
    },

    //Tait lại dữ liệu
     refreshData(){
        this.refreshAsset();
        this.refreshAssetType();
        this.refreshDepartment();
    },
        // Tải lại tài sản
    // CreatedBy: DDCong(26/3)
    async refreshAsset() {
      try {
        this.assets = [];
        const responseAsset = await axios.get(this.BASE_URL + "/api/v1/assets");
        console.log(responseAsset);
        this.assets = responseAsset.data;
      } catch (error) {
        console.log(error);
      }
    },

    // Tải lại loại tài sản
    // CreatedBy: DDCong(26/3)
    async refreshAssetType() {
      try {
        const responseAssetType = await axios.get(
          this.BASE_URL + "/api/v1/asset-types"
        );
        console.log(responseAssetType.data);
        this.assetTypes = responseAssetType.data;
      } catch (error) {
        console.log(error);
      }
    },

    // Tải lại phòng ban
    // CreatedBy: DDCONG
    async refreshDepartment() {
      try {
        const responseDepartment = await axios.get(
          this.BASE_URL + "/api/v1/departments"
        );
        console.log(responseDepartment);
        this.departments = responseDepartment.data;
      } catch (error) {
        console.log(error);
      }
    },

    //Tìm kiếm dữ liệu 
    async search(){
      try {
        if(this.searchKeyword == ""){
            return this.refreshData();
        }
        else{
          const response = await axios.get(this.BASE_URL + "/api/v1/assets/search", {
          params: {
            contentFilter: this.searchKeyword,
          },
        })
          console.log(response);
          this.assets = response.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
    offOperation() {
      this.operation = true;
    },

    async changeAsset() {
      if (this.asset.assetId == undefined) {
        console.log(this.asset);
        const response = await axios.post(
          this.BASE_URL + "/api/v1/assets",
          this.asset
        );
        this.assets.push(this.asset);
        console.log(response);
        this.currentState = false;
        return response;
      } else {
        const response = axios.put(
          this.BASE_URL + "/api/v1/assets",
          this.asset
        );
        this.currentState = false;
        return response;
      }
    },

        //Xóa 1 bản ghi
  async deleteAsset(asset) {
      console.log(asset.assetId);
      console.log(this.asset);
      const response = await axios.delete(this.BASE_URL + "/api/v1/assets", {
        params: {
          ids: asset.assetId,
        },
      });
      this.refreshData();
      return response;
    },
  },

 

  ///Lấy dữ liệu từ database
  ///CreatBy: DDCong(25-03-2021)
  async created() {
    try {
      const responseAsset = await axios.get(this.BASE_URL + "/api/v1/assets");
      this.assets = responseAsset.data;

      const responseAssetType = await axios.get(
        this.BASE_URL + "/api/v1/assetTypes"
      );
      this.assetTypes = responseAssetType.data;

      const responseDepartment = await axios.get(
        this.BASE_URL + "/api/v1/departments"
      );
      this.departments = responseDepartment.data;

      console.log(this.assets.length);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("../../../css/pages/dictionary/QLTS.css");
@import url("../../../css/common/filter.css");
@import url("../../../css/common/table.css");
</style>

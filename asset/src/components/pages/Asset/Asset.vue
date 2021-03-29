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
            <th style="width: 17%">LOẠI TÀI SẢN</th>
            <th style="width: 20%">PHÒNG BAN</th>
            <th class="cell-number" style="width: 10%">NGUYÊN GIÁ</th>
            <th style="width: 5% ; text-align: center">CHỨC NĂNG</th>
          </tr>
        </thead>
        <tbody>
          <div v-if="!this.assets.length" class="no-data">
            Không có dữ liệu hiển thị !
          </div>
          <tr
            class="el-table__row"
            v-for="(asset, index) in assets"
            :key="index"
            multiple
          >
            <td style="width: 3%; text-align: center !important;">{{ index + 1 }}</td>
            <td style="width: 10%">{{ asset.assetCode }}</td>
            <td style="width: 25%">{{ asset.assetName }}</td>
            <td style="width: 17%">
              {{ getAssetTypeName(asset.assetTypeId) }}
            </td>
            <td style="width: 20%">
              {{ getDepartmentName(asset.departmentId) }}
            </td>
            <td
              style="width: 10%;"
              class="cell-number"
            >
              {{ formatCurrency(asset.originalPrice) }}
            </td>
            <td style="width: 5% ; align-item:center ;" class="asset-operation">
              <div class="icon-group" v-show="operation" style=" align-item:center ;">
                <div class="icon icon-edit" @click="showDetail(asset)"></div>
                <div
                  class="icon icon-delete"
                  @click="confirmDelete(asset)"
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
      v-bind:errors="errors"
      @changeAsset="changeAsset()"
    />

    <Alert
      v-if="alertState"
      @aceptDelete="aceptDelete()"
      @cancleDelete="cancleDelete()"
    />
    <!-- <contextMenu v-if="contextState"/> -->
  </div>
</template>


<script>
import AssetDetail from "./AssetDetail";
import Alert from "../../common/Alert";
// import contextMenu from "../../common/contextMenu";
import axios from "axios";
import moment from "moment";
export default {
  name: "Asset",
  components: {
    AssetDetail,
    Alert,
    // contextMenu,
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
      alertState: false,
      contextState: true,
      errors: {
        errorCode: "",
        errorName: "",
      },
      items:["a","b","c"],
    };
  },
  methods: {
    handleClick(event, item) {
      this.$refs.vueSimpleContextMenu.showMenu(event, item);
    },

    optionClicked(event) {
      window.alert(JSON.stringify(event));
    },
    //CreateBy: DDCong(26/03/2021)
    confirmDelete(asset) {
      this.alertState = true;
      this.asset = asset;
    },
    //CreateBy: DDCong(26/03/2021)
    cancleDelete() {
      this.alertState = false;
    },
    //CreateBy: DDCong(26/03/2021)
    aceptDelete() {
      this.deleteAsset(this.asset);
    },
    //thêm dữ liệu tài sản
    //CreateBy: DDCong(26/03/2021)
    AddAsset() {
      this.currentState = true;
      this.asset = {};
    },
    //Xem dữ liệu tài sản
    //CreateBy: DDCong(26/03/2021)
    showDetail(asset) {
      this.asset = asset;
      this.asset.departmentName = this.departments.find(
        (department) => department.departmentId === asset.departmentId
      )?.departmentName;
      this.asset.assetTypeName = this.assetTypes.find(
        (assetType) => assetType.assetTypeId === asset.assetTypeId
      )?.assetTypeName;
      // this.$root.getAssetTypeName();
      this.asset.departmentCode = this.departments.find(
        (department) => department.departmentId === asset.departmentId
      )?.departmentCode;
      // console.log(this.departments);
      this.asset.assetTypeCode = this.assetTypes.find(
        (assetType) => assetType.assetTypeId === asset.assetTypeId
      )?.assetTypeCode;
      //  this.$root.getDepartmentName();
      this.currentState = true;
    },
    //Đóng bản thêm dữ liệu
    closeDialog() {
      this.refreshData();
      this.errors.errorCode = "";
      this.errors.errorName = "";
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
        (department) => department.departmentId === departmentId
      )?.departmentName;
    },

    //Hiển thị chức năng cho từng dòng dữ liệu
    showOperation() {
      return (this.operation = true);
    },

    //Tính tổng nguyên giá
    totalPrice() {
      var sum = 0;

      this.assets.forEach((asset) => {
        sum = sum + asset.originalPrice;
      });
      return this.formatCurrency(sum);
    },

    //Tait lại dữ liệu
    refreshData() {
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
        this.assets = responseAsset.data;
        console.log(this.assets.length);
      } catch (error) {
        console.log(error);
      }
    },

    // Tải lại loại tài sản
    // CreatedBy: DDCong(26/3)
    async refreshAssetType() {
      try {
        const responseAssetType = await axios.get(
          this.BASE_URL + "/api/v1/assetTypes"
        );
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
        this.departments = responseDepartment.data;
      } catch (error) {
        console.log(error);
      }
    },

    //Tìm kiếm dữ liệu
    async search() {
      try {
        if (this.searchKeyword == "") {
          return this.refreshData();
        } else {
          const response = await axios.get(
            this.BASE_URL + "/api/v1/assets/search",
            {
              params: {
                contentFilter: this.searchKeyword,
              },
            }
          );
          this.assets = response.data;
        }
      } catch (error) {
        console.log(error);
      }
    },

    //Thêm hoặc sửa tài sản
    async changeAsset() {
      if (this.asset.assetId == undefined) {
        const response = await axios.post(
          this.BASE_URL + "/api/v1/assets",
          this.asset
        );
        if (response.data.misaCode == 900) {
          this.errors.errorCode = response.data.messenger;
        } else {
          this.assets.push(this.asset);
          console.log(this.errors.errorCode);
          this.currentState = false;
        }
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
      this.alertState = false;
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

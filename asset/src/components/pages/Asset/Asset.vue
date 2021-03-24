<template>
  <div class="content">
    <div class="filter-bar">
      <div class="filter-left">
        <input type="text" placeholder="Tìm kiếm" class="input-search" />
        <div class="icon-search"></div>
      </div>
      <div class="filter-right">
        <button @click="AddAsset()">Thêm</button>
        <button class="m-btn-refresh"></button>
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
            <th colspan="1" rowspan="1">
              <div class="cell">STT</div>
            </th>
            <th colspan="1" rowspan="1">
              <div class="cell">NGÀY GHI TĂNG</div>
            </th>
            <th colspan="1" rowspan="1">
              <div class="cell">MÃ TÀI SẢN</div>
            </th>
            <th colspan="1" rowspan="1">
              <div class="cell">TÊN TÀI SẢN</div>
            </th>
            <th colspan="1" rowspan="1">
              <div class="cell">LOẠI TÀI SẢN</div>
            </th>
            <th colspan="1" rowspan="1">
              <div class="cell">PHÒNG BAN</div>
            </th>
            <th colspan="1" rowspan="1">
              <div class="cell">NGUYÊN GIÁ</div>
            </th>
            <th colspan="1" rowspan="1">
              <div class="cell">CHỨC NĂNG</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="el-table__row">
            <td>1</td>
            <td>29/09/2019</td>
            <td>TS00001</td>
            <td>Xe ô tô HONDA CIVIC</td>
            <td>Ô tô</td>
            <td>Phòng Hành chính tổng hợp</td>
            <td>754.9000.0000</td>
            <td></td>
          </tr>
          <tr class="el-table__row">
            <td>1</td>
            <td>29/09/2019</td>
            <td>TS00001</td>
            <td>Xe ô tô HONDA CIVIC</td>
            <td>Ô tô</td>
            <td>Phòng Hành chính tổng hợp</td>
            <td>754.9000.0000</td>
            <td></td>
          </tr>
          <tr class="el-table__row">
            <td>1</td>
            <td>29/09/2019</td>
            <td>TS00001</td>
            <td>Xe ô tô HONDA CIVIC</td>
            <td>Ô tô</td>
            <td>Phòng Hành chính tổng hợp</td>
            <td>754.9000.0000</td>
            <td></td>
          </tr>
          <tr class="el-table__row">
            <td>1</td>
            <td>29/09/2019</td>
            <td>TS00001</td>
            <td>Xe ô tô HONDA CIVIC</td>
            <td>Ô tô</td>
            <td>Phòng Hành chính tổng hợp</td>
            <td>754.9000.0000</td>
            <td></td>
          </tr>
          <tr class="el-table__row">
            <td>1</td>
            <td>29/09/2019</td>
            <td>TS00001</td>
            <td>Xe ô tô HONDA CIVIC</td>
            <td>Ô tô</td>
            <td>Phòng Hành chính tổng hợp</td>
            <td>754.9000.0000</td>
            <td></td>
          </tr>
          <tr class="el-table__row">
            <td>1</td>
            <td>29/09/2019</td>
            <td>TS00001</td>
            <td>Xe ô tô HONDA CIVIC</td>
            <td>Ô tô</td>
            <td>Phòng Hành chính tổng hợp</td>
            <td>754.9000.0000</td>
            <td></td>
          </tr>
          <tr class="el-table__row">
            <td>1</td>
            <td>29/09/2019</td>
            <td>TS00001</td>
            <td>Xe ô tô HONDA CIVIC</td>
            <td>Ô tô</td>
            <td>Phòng Hành chính tổng hợp</td>
            <td>754.9000.0000</td>
            <td></td>
          </tr>
          <tr class="el-table__row">
            <td>1</td>
            <td>29/09/2019</td>
            <td>TS00001</td>
            <td>Xe ô tô HONDA CIVIC</td>
            <td>Ô tô</td>
            <td>Phòng Hành chính tổng hợp</td>
            <td>754.9000.0000</td>
            <td></td>
          </tr>
          <tr class="el-table__row">
            <td>1</td>
            <td>29/09/2019</td>
            <td>TS00001</td>
            <td>Xe ô tô HONDA CIVIC</td>
            <td>Ô tô</td>
            <td>Phòng Hành chính tổng hợp</td>
            <td>754.9000.0000</td>
            <td></td>
          </tr>
          <tr class="el-table__row">
            <td>1</td>
            <td>29/09/2019</td>
            <td>TS00001</td>
            <td>Xe ô tô HONDA CIVIC</td>
            <td>Ô tô</td>
            <td>Phòng Hành chính tổng hợp</td>
            <td>754.9000.0000</td>
            <td></td>
          </tr>
          <tr class="el-table__row">
            <td>1</td>
            <td>29/09/2019</td>
            <td>TS00001</td>
            <td>Xe ô tô HONDA CIVIC</td>
            <td>Ô tô</td>
            <td>Phòng Hành chính tổng hợp</td>
            <td>754.9000.0000</td>
            <td></td>
          </tr>
          <tr class="el-table__row">
            <td>1</td>
            <td>29/09/2019</td>
            <td>TS00001</td>
            <td>Xe ô tô HONDA CIVIC</td>
            <td>Ô tô</td>
            <td>Phòng Hành chính tổng hợp</td>
            <td>754.9000.0000</td>
            <td></td>
          </tr>
          <tr class="el-table__row">
            <td>1</td>
            <td>29/09/2019</td>
            <td>TS00001</td>
            <td>Xe ô tô HONDA CIVIC</td>
            <td>Ô tô</td>
            <td>Phòng Hành chính tổng hợp</td>
            <td>754.9000.0000</td>
            <td></td>
          </tr>
          <tr class="el-table__row">
            <td>1</td>
            <td>29/09/2019</td>
            <td>TS00001</td>
            <td>Xe ô tô HONDA CIVIC</td>
            <td>Ô tô</td>
            <td>Phòng Hành chính tổng hợp</td>
            <td>754.9000.0000</td>
            <td></td>
          </tr>
          <tr class="el-table__row">
            <td>1</td>
            <td>29/09/2019</td>
            <td>TS00001</td>
            <td>Xe ô tô HONDA CIVIC</td>
            <td>Ô tô</td>
            <td>Phòng Hành chính tổng hợp</td>
            <td>754.9000.0000</td>
            <td></td>
          </tr>
          <tr class="el-table__row">
            <td>1</td>
            <td>29/09/2019</td>
            <td>TS00001</td>
            <td>Xe ô tô HONDA CIVIC</td>
            <td>Ô tô</td>
            <td>Phòng Hành chính tổng hợp</td>
            <td>754.9000.0000</td>
            <td></td>
          </tr>
          <tr class="el-table__row">
            <td>1</td>
            <td>29/09/2019</td>
            <td>TS00001</td>
            <td>Xe ô tô HONDA CIVIC</td>
            <td>Ô tô</td>
            <td>Phòng Hành chính tổng hợp</td>
            <td>754.9000.0000</td>
            <td></td>
          </tr>
          <tr class="el-table__row">
            <td>1</td>
            <td>29/09/2019</td>
            <td>TS00001</td>
            <td>Xe ô tô HONDA CIVIC</td>
            <td>Ô tô</td>
            <td>Phòng Hành chính tổng hợp</td>
            <td>754.9000.0000</td>
            <td></td>
          </tr>
          <tr class="el-table__row">
            <td>1</td>
            <td>29/09/2019</td>
            <td>TS00001</td>
            <td>Xe ô tô HONDA CIVIC</td>
            <td>Ô tô</td>
            <td>Phòng Hành chính tổng hợp</td>
            <td>754.9000.0000</td>
            <td></td>
          </tr>
          <tr class="el-table__row">
            <td>1</td>
            <td>29/09/2019</td>
            <td>TS00001</td>
            <td>Xe ô tô HONDA CIVIC</td>
            <td>Ô tô</td>
            <td>Phòng Hành chính tổng hợp</td>
            <td>754.9000.0000</td>
            <td></td>
          </tr>
          <tr class="el-table__row">
            <td>1</td>
            <td>29/09/2019</td>
            <td>TS00001</td>
            <td>Xe ô tô HONDA CIVIC</td>
            <td>Ô tô</td>
            <td>Phòng Hành chính tổng hợp</td>
            <td>754.9000.0000</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="footer-content">
      <div>Tổng số tài sản: 1.015</div>
      <div>Tổng ngyên giá: 1.541.857.000</div>
    </div>
    <AssetDetail v-show="currentState" @closeDialog="closeDialog()" />
  </div>
</template>


<script>
import AssetDetail from "./AssetDetail";

export default {
  name: "Asset",
  components: {
    AssetDetail,
  },
  props: {},
  data: function () {
    return {
      currentState: false,
    };
  },
  methods: {
    AddAsset() {
      this.currentState = true;
    },
    closeDialog() {
      this.currentState = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("../../../css/pages/dictionary/QLTS.css");
@import url("../../../css/common/filter.css");
@import url("../../../css/common/table.css");
</style>

<template>
  <v-app>
    <v-main>
      <div id="app">
        <div class="body-left">
          <TheMenu />
        </div>
        <div class="body-right">
          <TheHead />
          <Asset />
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import TheMenu from "./components/TheMenu.vue";
import TheHead from "./components/TheHead.vue";
import Asset from "./components/pages/Asset/Asset";

export default {
  name: "App",
  components: {
    TheMenu,
    TheHead,
    Asset,
  },
};
</script>

<style lang="css">
@import "./css/common/common.css";
@import "./css/common/common.css";
#app {
  display: flex;
  margin: 0px;
  width: 100%;
}
</style>

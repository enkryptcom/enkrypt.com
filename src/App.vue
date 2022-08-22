<template>
  <app-header />
  <main>
    <router-view name="view"></router-view>
  </main>
  <app-footer />
</template>

<script setup lang="ts">
import { onBeforeMount } from "vue";
import AppHeader from "./components/app-header/index.vue";
import AppFooter from "./components/app-footer/index.vue";
import { v4 as uuidv4 } from "uuid";

onBeforeMount(() => {
  window.Intercom("boot", {
    app_id: "ja20qe25",
    user_id: uuidv4(),
    api_base: "https://api-iam.intercom.io",
  });
});
</script>

<style lang="less">
@import "./assets/styles/theme.less";

#app {
  position: relative;
}
</style>

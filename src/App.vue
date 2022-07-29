<template>
  <app-header />
  <main>
    <router-view name="view"></router-view>
  </main>
  <app-footer />
</template>

<script setup lang="ts">
import AppHeader from "./components/app-header/index.vue";
import AppFooter from "./components/app-footer/index.vue";
</script>

<style lang="less">
@import "./assets/styles/theme.less";

#app {
  position: relative;
}
</style>

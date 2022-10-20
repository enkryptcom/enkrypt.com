<template>
  <app-header-universal />
  <main>
    <router-view name="view"></router-view>
  </main>
  <app-footer />
</template>

<script setup lang="ts">
import { computed, onBeforeMount, onMounted, WritableComputedRef } from "vue";
import { useStore } from "vuex";
import AppHeaderUniversal from "./components/app-header/index.vue";
import AppFooter from "./components/app-footer/index.vue";
import { useRouter, useRoute } from "vue-router";
import { v4 as uuidv4 } from "uuid";

const route = useRoute();
const router = useRouter();
const store = useStore();

router.afterEach(() => {
  store.dispatch("initInternal", route.name != "main");
});

onBeforeMount(() => {
  window.Intercom("boot", {
    app_id: "ja20qe25",
    user_id: uuidv4(),
    api_base: "https://api-iam.intercom.io",
  });
});
onMounted(() => {
  const searchURL = new URL(window.location.href);
  const ref = searchURL.searchParams.get("ref");
  if (ref === "enkrypt_help") {
    window.Intercom("show");
  }
});

var isInternal: WritableComputedRef<boolean> = computed(
  () => store.getters.isInternalPage
);
</script>

<style lang="less">
@import "./assets/styles/theme.less";

#app {
  position: relative;
}
</style>

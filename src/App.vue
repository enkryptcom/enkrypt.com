<template>
  <app-header-universal />
  <main>
    <router-view name="view"></router-view>
  </main>
  <app-footer />
  <modal v-if="!isHideRaffleModal" @close="close" />
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from "vue";
import { useInternalPageStore } from "./store";
import AppHeaderUniversal from "./components/app-header/index.vue";
import AppFooter from "./components/app-footer/index.vue";
import { useRouter, useRoute } from "vue-router";
import { v4 as uuidv4 } from "uuid";
import Modal from "./views/modal/index.vue";
import { LocalStorageKeys, RaffleInfoType } from "./types/raffle-types";

const route = useRoute();
const router = useRouter();
const store = useInternalPageStore();
const isHideRaffleModal = ref<boolean>(false);

router.afterEach(() => {
  store.setInternal(route.name != "main");
});

const close = () => {
  isHideRaffleModal.value = true;
  document.body.classList.remove("fixed");
};

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
  const raffleInfo = localStorage.getItem(LocalStorageKeys.RAFFLE_POPUP);
  if (raffleInfo) {
    const jRaffleInfo: RaffleInfoType = JSON.parse(raffleInfo);
    if (jRaffleInfo.timestamp > new Date().getTime() - 3 * 24 * 60 * 60 * 1000)
      isHideRaffleModal.value = true;
  }
  if (!isHideRaffleModal.value) {
    document.body.classList.add("fixed");
  } else {
    document.body.classList.remove("fixed");
  }
});
</script>

<style lang="less">
@import "./assets/styles/theme.less";

#app {
  position: relative;
}
</style>

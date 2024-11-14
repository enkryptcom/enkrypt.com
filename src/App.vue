<template>
  <app-header-universal />
  <main>
    <router-view name="view"></router-view>
  </main>
  <app-footer />
  <modal v-if="!isHideRaffleModal" @close="close" />
  <app-modal
    v-if="
      subscriptionStore.canShowSubscribePopup ||
      subscriptionStore.isShowSelectModal
    "
    @close="close"
  >
    <subscription
      @set-email="setEmail"
      @close="close"
      @submit="submitSubscription"
    />
  </app-modal>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from "vue";
import { useInternalPageStore, useSubscriptionStore } from "./store";
import AppHeaderUniversal from "./components/app-header/index.vue";
import AppFooter from "./components/app-footer/index.vue";
import AppModal from "./components/app-modal/index.vue";
import { useRouter, useRoute } from "vue-router";
import { v4 as uuidv4 } from "uuid";
import Modal from "./views/modal/index.vue";
import Subscription from "./views/subscription/index.vue";
import {
  trackEmailSubscriptionClosed,
  trackEmailSubscriptionSubmitted,
} from "./utils/metrics";
import { SubscriptionOptions } from "./types/subscription";
// import { LocalStorageKeys, RaffleInfoType } from "./types/raffle-types";

const route = useRoute();
const router = useRouter();
const store = useInternalPageStore();
const subscriptionStore = useSubscriptionStore();
const isHideRaffleModal = ref<boolean>(true);

router.afterEach(() => {
  store.setInternal(route.name != "main");
});

const close = () => {
  isHideRaffleModal.value = true;
  subscriptionStore.closePopup();
  trackEmailSubscriptionClosed(location.pathname);
};

onBeforeMount(() => {
  const checkAndSetIntercom = setInterval(() => {
    if (window.Intercom) {
      window.Intercom("boot", {
        app_id: "ja20qe25",
        user_id: uuidv4(),
        api_base: "https://api-iam.intercom.io",
      });
      clearInterval(checkAndSetIntercom);
    }
  }, 1000);
});
onMounted(() => {
  const searchURL = new URL(window.location.href);
  const ref = searchURL.searchParams.get("ref");
  if (ref === "enkrypt_help") {
    window.Intercom("show");
  }
  // const raffleInfo = localStorage.getItem(LocalStorageKeys.RAFFLE_POPUP);
  // let hideRaffle = false;
  // if (raffleInfo) {
  //   const jRaffleInfo: RaffleInfoType = JSON.parse(raffleInfo);
  //   if (jRaffleInfo.timestamp > new Date().getTime() - 3 * 24 * 60 * 60 * 1000)
  //     hideRaffle = true;
  // }
  // if (searchURL.pathname.includes("/networks/")) hideRaffle = true;

  // setTimeout(() => {
  //   isHideRaffleModal.value = hideRaffle;
  // }, 3000);
});
const setEmail = (email: string) => {
  subscriptionStore.setUserEmail(email);
};

const submitSubscription = (values: SubscriptionOptions[]) => {
  subscriptionStore.setUserValues(values);
  submitEmail();
};
const submitEmail = async () => {
  const _url = `https://mainnet.mewwallet.dev/email-web`;
  const response = await fetch(_url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      email: subscriptionStore.userEmail,
      fields: { platform: "enkrypt-landing" },
      groups: subscriptionStore.userValues,
      product: "ENKRYPT_LANDING",
    }),
  });
  if (!response.ok) {
    console.error(`Response status: ${response.status}`);
  } else {
    trackEmailSubscriptionSubmitted(
      location.pathname,
      subscriptionStore.userValues
    );
  }
  subscriptionStore.setUserEmail("");
  subscriptionStore.setUserValues([]);
};
</script>

<style lang="less">
@import "./assets/styles/theme.less";

#app {
  position: relative;
}
</style>

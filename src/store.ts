import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { computed, ref } from "vue";
import { SubscriptionOptions } from "./types/subscription";

export const useInternalPageStore = defineStore("internalPages", () => {
  const isPage = ref(false);
  const isInternalPage = computed(() => isPage);
  const setInternal = (val: boolean) => {
    isPage.value = val;
  };
  return { isInternalPage, setInternal };
});

export const useSubscriptionStore = defineStore("email-subscription", () => {
  const storageKey = "email-subscription";
  const currTime = new Date().getTime();
  const lastSubPopupTime = useLocalStorage<number | undefined>(
    `${storageKey}-lastSubPopup`,
    undefined
  );
  const canShowSubscribePopup = ref(false);
  setTimeout(() => {
    canShowSubscribePopup.value =
      lastSubPopupTime.value === undefined
        ? true
        : currTime - (lastSubPopupTime.value || 0) >
          7 * 24 * 60 * 60 * 1000 * 2;
  }, 10000);

  const isShowSelectModal = ref(false);

  const setShowSelectModal = (val: boolean) => {
    isShowSelectModal.value = val;
  };

  const closePopup = () => {
    lastSubPopupTime.value = currTime;
    canShowSubscribePopup.value = false;
    setShowSelectModal(false);
  };

  const userEmail = ref("");
  const userValues = ref<SubscriptionOptions[]>([]);

  const setUserEmail = (val: string) => {
    userEmail.value = val;
  };
  const setUserValues = (val: SubscriptionOptions[]) => {
    userValues.value = val;
  };

  return {
    isShowSelectModal,
    setShowSelectModal,
    canShowSubscribePopup,
    userEmail,
    userValues,
    setUserEmail,
    setUserValues,
    closePopup,
  };
});

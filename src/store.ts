import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { computed, ref } from "vue";

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
  const canShowSubscribePopup = ref(
    lastSubPopupTime.value === undefined
      ? true
      : currTime - (lastSubPopupTime.value || 0) > 3 * 1000
  ); // 7 * 24 * 60 * 60 * 1000 * 2;
  console.log("canShowSubscribePopup", canShowSubscribePopup.value);

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
  const userValues = ref<string[]>([]);

  const setUserEmail = (val: string) => {
    userEmail.value = val;
  };
  const setUserValues = (val: string[]) => {
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

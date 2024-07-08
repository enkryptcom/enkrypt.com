import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useInternalPageStore = defineStore("internalPages", () => {
  const isPage = ref(false);
  const isInternalPage = computed(() => isPage);
  const setInternal = (val: boolean) => {
    isPage.value = val;
  };
  return { isInternalPage, setInternal };
});

export const useSubscriptionStore = defineStore("subscription", () => {
  const isShowSelectModal = ref(false);
  const setShowSelectModal = (val: boolean) => {
    isShowSelectModal.value = val;
  };
  return { isShowSelectModal, setShowSelectModal };
});

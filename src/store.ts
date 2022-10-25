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

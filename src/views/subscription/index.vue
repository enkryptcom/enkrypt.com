<template>
  <subscription-input-email
    v-if="state == SubscriptionModalState.enter"
    @submit="submit"
    @unsubscribe="unsubscribe"
  />
  <subscription-what-interested
    v-if="state == SubscriptionModalState.select"
    @finish="finish"
  />
  <subscription-finish v-if="state == SubscriptionModalState.finish" />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useSubscriptionStore } from "@/store";
import { SubscriptionModalState } from "@/types/subscription";
import SubscriptionInputEmail from "./components/subscription-input-email.vue";
import SubscriptionWhatInterested from "./components/subscription-what-interested.vue";
import SubscriptionFinish from "./components/subscription-finish.vue";

const state = ref<SubscriptionModalState>(SubscriptionModalState.enter);
const store = useSubscriptionStore();

const emit = defineEmits<{
  (e: "submit"): void;
  (e: "unsubscribe"): void;
}>();

const submit = () => {
  state.value = SubscriptionModalState.select;
  emit("submit");
};

const unsubscribe = () => {
  emit("unsubscribe");
};

const finish = () => {
  state.value = SubscriptionModalState.finish;
};

onMounted(() => {
  state.value = store.isShowSelectModal
    ? SubscriptionModalState.select
    : SubscriptionModalState.enter;
});

onUnmounted(() => {
  store.setShowSelectModal(false);
});
</script>

<style lang="less" scoped>
@import "../../assets/styles/theme.less";
</style>

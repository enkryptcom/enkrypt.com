<template>
  <subscription-input-email
    v-if="state == SubscriptionModalState.enter"
    @set-email="setEmail"
    @close="emit('close')"
  />
  <subscription-what-interested
    v-if="state == SubscriptionModalState.select"
    @submit="submit"
  />
  <subscription-finish v-if="state == SubscriptionModalState.finish" />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useSubscriptionStore } from "@/store";
import {
  SubscriptionModalState,
  SubscriptionOptions,
} from "@/types/subscription";
import SubscriptionInputEmail from "./components/subscription-input-email.vue";
import SubscriptionWhatInterested from "./components/subscription-what-interested.vue";
import SubscriptionFinish from "./components/subscription-finish.vue";
import { trackEmailSubscriptionOpen } from "@/utils/metrics";

const state = ref<SubscriptionModalState>(SubscriptionModalState.enter);
const store = useSubscriptionStore();

const emit = defineEmits<{
  (e: "submit", values: SubscriptionOptions[]): void;
  (e: "close"): void;
  (e: "setEmail", email: string): void;
}>();

const setEmail = (email: string) => {
  state.value = SubscriptionModalState.select;
  emit("setEmail", email);
};

const submit = (values: SubscriptionOptions[]) => {
  state.value = SubscriptionModalState.finish;
  emit("submit", values);
};

onMounted(() => {
  state.value = store.isShowSelectModal
    ? SubscriptionModalState.select
    : SubscriptionModalState.enter;
  trackEmailSubscriptionOpen(location.pathname);
});

onUnmounted(() => {
  store.setShowSelectModal(false);
});
</script>

<style lang="less" scoped>
@import "../../assets/styles/theme.less";
</style>

<template>
  <div class="subscription__interested">
    <learn-icon-primary />
    <h2 class="subscription__interested-title">
      Let us know what you are interested in.
    </h2>

    <a
      href="javascript:void(0)"
      class="subscription__interested-option"
      :class="{ active: isCryptoKnowledge }"
      @click="toggleCryptoKnowledge"
    >
      <span>Crypto knowledge, best practices and general tips.</span>
    </a>

    <a
      href="javascript:void(0)"
      class="subscription__interested-option"
      :class="{ active: isTrendingTokens }"
      @click="toggleTrendingTokens"
    >
      <span>Trending tokens, big movers and onchain activity.</span>
    </a>

    <a
      href="javascript:void(0)"
      class="subscription__interested-option"
      :class="{ active: isProductUpdates }"
      @click="toggleProductUpdates"
    >
      <span>Product Updates.</span>
    </a>

    <a
      href="javascript:void(0)"
      class="subscription__interested-submit"
      @click="submit()"
    >
      Finish
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import LearnIconPrimary from "@/icons/common/learn-icon-primary.vue";
import { SubscriptionOptions } from "@/types/subscription";

const isCryptoKnowledge = ref<boolean>(true);
const isTrendingTokens = ref<boolean>(true);
const isProductUpdates = ref<boolean>(false);

const emit = defineEmits<{
  (e: "submit", values: SubscriptionOptions[]): void;
}>();

const submit = () => {
  const values: SubscriptionOptions[] = [];
  if (isCryptoKnowledge.value) {
    values.push(SubscriptionOptions.CRYPTO_KB);
  }
  if (isTrendingTokens.value) {
    values.push(SubscriptionOptions.MARKET);
  }
  if (isProductUpdates.value) {
    values.push(SubscriptionOptions.PRODUCT_UPDATES);
  }
  emit("submit", values);
};

const toggleCryptoKnowledge = () => {
  isCryptoKnowledge.value = !isCryptoKnowledge.value;
};

const toggleTrendingTokens = () => {
  isTrendingTokens.value = !isTrendingTokens.value;
};

const toggleProductUpdates = () => {
  isProductUpdates.value = !isProductUpdates.value;
};
</script>

<style lang="less" scoped>
@import "../../../assets/styles/theme.less";

.subscription {
  &__interested {
    text-align: center;

    &-title {
      .heading2();
      color: @black;
      margin: 12px 0 24px 0;
    }

    &-submit {
      display: block;
      text-decoration: none;
      background: linear-gradient(86.81deg, #c549ff -22.41%, #704bff 120.76%);
      height: 56px;
      width: 100%;
      text-decoration: none;
      text-align: center;
      color: @white;
      font-size: 20px;
      font-weight: 700;
      line-height: 56px;
      border-radius: 44px;
      margin: 26px 0 0 0;
      transition: opacity 300ms ease-in-out;
      opacity: 1;

      &:hover {
        opacity: 0.7;
      }
    }

    &-option {
      position: relative;
      padding: 0 0 0 78px;
      display: block;
      text-decoration: none;
      text-align: left;
      margin: 0 0 20px 0;

      .screen-sm({
        padding: 0 54px 0 78px;
      });

      .screen-xs({
        padding: 0 8px 0 78px;
      });

      span {
        .paragraph();
        color: @black;
        opacity: 0.65;
      }

      &::before {
        content: "";
        width: 32px;
        height: 32px;
        position: absolute;
        left: 23px;
        top: 11px;
        background-image: url('data:image/svg+xml, <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" ><g clip-path="url(%23clip0_1740_19692)"><circle cx="16" cy="16" r="15" stroke="%23684CFF" stroke-width="2" /></g><defs><clipPath id="clip0_1740_19692"><rect width="32" height="32" fill="white" /></clipPath></defs></svg>');
      }

      &.active {
        &::before {
          background-image: url('data:image/svg+xml, <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" ><g clip-path="url(%23clip0_1740_19695)"><circle cx="16" cy="16" r="15" fill="%23684CFF" stroke="%23684CFF" stroke-width="2" /><path d="M14.2542 24.428C13.7168 24.428 13.269 24.2142 12.9107 23.7866L8.43837 18.3694C8.28236 18.1903 8.17257 18.017 8.10901 17.8494C8.04545 17.6818 8.01367 17.5085 8.01367 17.3294C8.01367 16.9191 8.14946 16.5811 8.42104 16.3153C8.6984 16.0437 9.04509 15.9079 9.46113 15.9079C9.92339 15.9079 10.3076 16.0957 10.6139 16.4713L14.2195 20.935L21.3008 9.7454C21.4799 9.47382 21.6648 9.28313 21.8555 9.17335C22.052 9.05778 22.2918 9 22.5749 9C22.9909 9 23.3347 9.1329 23.6063 9.3987C23.8779 9.6645 24.0137 9.99964 24.0137 10.4041C24.0137 10.5544 23.9877 10.7104 23.9357 10.8722C23.8837 11.0339 23.8028 11.2015 23.693 11.3749L15.6236 23.7259C15.3058 24.1939 14.8494 24.428 14.2542 24.428Z" fill="white" /></g><defs><clipPath id="clip0_1740_19695"><rect width="32" height="32" fill="white" /></clipPath></defs></svg>');
        }
      }
    }
  }
}
</style>

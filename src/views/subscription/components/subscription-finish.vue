<template>
  <div class="subscription__finish">
    <learn-icon-primary />
    <h2 class="subscription__finish-title">Welcome to the MEW Universe!</h2>
    <p class="subscription__finish-desc">
      We're excited to have you here onchain with us. Keep an eye on your inbox
      for the latest crypto news, trending tokens, security tips and more! Get
      ahead — and stay ahead — in the MEW Universe.
    </p>
    <p class="subscription__finish-label">What's next:</p>
    <div class="subscription__finish-buttons">
      <a :href="getDownloadLink()">Download Enkrypt</a>
      <a href="https://ccswap.myetherwallet.com/" target="_blank">Buy crypto</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import LearnIconPrimary from "@/icons/common/learn-icon-primary.vue";
import { getDownloadLink } from "@/utils/browser";
</script>

<style lang="less" scoped>
@import "../../../assets/styles/theme.less";

.subscription {
  &__finish {
    text-align: center;

    &-title {
      .heading2();
      color: @black;
      margin: 12px 0 8px 0;
    }

    &-desc {
      .paragraph();
      opacity: 0.65;
      color: @black;
      margin: 0 0 24px 0;
    }

    &-label {
      font-size: 14px;
      font-weight: 700;
      line-height: 21px;
      letter-spacing: 1px;
      text-align: center;
      color: @black;
      margin: 0 0 16px 0;
      text-transform: uppercase;
    }

    &-buttons {
      font-size: 0;

      a {
        display: inline-block;
        text-decoration: none;
        background: linear-gradient(86.81deg, #c549ff -22.41%, #704bff 120.76%);
        height: 56px;
        width: calc(~"50% - 8px");
        text-decoration: none;
        text-align: center;
        color: @white;
        font-size: 20px;
        font-weight: 700;
        line-height: 56px;
        border-radius: 44px;
        margin-left: 16px;
        transition: opacity 300ms ease-in-out;
        opacity: 1;

        &:hover {
          opacity: 0.7;
        }

        .screen-xs({
            margin: 16px 0 0 0;
            width: 100%;
        });

        &:first-child {
          margin: 0;
        }
      }
    }
  }
}
</style>

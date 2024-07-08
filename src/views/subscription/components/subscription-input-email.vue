<template>
  <div class="subscription__input">
    <learn-icon-primary />
    <h2 class="subscription__input-title">Get better at crypto</h2>
    <p class="subscription__input-desc">
      Level up your skills with security tips, industry insights, news and more!
    </p>
    <div class="subscription__input-wrap" :class="{ error: isError }">
      <input type="email" placeholder="Enter your email" value="" />
    </div>
    <div v-if="isError" class="subscription__input-error">Error message</div>
    <a
      href="javascript:void(0)"
      class="subscription__input-submit"
      @click="submit()"
    >
      Sign me up!
    </a>
    <p class="subscription__input-label">
      We respect your privacy. Unsubscribe at any time.
    </p>
    <a
      href="javascript:void(0)"
      class="subscription__input-unsubscribe"
      @click="unsubscribe()"
    >
      No thanks,<br />I already know everything about crypto.
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import LearnIconPrimary from "@/icons/common/learn-icon-primary.vue";

const isError = ref<boolean>(false);

const emit = defineEmits<{
  (e: "submit"): void;
  (e: "unsubscribe"): void;
}>();

const submit = () => {
  emit("submit");
};

const unsubscribe = () => {
  emit("unsubscribe");
};
</script>

<style lang="less" scoped>
@import "../../../assets/styles/theme.less";

.subscription {
  &__input {
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
      margin: 0 0 16px 0;
    }

    &-wrap {
      width: 100%;
      height: 58px;
      background-color: @white;
      border-radius: 40px;
      position: relative;
      padding: 14px 20px 14px 20px;
      box-sizing: border-box;
      background: linear-gradient(86.81deg, #c549ff -22.41%, #704bff 120.76%);
      margin: 0 0 12px 0;

      &.error {
        background: @error;
        margin: 0;

        input {
          color: @error !important;
        }
      }

      &::before {
        content: "";
        width: calc(~"100% - 4px");
        height: 54px;
        position: absolute;
        left: 2px;
        top: 2px;
        background-color: @white;
        border-radius: 40px;
      }

      input {
        border: 0 none;
        height: 30px;
        .paragraph();
        line-height: 30px;
        font-weight: 400;
        color: @black;
        outline: none;
        width: 100%;
        background: 0 none;
        position: relative;
        z-index: 101;
      }
    }

    &-error {
      .caption();
      color: @error;
      margin: 0 0 8px 0;
      text-align: left;
      padding-left: 20px;
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
      margin: 0 0 8px 0;
      transition: opacity 300ms ease-in-out;
      opacity: 1;

      &:hover {
        opacity: 0.7;
      }
    }

    &-label {
      text-align: center;
      color: @black;
      font-size: 15px;
      font-weight: 500;
      line-height: 22px;
      margin: 0 0 28px 0;
      opacity: 0.7;
    }

    &-unsubscribe {
      display: block;
      text-align: center;
      color: @black;
      font-size: 15px;
      font-weight: 500;
      line-height: 22px;
      margin: 0;

      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>

<template>
  <div id="subscription" class="main-subscription">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-10">
          <learn-icon />
          <h2>Get better at crypto</h2>
          <p class="main-subscription__description">
            Level up your skills with security tips, industry insights, news and
            more!
          </p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-10">
          <div
            class="main-subscription__input-wrap"
            :class="{ error: isError }"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value=""
              class="main-subscription__input"
            />
            <a
              href="javascript:void(0)"
              class="main-subscription__input-button"
              @click="submit()"
            >
              Sign me up!
            </a>
            <div v-if="isError" class="main-subscription__input-error">
              Error message
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import LearnIcon from "@/icons/common/learn-icon.vue";
import { useSubscriptionStore } from "@/store";

const store = useSubscriptionStore();

const isError = ref<boolean>(false);

const submit = () => {
  store.setShowSelectModal(true);
};
</script>

<style lang="less" scoped>
@import "@/assets/styles/theme.less";

.main-subscription {
  padding: 80px 0;
  background: conic-gradient(
    from 89.42deg at -5.54% 109.9%,
    #c549ff -110.3deg,
    #704bff 0.59deg,
    #c549ff 249.7deg,
    #704bff 360.59deg
  );

  .col-10 {
    .screen-xs({
        -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
    });
  }

  svg {
    display: block;
    margin: 0 auto;
  }

  h2 {
    .heading2();
    color: @white;
    text-align: center;
    margin: 16px 0 16px 0;
    -webkit-font-smoothing: antialiased;
  }

  &__description {
    .paragraph();
    letter-spacing: 0.02em;
    color: @white;
    margin: 0 0 24px 0;
    text-align: center;
    opacity: 0.7;
    -webkit-font-smoothing: antialiased;
  }

  &__input {
    border: 0 none;
    height: 30px;
    font-size: 20px;
    line-height: 30px;
    font-weight: 400;
    color: @black;
    outline: none;
    width: calc(~"100% - 174px");

    .screen-xs({
      width: calc(~"100% - 136px");
      font-size: 16px;
      line-height: 24px;
      height: 24px;
    });

    &-wrap {
      width: 100%;
      height: 62px;
      background-color: @white;
      border-radius: 44px;
      position: relative;
      padding: 16px 20px 16px 20px;
      box-sizing: border-box;
      position: relative;

      &.error {
        border: 2px solid @error;
        height: 66px;

        input {
          color: @error !important;
        }
      }

      .screen-xs({
        height: 57px;
        border-radius: 56px;
      });
    }

    &-button {
      background-color: @primary;
      width: 174px;
      height: 56px;
      display: block;
      text-decoration: none;
      position: absolute;
      right: 3px;
      top: 3px;
      border-radius: 47px;
      text-align: center;
      font-size: 20px;
      line-height: 56px;
      color: @black;
      font-weight: 700;
      color: @white;
      transition: opacity 300ms ease-in-out;
      opacity: 1;

      &:hover {
        opacity: 0.7;
      }

      .screen-xs({
        width: 136px;
        font-size: 16px;
        line-height: 51px;
        height: 51px;
      });
    }

    &-error {
      position: absolute;
      height: 28px;
      padding: 2px 12px 2px 12px;
      border-radius: 20px;
      background-color: @error;
      bottom: -32px;
      .caption();
      color: @white;
      text-align: center;
      line-height: 23px;
      left: 50%;
      transform: translateX(-50%);
      box-sizing: border-box;
    }
  }
}
</style>

<template>
  <div class="modal__container">
    <div class="modal__overlay" @click="close()" />
    <div class="modal__wrap">
      <a class="modal__close" @click="close()">
        <close-icon />
      </a>

      <div class="modal__image">
        <img src="../../assets/pic/raffle-img.png" alt="" />
      </div>
      <div class="modal__content">
        <h2>Win $250 in ETH every week</h2>
        <p>
          Mint tickets with <b>Enkrypt</b> every day, invite friends to earn
          more tickets.
        </p>
        <p>More tickets — more chances to win!</p>
        <a href="https://raffle.enkrypt.com/" target="_blank">Get a ticket</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LocalStorageKeys, RaffleInfoType } from "@/types/raffle-types";
import CloseIcon from "../../icons/common/close-icon.vue";

const emit = defineEmits<{
  (e: "close"): void;
}>();

const close = () => {
  const jRaffleInfo: RaffleInfoType = {
    timestamp: new Date().getTime(),
  };
  localStorage.setItem(
    LocalStorageKeys.RAFFLE_POPUP,
    JSON.stringify(jRaffleInfo)
  );
  emit("close");
};
</script>

<style lang="less">
@import "../../assets/styles/theme.less";
.modal {
  width: 100%;
  height: auto;
  box-sizing: border-box;

  &__wrap {
    background: @white;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.039),
      0px 7px 24px rgba(0, 0, 0, 0.19);
    border-radius: 12px;
    box-sizing: border-box;
    width: 460px;
    height: auto;
    z-index: 107;
    position: relative;
    overflow-x: hidden;
    font-size: 0;
    // max-height: calc(~"100% - 48px");
    margin: 24px 0 24px 0;

    .screen-xs({
      width: calc(~"100% - 48px");
    });
  }

  &__image {
    background: linear-gradient(270.41deg, #603cf0 26.38%, #c549ff 110.05%);
    padding: 40px 20px 0 20px;

    .screen-xs({
      padding: 40px 10px 0 10px;
    });

    img {
      max-width: 100%;
      margin-bottom: -33%;

      .screen-xs({
        margin-bottom: -34%;
      });
    }
  }

  &__content {
    padding: 42px 32px 32px 32px;

    .screen-xs({
      padding: 42px 26px 32px 26px;
    });

    h2 {
      background: linear-gradient(89.46deg, #603cf0 0.36%, #c549ff 70.48%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-style: normal;
      font-weight: 800;
      font-size: 48px;
      line-height: 58px;
      letter-spacing: 0.25px;
      margin: 0 0 20px 0;

      .screen-xs({
        font-weight: 700;
        font-size: 28px;
        line-height: 110%;
        margin: 0 0 16px 0;
      });
    }

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 19px;
      line-height: 140%;
      color: #000000;
      color: @primaryLabel;
      margin: 0 0 12px 0;

      .screen-xs({
        font-style: normal;
        font-weight: 450;
        font-size: 18px;
        line-height: 150%;
        letter-spacing: 0.02em;
        margin: 0;
      });

      &:last-child {
        margin: 0 0 20px 0;

        .screen-xs({
          margin: 0 0 16px 0;
        });
      }
    }

    a {
      display: block;
      width: 145px;
      height: 48px;
      background: @primary;
      border-radius: 24px;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 48px;
      text-align: center;
      color: #ffffff;
      text-decoration: none;
      transition: opacity 0.3s ease-in-out;
      margin: 20px 0 0 0;

      .screen-xs({
        margin: 16px 0 0 0;
      });

      &:hover {
        opacity: 0.7;
      }
    }
  }

  &__close {
    position: absolute;
    top: 20px;
    right: 20px;
    border-radius: 8px;
    cursor: pointer;
    transition: opacity 300ms ease-in-out;
    font-size: 0;

    &:hover {
      opacity: 0.7;
    }
  }

  &__container {
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    position: fixed;
    z-index: 105;
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    overflow-x: scroll;

    .screen-h({
      align-items: start;
    });
  }

  &__overlay {
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    min-height: 100%;
    left: 0px;
    top: 0px;
    position: fixed;
    z-index: 106;
  }

  &__block {
    padding: 12px 0;
    &:nth-child(2) {
      padding-top: 0;
    }
  }
  &__button-indent {
    margin-bottom: 8px;
  }
}
</style>

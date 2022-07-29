<template>
  <div class="main-start">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-10">
          <h1 class="main-start__title">A multichain crypto wallet</h1>
          <p class="main-start__description">
            Hold, buy, send, receive, and swap tokens. Manage your NFTs. Access
            web3 apps across multiple blockchains.
          </p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-8">
          <img
            class="main-start__pic"
            src="../../../assets/pic/pic1.png"
            alt=""
          />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12">
          <div class="main-start__download">
            <a href="#" class="main-start__download-button">Download now</a>
            <p>Available as an extension for your favorite browser.</p>

            <div class="main-start__download-icons">
              <a href="#"><chrome /></a>
              <a href="#"><firefox /></a>
              <a href="#"><brave /></a>
              <a href="#"><edge /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Chrome from "../../../icons/browser/chrome-icon.vue";
import Firefox from "../../../icons/browser/firefox-icon.vue";
import Brave from "../../../icons/browser/brave-icon.vue";
import Edge from "../../../icons/browser/edge-icon.vue";
</script>

<style lang="less" scoped>
@import "../../../assets/styles/theme.less";

.main-start {
  background-image: url("../../../assets/img/gradient.jpg");
  padding-top: 120px;
  padding-bottom: 72px;
  background-size: cover;
  .sizing();
  .screen-retina({
    background-image: url("../../../assets/img/gradient@2x.jpg");
  });

  &__title {
    .heading2();
    margin: 0 0 10px 0;
    text-align: center;
    color: @white;
  }

  &__description {
    .heading4();
    margin: 0 0 40px 0;
    text-align: center;
    color: @white;
  }

  &__pic {
    max-width: 100%;
    margin-bottom: 48px;
    filter: drop-shadow(0px 33px 13px rgba(0, 0, 0, 0.01))
      drop-shadow(0px 19px 11px rgba(0, 0, 0, 0.05))
      drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.09))
      drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.1))
      drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.1));
  }

  &__download {
    text-align: center;

    &-button {
      display: inline-block;
      width: 268px;
      height: 58px;
      background: conic-gradient(
        from 186.32deg at 112.5% -13.75%,
        #c549ff -284.63deg,
        #704bff 0deg,
        #c549ff 75.37deg,
        #704bff 360deg
      );
      box-shadow: 0px 25px 10px rgba(89, 0, 255, 0.01),
        0px 14px 8px rgba(89, 0, 255, 0.05), 0px 6px 6px rgba(89, 0, 255, 0.09),
        0px 2px 3px rgba(89, 0, 255, 0.1), 0px 0px 0px rgba(89, 0, 255, 0.1);
      border-radius: 32px;
      text-align: center;
      font-style: normal;
      font-weight: 600;
      font-size: 28px;
      line-height: 58px;
      letter-spacing: 0.02em;
      color: @white;
      text-decoration: none;
      transition: opacity 300ms ease-in-out;
      opacity: 1;
      margin: 0 0 16px 0;

      &:hover {
        opacity: 0.7;
      }
    }

    p {
      .caption();
      color: @black;
      text-align: center;
      margin: 0 0 16px 0;
      opacity: 0.5;
    }

    &-icons {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      a {
        margin: 0 8px;
        svg {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
}
</style>

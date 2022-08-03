<template>
  <div id="overview" class="main-start">
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
        <div
          ref="slider"
          class="col-8 main-start__slider"
          :style="{
            height: height + 'px',
          }"
        >
          <img
            class="main-start__pic"
            src="../../../assets/pic/pic1.jpeg"
            alt=""
          />
          <img
            class="main-start__pic"
            src="../../../assets/pic/pic2.jpeg"
            alt=""
          />
          <img
            class="main-start__pic"
            src="../../../assets/pic/pic3.jpeg"
            alt=""
          />
          <img
            class="main-start__pic"
            src="../../../assets/pic/pic4.jpeg"
            alt=""
          />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12">
          <div class="main-start__download">
            <a
              v-if="detect() == 'chrome'"
              class="main-start__download-button"
              href="https://chrome.google.com/webstore/detail/enkrypt/kkpllkodjeloidieedojogacfhpaihoh"
              target="_blank"
            >
              Download now
            </a>
            <a
              v-if="detect() == 'firefox'"
              class="main-start__download-button"
              href="firefox"
            >
              Download now
            </a>
            <a
              v-if="detect() == 'edge'"
              class="main-start__download-button"
              href="edge"
            >
              Download now
            </a>
            <a
              v-if="detect() == 'brave'"
              class="main-start__download-button"
              href="https://chrome.google.com/webstore/detail/enkrypt/kkpllkodjeloidieedojogacfhpaihoh"
              target="_blank"
            >
              Download now
            </a>

            <p>Available as an extension for your favorite browser.</p>

            <div class="main-start__download-icons">
              <a><chrome /></a>
              <a><firefox /></a>
              <a><brave /></a>
              <a><edge /></a>
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
import { onMounted, ref, watch, onUnmounted } from "vue";
import { detect } from "../../../utils/browser";

const slider = ref(null);
const height = ref<number>(528);

defineExpose({ slider });

onMounted(() => {
  window.addEventListener("resize", onResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", onResize);
});

watch([slider], () => {
  if (slider.value)
    height.value = Math.min(
      528,
      (slider.value as HTMLElement).clientWidth * 0.75
    );
});

const onResize = () => {
  if (slider.value)
    height.value = Math.min(
      528,
      (slider.value as HTMLElement).clientWidth * 0.75
    );
};
</script>

<style lang="less">
@import "../../../assets/styles/theme.less";

.main-start {
  background-image: url("../../../assets/img/gradient@2x.jpg");
  padding-top: 120px;
  padding-bottom: 72px;
  background-size: cover;
  background-position: top center;
  .sizing();
  .screen-lg({
    padding-bottom: 73px;
  });
  .screen-xs({
    padding-top: 68px;
    padding-bottom: 63px;
  });

  .col-10 {
    .screen-sm({
      -webkit-box-flex: 0;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
     });
  }

  .col-8 {
    .screen-md({
      -webkit-box-flex: 0;
      -ms-flex: 0 0 83.33333333%;
      flex: 0 0 83.33333333%;
      max-width: 83.33333333%;
     });

    .screen-xs({
      -webkit-box-flex: 0;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    });
  }

  &__title {
    .heading2();
    margin: 0 0 10px 0;
    text-align: center;
    color: @white;

    .screen-sm({
      margin: 0 0 16px 0;
    });
  }

  &__description {
    .heading4();
    margin: 0 0 40px 0;
    text-align: center;
    color: @white;
    opacity: 0.88;
  }

  &__slider {
    position: relative;
    margin-bottom: 52px;
    border-radius: 12px;
    box-shadow: 0px 33px 13px rgba(0, 0, 0, 0.01),
      0px 19px 11px rgba(0, 0, 0, 0.05), 0px 8px 8px rgba(0, 0, 0, 0.09),
      0px 2px 5px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);

    .screen-lg({
      margin-bottom: 49px;
    });

    .screen-xs({
      margin-bottom: 52px;
    });
  }

  &__pic {
    max-width: 100%;
    border-radius: 12px;
    position: absolute;
    animation: fade 16s infinite;
    opacity: 0;

    &:nth-child(2) {
      animation-delay: 4s;
    }
    &:nth-child(3) {
      animation-delay: 8s;
    }
    &:nth-child(4) {
      animation-delay: 12s;
    }
  }

  &__download {
    text-align: center;

    &-button {
      display: inline-block;
      width: 268px;
      height: 58px;
      background: linear-gradient(86.81deg, #c549ff -22.41%, #704bff 120.76%);
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

      .screen-lg({
        width: 240px;
        height: 53px;
        font-weight: 600;
        font-size: 24px;
        line-height: 53px;
        margin: 0 0 17px 0;
      });

      .screen-sm({
        width: 212px;
        height: 48px;
        font-size: 20px;
        line-height: 48px;
        margin: 0 0 19px 0;
      });

      .screen-xs({
        margin: 0 0 18px 0;
      });
    }

    p {
      .caption();
      color: @black;
      text-align: center;
      margin: 0 0 16px 0;
      opacity: 0.5;

      .screen-lg({
        margin: 0 0 17px 0;
      });
    }

    &-icons {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      a {
        margin: 0 8px;

        .screen-lg({
          margin: 0 4px;
        });

        svg {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
}

@keyframes fade {
  10% {
    opacity: 1;
  }
  30% {
    opacity: 1;
  }
  40% {
    opacity: 0;
  }
}
</style>

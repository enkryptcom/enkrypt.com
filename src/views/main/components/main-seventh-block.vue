<template>
  <div id="downloads" class="main-seventh">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-10">
          <h2>Install Enkrypt now</h2>
          <p class="main-seventh__description">
            Available as an extension for your favorite browser.
          </p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12">
          <div class="main-seventh__downloads">
            <a
              :href="EXTENSION_LINKS.chrome"
              target="_blank"
              class="main-seventh__downloads-item"
              @click="trackEvent(TRACKING_EVENTS.chrome)"
            >
              <chrome-icon />
              <div class="main-seventh__downloads-item-info">
                <p>Download for</p>
                <h5>Google Chrome</h5>
              </div>
            </a>
            <a
              :href="EXTENSION_LINKS.firefox"
              class="main-seventh__downloads-item"
              @click="trackEvent(TRACKING_EVENTS.firefox)"
            >
              <firefox-icon />
              <div class="main-seventh__downloads-item-info">
                <p>Download for</p>
                <h5>Firefox</h5>
              </div>
            </a>
            <a
              :href="EXTENSION_LINKS.brave"
              target="_blank"
              class="main-seventh__downloads-item"
              @click="trackEvent(TRACKING_EVENTS.brave)"
            >
              <brave-icon />
              <div class="main-seventh__downloads-item-info">
                <p>Download for</p>
                <h5>Brave</h5>
              </div>
            </a>
            <a
              :href="EXTENSION_LINKS.edge"
              class="main-seventh__downloads-item"
              @click="trackEvent(TRACKING_EVENTS.edge)"
            >
              <edge-icon />
              <div class="main-seventh__downloads-item-info">
                <p>Download for</p>
                <h5>Microsoft Edge</h5>
              </div>
            </a>
            <a
              :href="EXTENSION_LINKS.opera"
              class="main-seventh__downloads-item"
              @click="trackEvent(TRACKING_EVENTS.opera)"
            >
              <opera-icon />
              <div class="main-seventh__downloads-item-info">
                <p>Download for</p>
                <h5>Opera</h5>
              </div>
            </a>
            <a
              :href="EXTENSION_LINKS.safari"
              class="main-seventh__downloads-item"
              @click="trackEvent(TRACKING_EVENTS.opera)"
            >
              <safari-icon />
              <div class="main-seventh__downloads-item-info">
                <p>Download for</p>
                <h5>Safari</h5>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ChromeIcon from "../../../icons/browser/chrome-big.vue";
import FirefoxIcon from "../../../icons/browser/firefox-big.vue";
import BraveIcon from "../../../icons/browser/brave-big.vue";
import EdgeIcon from "../../../icons/browser/edge-big.vue";
import OperaIcon from "../../../icons/browser/opera-big.vue";
import SafariIcon from "../../../icons/browser/safari-big.vue";
import { EXTENSION_LINKS, TRACKING_EVENTS } from "@/configs";
import { trackEvent } from "@/utils/browser";
</script>

<style lang="less" scoped>
@import "../../../assets/styles/theme.less";

.main-seventh {
  padding: 128px 0;
  background: conic-gradient(
    from 89.42deg at -5.54% 109.9%,
    #c549ff -110.3deg,
    #704bff 0.59deg,
    #c549ff 249.7deg,
    #704bff 360.59deg
  );

  .screen-lg({
    padding: 80px 0 77px 0;
  });

  .screen-md({
    padding: 80px 0 76px 0;
  });

  .screen-sm({
    padding: 80px 0 56px 0;
  });

  .screen-xs({
    padding: 80px 0 71px 0;
  });

  .col-10 {
    .screen-xs({
      -webkit-box-flex: 0;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    });
  }

  h2 {
    .heading2();
    color: @white;
    text-align: center;
    margin: 0 0 16px 0;
    -webkit-font-smoothing: antialiased;
  }

  &__description {
    .paragraph();
    letter-spacing: 0.02em;
    color: @white;
    margin: 0 0 80px 0;
    text-align: center;
    opacity: 0.7;
    -webkit-font-smoothing: antialiased;

    .screen-xs({
      margin: 0 0 40px 0;
    });
  }

  &__downloads {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    .screen-lg({
      padding: 0 22% 0 22%;
      justify-content: space-evenly;
    });

    .screen-md({
      padding: 0 11% 0 11%;
    });

    .screen-sm({
      padding: 0;
      justify-content: space-evenly;
    });

    &-item {
      margin-top: 15px;
      padding: 12px 24px 12px 20px;
      height: 78px;
      background: rgba(255, 255, 255, 0.07);
      border: 1px solid @white;
      border-radius: 16px;
      box-sizing: border-box;
      text-decoration: none;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      margin-right: 24px;
      transition: background 300ms ease-in-out;

      &:hover {
        background: rgba(255, 255, 255, 0.3);
      }

      .screen-lg({
        margin-bottom: 24px;
      });

      .screen-sm({
        margin-bottom: 16px;
        margin-right: 16px;
      });

      .screen-xs({
        width: 100%;
        margin-right: 0;
        height: 74px;
      });

      &:last-child {
        margin-right: 0;
      }

      &:nth-child(2) {
        .screen-lg({
         margin-right: 0;
        });
      }

      &-info {
        p {
          .captionMd();
          letter-spacing: 0.02em;
          color: @white;
          opacity: 0.5;
          margin: 0;
          white-space: nowrap;
          -webkit-font-smoothing: antialiased;
        }

        h5 {
          .paragraphMd();
          letter-spacing: 0.02em;
          margin: 0;
          color: @white;
          white-space: nowrap;
          -webkit-font-smoothing: antialiased;
        }
      }

      svg {
        width: 48px;
        height: 48px;
        margin-right: 16px;
      }
    }
  }
}
</style>

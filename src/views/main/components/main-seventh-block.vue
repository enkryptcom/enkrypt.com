<template>
  <div class="main-seventh">
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
            <a href="#" class="main-seventh__downloads-item">
              <chrome-icon />
              <div class="main-seventh__downloads-item-info">
                <p>Download for</p>
                <h5>Google Chrome</h5>
              </div>
            </a>
            <a href="#" class="main-seventh__downloads-item">
              <firefox-icon />
              <div class="main-seventh__downloads-item-info">
                <p>Download for</p>
                <h5>Firefox</h5>
              </div>
            </a>
            <a href="#" class="main-seventh__downloads-item">
              <brave-icon />
              <div class="main-seventh__downloads-item-info">
                <p>Download for</p>
                <h5>Brave</h5>
              </div>
            </a>
            <a href="#" class="main-seventh__downloads-item">
              <edge-icon />
              <div class="main-seventh__downloads-item-info">
                <p>Download for</p>
                <h5>Microsoft Edge</h5>
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

  h2 {
    .heading2();
    color: @white;
    text-align: center;
    margin: 0 0 16px 0;
  }

  &__description {
    .paragraph();
    letter-spacing: 0.02em;
    color: @white;
    margin: 0 0 80px 0;
    text-align: center;
    opacity: 0.7;
  }

  &__downloads {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .screen-lg({
      padding: 0 0 0 23%;
      flex-wrap: wrap;
      justify-content: unset;
    });

    .screen-md({
      padding: 0 0 0 13%;
    });

    .screen-sm({
      padding: 0;
      justify-content: space-evenly;
    });

    &-item {
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

      .screen-lg({
        margin-bottom: 24px;
      });

      .screen-sm({
        margin-bottom: 16px;
        margin-right: 16px;
      });

      &:last-child {
        margin-right: 0;
      }

      &:nth-child(2) {
        .screen-sm({
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
        }

        h5 {
          .paragraphMd();
          letter-spacing: 0.02em;
          margin: 0;
          color: @white;
          white-space: nowrap;
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

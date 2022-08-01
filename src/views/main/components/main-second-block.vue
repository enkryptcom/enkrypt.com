<template>
  <div class="main-second">
    <div class="container">
      <div class="row justify-content-start">
        <div class="col-7">
          <h2>Easily access all your favorite apps on</h2>
          <polkadot-app />
          <p>
            Switch accounts and chains with a single click. Try something new
            without having to set up another wallet.
          </p>
        </div>
      </div>
    </div>
    <img class="main-second__pic" src="../../../assets/pic/pic7.png" alt="" />
    <img
      class="main-second__pic-mobile"
      src="../../../assets/pic/pic8.png"
      alt=""
    />
  </div>
</template>

<script setup lang="ts">
import PolkadotApp from "../../../icons/common/polkadot-app.vue";
</script>

<style lang="less" scoped>
@import "../../../assets/styles/theme.less";

.main-second {
  padding: 160px 0;
  background: conic-gradient(
    from 89.42deg at -5.54% 109.9%,
    #c549ff -110.3deg,
    #704bff 0.59deg,
    #c549ff 249.7deg,
    #704bff 360.59deg
  );
  position: relative;
  overflow: hidden;

  .screen-sm({
    padding: 80px 0 243px 0;
  });

  .screen-sm({
    padding: 80px 0 216px 0;
  });

  .col-7 {
    .screen-sm({
      -webkit-box-flex: 0;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
      position: relative;
      z-index: 1;
    });
  }

  h2 {
    .heading2();
    letter-spacing: -0.01em;
    margin: 0 0 14px 0;
    color: @white;

    .screen-lg({
      margin: 0 0 12px 0;
    });

    .screen-sm({
      margin: 0 0 7px 0;
    });
  }

  svg {
    max-width: 100%;
    display: block;
    margin: 0 0 17px 0;

    .screen-lg({
      max-width: 208px;
      margin: 0 0 12px 0;
    });

    .screen-md({
      margin: 0 0 21px 0;
    });

    .screen-sm({
      max-width: 176px;
      margin: 0 0 8px 0;
    });
  }

  p {
    .paragraph();
    letter-spacing: 0.02em;
    margin: 0;
    color: @white;
  }

  &__pic {
    width: 47.6%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 57.3%;
    max-width: 572px;

    .screen-lg({
      width: 54%;    
      left: 57.8%;
    });

    .screen-md({
      width: 70.4%;
      left: 57.4%;
    });

    .screen-sm({
      display: none;
    });

    &-mobile {
      display: none;
      width: 100%;
      position: absolute;

      .screen-sm({
        display: block;
        bottom: -13.2%;
      });

      .screen-sm({
        bottom: -18%;
        width: 160%;
      });
    }
  }
}
</style>

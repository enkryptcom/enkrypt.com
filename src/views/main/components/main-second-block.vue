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

  h2 {
    .heading2();
    letter-spacing: -0.01em;
    margin: 0 0 14px 0;
    color: @white;
  }

  svg {
    max-width: 100%;
    display: block;
    margin: 0 0 17px 0;
  }

  p {
    .paragraph();
    letter-spacing: 0.02em;
    margin: 0;
    color: @white;
  }
}
</style>

<template>
  <div class="main-fourth">
    <div class="container">
      <div class="row justify-content-start">
        <div class="col-8">
          <h2>All your <span>NFTs</span> in one place</h2>
          <p>Safely keep all your NFTs from various chains in one place.</p>
        </div>
      </div>
      <div class="row justify-content-end">
        <div class="col-5">
          <img
            class="main-fourth__pic"
            src="../../../assets/pic/pic2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
@import "../../../assets/styles/theme.less";

.main-fourth {
  padding-top: 80px;
  padding-bottom: 80px;

  h2 {
    .heading2();
    color: @primary;
    margin: 0 0 16px 0;

    span {
      color: @black;
    }
  }

  p {
    .paragraph();
    letter-spacing: 0.02em;
    color: @black;
    margin: 0 0 40px 0;
  }

  &__pic {
    max-width: 100%;
    filter: drop-shadow(0px 53px 21px rgba(0, 0, 0, 0.01))
      drop-shadow(0px 30px 18px rgba(0, 0, 0, 0.05))
      drop-shadow(0px 13px 13px rgba(0, 0, 0, 0.09))
      drop-shadow(0px 3px 7px rgba(0, 0, 0, 0.1))
      drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.1));
    margin-bottom: 62px;
  }
}
</style>

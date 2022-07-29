<template>
  <div class="main-sixth">
    <div class="container">
      <div class="row justify-content-start">
        <div class="col-8">
          <h2>Everything you need in one place.</h2>
          <p class="main-sixth__description">
            Enkrypt has everything you need to safely explore the decentralized
            world.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
@import "../../../assets/styles/theme.less";

.main-sixth {
  padding-top: 80px;
  padding-bottom: 80px;

  h2 {
    .heading2();
    color: @black;
    margin: 0 0 16px 0;
  }

  &__description {
    .paragraph();
    letter-spacing: 0.02em;
    color: @black;
    margin: 0 0 40px 0;
  }
}
</style>

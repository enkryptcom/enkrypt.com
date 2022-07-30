<template>
  <div class="main-eighth">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-8">
          <add-icon class="main-eighth__add" />
          <h2>Want to see your blockchain supported by Enkrypt?</h2>
          <p class="main-eighth__description">
            We work with blockchain projects to build user friendly tools for
            their ecosystems. Let’s talk about how we can help.<br />
            <a href="#">Get in touch</a> with our sales team.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AddIcon from "../../../icons/common/add-icon.vue";
</script>

<style lang="less" scoped>
@import "../../../assets/styles/theme.less";

.main-eighth {
  padding-top: 160px;
  padding-bottom: 132px;

  h2 {
    .heading3();
    color: @black;
    margin: 0 0 16px 0;
  }

  &__description {
    .paragraph();
    letter-spacing: 0.02em;
    color: @black;
    margin: 0;

    a {
      color: @primary;

      &:hover {
        text-decoration: none;
      }
    }
  }

  .col-8 {
    position: relative;
  }

  &__add {
    position: absolute;
    top: 0;
    left: -118px;
  }
}
</style>

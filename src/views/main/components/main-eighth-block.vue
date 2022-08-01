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

  .screen-lg({
    padding-bottom: 157px;
  });

  .screen-md({
    padding-bottom: 128px;
  });

  .screen-sm({
    padding-top: 240px;
    padding-bottom: 160px;
  });

  .col-8 {
    .screen-sm({
      -webkit-box-flex: 0;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    });
  }

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

    .screen-md({
      letter-spacing: 0.018em;
    });

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

    .screen-lg({
      left: -107px;
    });

    .screen-md({
      left: -87px;
    });

    .screen-sm({
      left: 0;
      top: -80px;
    });
  }
}
</style>

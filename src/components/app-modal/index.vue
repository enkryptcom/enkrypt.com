<template>
  <div class="app-modal__container">
    <div class="app-modal__overlay" @click="close()" />
    <div class="app-modal__wrap">
      <a class="app-modal__close" @click="close()">
        <close-button />
      </a>
      <div class="app-modal__content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CloseButton from "../../icons/common/close-button.vue";

const emit = defineEmits<{
  (e: "close"): void;
}>();

const close = () => {
  emit("close");
};
</script>

<style lang="less">
@import "../../assets/styles/theme.less";
.app-modal {
  width: 100%;
  height: auto;
  box-sizing: border-box;

  &__wrap {
    background: @white;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.039),
      0px 7px 24px rgba(0, 0, 0, 0.19);
    border-radius: 12px;
    box-sizing: border-box;
    width: 716px;
    height: auto;
    z-index: 107;
    position: relative;
    overflow-x: hidden;
    font-size: 0;

    .screen-lg({
      width: 608px;
    });

    .screen-sm({
      width: 540px;
    });

    .screen-xs({
        width: calc(~"100% - 16px");
    });
  }

  &__content {
    padding: 32px 60px 32px 60px;

    .screen-sm({
        padding: 32px 20px 32px 20px;
    });
  }

  &__close {
    position: absolute;
    top: 20px;
    right: 20px;
    border-radius: 8px;
    cursor: pointer;
    transition: opacity 300ms ease-in-out;
    font-size: 0;

    &:hover {
      opacity: 0.7;
    }
  }

  &__container {
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    position: fixed;
    z-index: 105;
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    overflow-x: scroll;

    .screen-h({
        align-items: start;
    });
  }

  &__overlay {
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    min-height: 100%;
    left: 0px;
    top: 0px;
    position: fixed;
    z-index: 106;
  }
}
</style>

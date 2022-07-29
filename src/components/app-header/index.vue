<template>
  <header class="header">
    <div class="container">
      <div class="row justify-content-end">
        <div class="col-12">
          <logo />
          <div class="header__menu">
            <a class="header__menu-item active" href="#">Overview</a>
            <a class="header__menu-item" href="#">Supported chains</a>
            <a class="header__menu-item" href="#">Security</a>
          </div>
          <a class="header__download">Download</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import Logo from "../../icons/common/logo-white.vue";
</script>

<style lang="less" scoped>
@import "../../assets/styles/theme.less";

.header {
  height: 104px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  .col-12 {
    height: 104px;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &__menu {
    a {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      letter-spacing: 0.02em;
      color: @white;
      text-decoration: none;
      display: inline-block;
      margin-right: 32px;
      position: relative;

      &:last-child {
        margin-right: 0;
      }

      &.active {
        &:before {
          .pseudo();
          width: 100%;
          height: 2px;
          background: @white;
          border-radius: 3px;
          left: 0;
          bottom: -4px;
        }
      }
    }
  }

  &__download {
    width: 116px;
    height: 35px;
    background: @white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 35px;
    letter-spacing: 0.02em;
    color: @dark;
    text-decoration: none;
    text-align: center;
    transition: opacity 300ms ease-in-out;
    opacity: 1;

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>

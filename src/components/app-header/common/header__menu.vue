<template>
  <div class="header__menu">
    <router-link
      class="header__menu-item"
      :class="{
        fixed: isFixed,
        active: isOverview && !isChains,
        internal: isInternal,
      }"
      to="/#overview"
    >
      Overview
    </router-link>
    <router-link
      class="header__menu-item"
      :class="{
        fixed: isFixed,
        active: isChains && !isSecure,
        internal: isInternal,
      }"
      to="/#chains"
    >
      Supported chains
    </router-link>
    <router-link
      class="header__menu-item"
      :class="{ fixed: isFixed, active: isSecure, internal: isInternal }"
      to="/#security"
    >
      Security
    </router-link>
    <a
      class="header__menu-item"
      :class="{ fixed: isFixed, internal: isInternal }"
      href="https://blog.enkrypt.com/"
    >
      Blog
    </a>
    <a
      class="header__menu-item"
      :class="{ fixed: isFixed, internal: isInternal }"
      href="https://myetherwallet.gitbook.io/enkrypt-documentation/"
    >
      Docs
    </a>
    <a
      class="header__menu-item"
      :class="{ fixed: isFixed, internal: isInternal }"
      href="https://raffle.enkrypt.com/"
    >
      Raffle
    </a>
  </div>
</template>

<script setup lang="ts">
defineProps({
  isFixed: {
    type: Boolean,
    default: false,
  },
  isOverview: {
    type: Boolean,
    default: false,
  },
  isChains: {
    type: Boolean,
    default: false,
  },
  isSecure: {
    type: Boolean,
    default: false,
  },
  isInternal: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="less" scoped>
@import "@/assets/styles/theme.less";
.header__menu {
  .screen-sm({
      display: none;
    });
}
.header__menu-item {
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
  transition: opacity 300ms ease-in-out;

  &:hover {
    opacity: 0.7;
  }

  .screen-md({
         margin-right: 20px;
      });

  &.fixed {
    color: @primary;
    transition: color 300ms ease-in-out;

    &:hover {
      color: @lighter;
    }
  }

  &:last-child {
    margin-right: 0;
  }

  &.internal {
    color: @primary;
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
      transition: opacity 300ms ease-in-out;
    }

    &.fixed {
      transition: background 300ms ease-in-out;

      &:before {
        background: @primary;
      }
    }

    &:hover {
      &:before {
        opacity: 0.7;
      }
    }

    &.fixed {
      &:hover {
        &:before {
          background: @lighter;
        }
      }
    }
  }
}
</style>

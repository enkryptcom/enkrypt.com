<template>
  <header class="header" :class="{ fixed: isFixed }">
    <div class="container">
      <div class="row justify-content-end">
        <div class="col-12" :class="{ fixed: isFixed }">
          <router-link to="/#overview">
            <logo-color
              v-if="store.isInternalPage.value || isFixed"
              class="header__logo"
            />
            <logo v-else class="header__logo" />
          </router-link>
          <header-menu
            :is-fixed="isFixed"
            :is-chains="isChains"
            :is-secure="isSecure"
            :is-overview="isOverview"
            :is-internal="store.isInternalPage.value"
          ></header-menu>

          <a
            class="header__download"
            :href="getDownloadLink()"
            :target="getDownloadLink().includes('http') ? '_blank' : '_top'"
            :class="{ fixed: isFixed, internal: store.isInternalPage.value }"
            @click="trackDownloadClick(detect())"
          >
            Download
          </a>
        </div>
      </div>
    </div>

    <mobile-menu />
  </header>
</template>

<script setup lang="ts">
import Logo from "@/icons/common/logo-white.vue";
import LogoColor from "@/icons/common/logo-color.vue";
import HeaderMenu from "@/components/app-header/common/header__menu.vue";
import { onMounted, ref, onUnmounted } from "vue";
import { detect, getDownloadLink } from "../../utils/browser";
import MobileMenu from "@/components/mobile-menu/index.vue";
import { useInternalPageStore } from "@/store";
import { trackDownloadClick } from "@/utils/metrics";

const isFixed = ref<boolean>(false);
const isOverview = ref<boolean>(false);
const isChains = ref<boolean>(false);
const isSecure = ref<boolean>(false);

const store = useInternalPageStore();

onMounted(() => {
  window.addEventListener("scroll", onScroll);
  window.addEventListener("resize", onResize);

  setTimeout(() => {
    onScroll();
  }, 700);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
  window.addEventListener("resize", onResize);
});

function isInViewport(id: string) {
  const el = document.querySelector(id);

  if (el) {
    const position = el.getBoundingClientRect();

    if (position.top >= 0 && position.bottom <= window.innerHeight) {
      return true;
    }

    if (position.top < window.innerHeight && position.bottom >= 0) {
      return true;
    }

    return false;
  } else {
    return false;
  }
}

const onScroll = () => {
  if (window.innerWidth > 767) {
    if (window.scrollY > 104) {
      if (isFixed.value == false) isFixed.value = true;
    } else {
      if (isFixed.value == true) isFixed.value = false;
    }
  } else {
    if (isFixed.value == true) isFixed.value = false;
  }

  isOverview.value = isInViewport("#overview");
  isChains.value = isInViewport("#chains");
  isSecure.value = isInViewport("#security");
};
const onResize = () => {
  if (window.innerWidth < 768) {
    if (isFixed.value == true) isFixed.value = false;
  } else {
    if (window.scrollY > 104) {
      if (isFixed.value == false) isFixed.value = true;
    } else {
      if (isFixed.value == true) isFixed.value = false;
    }
  }
};
</script>

<style lang="less" scoped>
@import "@/assets/styles/theme.less";

.header {
  height: 104px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  &.fixed {
    position: fixed;
    background: @white;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
    height: 71px;
    z-index: 11;
  }

  .screen-xs({
    height: 68px;
  });

  .col-12 {
    height: 104px;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &.fixed {
      height: 71px;
    }

    .screen-xs({
      height: 68px;
    });
  }

  &__logo {
    .screen-sm({
      width: 116px;
      height: 22px;
      // margin-left: -2px;
    });
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
    transition: color 300ms ease-in-out;
    opacity: 1;

    &.fixed {
      background: @primary;
      box-shadow: none;
      color: @white;
      transition: background 300ms ease-in-out;
    }

    .screen-sm({
      display: none;
    });

    &:hover {
      color: @primary;
    }

    &.fixed {
      &:hover {
        background: @lighter;
        color: @white;
      }
    }

    &.internal {
      background: @primary;
      color: @white;
    }
  }
}
</style>

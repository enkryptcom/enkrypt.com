<template>
  <div v-show="isOpen" class="mobile-menu">
    <div class="container">
      <div class="row justify-content-end">
        <div class="col-12">
          <logo-color class="mobile-menu__logo" />
          <div class="mobile-menu__menu">
            <a
              class="mobile-menu__menu-item"
              :class="{
                active: isOverview && !isChains,
              }"
              @click="goToAnchor('#overview')"
            >
              Overview
            </a>
            <a
              class="mobile-menu__menu-item"
              :class="{ active: isChains && !isSecure }"
              @click="goToAnchor('#chains')"
            >
              Supported chains
            </a>
            <a
              class="mobile-menu__menu-item"
              :class="{ active: isSecure }"
              @click="goToAnchor('#security')"
            >
              Security
            </a>
            <a class="mobile-menu__menu-item" href="https://blog.enkrypt.com/">
              Blog
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <a class="mobile-menu__link" :class="{ fixed: isOpen }" @click="toggleMenu">
    <mobile-menu-close v-if="isOpen" />
    <mobile-menu-open
      v-else
      :fill="store.isInternalPage.value ? '#684CFF' : 'white'"
    />
  </a>
</template>

<script setup lang="ts">
import MobileMenuOpen from "../../icons/common/mobile-menu-open.vue";
import MobileMenuClose from "../../icons/common/mobile-menu-close.vue";
import LogoColor from "../../icons/common/logo-color.vue";
import { useRouter } from "vue-router";
import { onMounted, ref, onUnmounted } from "vue";
import { useInternalPageStore } from "@/store";

const router = useRouter();
const isOpen = ref<boolean>(false);
const isOverview = ref<boolean>(false);
const isChains = ref<boolean>(false);
const isSecure = ref<boolean>(false);

const store = useInternalPageStore();

onMounted(() => {
  window.addEventListener("scroll", onScroll);
  window.addEventListener("resize", onResize);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
  window.addEventListener("resize", onResize);
});

const toggleMenu = () => {
  onScroll();
  isOpen.value = !isOpen.value;
};

const goToAnchor = (hash: string) => {
  toggleMenu();
  router.push({ path: "/", hash });
};

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
  isOverview.value = isInViewport("#overview");
  isChains.value = isInViewport("#chains");
  isSecure.value = isInViewport("#security");
};
const onResize = () => {
  if (window.innerWidth > 767) {
    if (isOpen.value) isOpen.value = false;
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/styles/theme.less";

.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: @white;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  z-index: 101;

  &__link {
    display: none;
    position: absolute;
    right: 24px;
    top: 40px;
    z-index: 102;
    cursor: pointer;
    font-size: 0;

    &.fixed {
      position: fixed;
    }

    .screen-sm({
      display: block;
    });

    .screen-xs({
      top: 22px;
    });
  }

  // It changes its position during toggling the menu
  &__logo {
    width: 116px;
    height: 22px;
    // margin-left: -2px;
    margin-top: 25px;
    margin-bottom: 35px;

    // .screen-sm({
    //   margin-top: 40px;
    // });
    // .screen-xs({
    //   margin-top: 22px;
    // });
  }

  &__menu {
    display: flex;
    flex-direction: column;
    align-items: center;

    &-item {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      letter-spacing: 0.02em;
      color: @white;
      text-decoration: none;
      display: inline-block;
      margin-bottom: 37px;
      position: relative;
      color: @primary;
      transition: color 300ms ease-in-out;
      cursor: pointer;

      &:hover {
        color: @lighter;
      }

      &.active {
        &:before {
          .pseudo();
          width: 100%;
          height: 2px;
          background: @primary;
          border-radius: 3px;
          left: 0;
          bottom: -4px;
          transition: background 300ms ease-in-out;
        }

        &:hover {
          &:before {
            background: @lighter;
          }
        }
      }
    }
  }
}
</style>

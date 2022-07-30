<template>
  <footer class="footer">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-8">
          <logo class="footer__logo" color="#1A1919" />

          <div class="footer__links">
            <a href="#">Contact us</a>
            <a href="#">MyEtherWallet.com</a>
            <a href="#">GitHub</a>
            <a href="#">Media Kit</a>
          </div>

          <div class="footer__social">
            <a href="#"><facebook /></a>
            <a href="#"><twitter /></a>
            <a href="#"><github /></a>
            <a href="#"><instagram /></a>
            <a href="#"><medium /></a>
            <a href="#"><reddit /></a>
            <a href="#"><discord /></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import Logo from "../../icons/common/logo-white.vue";
import Facebook from "../../icons/social/facebook.vue";
import Twitter from "../../icons/social/twitter.vue";
import Github from "../../icons/social/github.vue";
import Instagram from "../../icons/social/instagram.vue";
import Medium from "../../icons/social/medium.vue";
import Reddit from "../../icons/social/reddit.vue";
import Discord from "../../icons/social/discord.vue";
</script>

<style lang="less" scoped>
@import "../../assets/styles/theme.less";

.footer {
  padding: 0 0 124px 0;
  width: 100%;

  &__logo {
    width: 110px;
    height: 20px;
    margin-bottom: 30px;
  }

  &__links {
    margin-bottom: 32px;

    a {
      .caption();
      letter-spacing: 0.02em;
      color: @black;
      text-decoration: none;
      display: inline-block;
      margin-right: 32px;

      &:last-child {
        margin-right: 0;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &__social {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    a {
      text-decoration: none;
      display: block;
      margin-right: 24px;
      transition: opacity 300ms ease-in-out;
      opacity: 1;

      &:last-child {
        margin-right: 0;
      }

      &:hover {
        opacity: 0.7;
      }
    }
  }
}
</style>

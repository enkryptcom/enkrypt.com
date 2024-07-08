<template>
  <footer class="footer">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-8">
          <logo class="footer__logo" color="#1A1919" />

          <div class="footer__links">
            <a href="mailto:support@enkrypt.com" target="_blank">Contact us</a>
            <a href="https://www.myetherwallet.com/" target="_blank"
              >MyEtherWallet.com</a
            >
            <a href="https://github.com/enkryptcom/enKrypt" target="_blank"
              >GitHub</a
            >
            <a
              href="https://www.notion.so/Media-kit-ecce7262436c42fa8411e59d548b03fc"
              target="_blank"
            >
              Media Kit
            </a>
          </div>

          <div class="footer__social">
            <a href="https://www.facebook.com/MyEtherWallet/" target="_blank">
              <facebook />
            </a>
            <a href="https://twitter.com/enkrypt" target="_blank">
              <twitter />
            </a>
            <a href="https://github.com/enkryptcom/enKrypt" target="_blank">
              <github />
            </a>
            <a href="https://www.instagram.com/myetherwallet/" target="_blank">
              <instagram />
            </a>
            <a href="https://medium.com/@myetherwallet" target="_blank">
              <medium />
            </a>
            <a href="https://www.reddit.com/r/MyEtherWallet/" target="_blank">
              <reddit />
            </a>
            <a href="https://discord.gg/Gz8vBneyKe"><discord /></a>
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
  padding: 115px 0 150px 0;
  width: 100%;

  .screen-lg({
    padding: 115px 0 150px 0;
  });

  .screen-md({
    padding: 115px 0 150px 0;
  });

  .screen-sm({
    padding: 80px 0 80px 0;
  });

  .screen-xs({
    padding: 80px 0 80px 0;
  });

  .col-8 {
    .screen-sm({
      -webkit-box-flex: 0;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    });
  }

  &__logo {
    width: 116px;
    height: 22px;
    margin-bottom: 27px;
    margin-left: -2px;
  }

  &__links {
    margin-bottom: 32px;

    .screen-sm({
      margin-bottom: 24px;
    });

    a {
      .caption();
      letter-spacing: 0.02em;
      color: @black;
      text-decoration: none;
      display: inline-block;
      margin-right: 32px;
      transition: opacity 300ms ease-in-out;
      opacity: 1;

      &:last-child {
        margin-right: 0;
      }

      .screen-md({
        margin-right: 28px;
      });

      &:hover {
        opacity: 0.7;
      }

      .screen-sm({
        display: block;
        margin-bottom: 24px;
      });
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

<template>
  <div id="security" class="main-fifth">
    <div class="container">
      <div class="row justify-content-start">
        <div class="col-8">
          <h2>Seriously secure</h2>
          <p class="main-fifth__description">
            Built by MyEtherWallet, an experienced crypto-native team with the
            best security practices and most up-to-date tools.
          </p>
        </div>
      </div>
      <div class="row justify-content-start">
        <div class="col-5">
          <div class="main-fifth__item">
            <non-custodial />
            <h4>Non-custodial</h4>
            <p>
              You and only you are in control of your assets. Your keys, your
              crypto.
            </p>
          </div>
        </div>
        <div class="col-5">
          <div class="main-fifth__item">
            <privacy />
            <h4>Private</h4>
            <p>
              We don’t track any personally identifiable information, account
              addresses, or asset balances.
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-5">
          <div class="main-fifth__item">
            <hardware />
            <h4>Hardware wallet support</h4>
            <p>
              Connect your Ledger or Trezor to add an extra layer of security to
              your accounts.
            </p>
          </div>
        </div>
        <div class="col-5">
          <div class="main-fifth__item">
            <open-source />
            <h4>Open source</h4>
            <p>
              Our code is
              <a href="https://github.com/enkryptcom/enKrypt" target="_blank"
                >open</a
              >
              and can be independently verified by anyone.
            </p>
          </div>
        </div>
      </div>
    </div>

    <lock-image class="main-fifth__lock" />
  </div>
</template>

<script setup lang="ts">
import LockImage from "../../../icons/secure/lock-image.vue";
import NonCustodial from "../../../icons/secure/non-custodial.vue";
import Privacy from "../../../icons/secure/privacy.vue";
import Hardware from "../../../icons/secure/hardware.vue";
import OpenSource from "../../../icons/secure/open-source.vue";
</script>

<style lang="less" scoped>
@import "../../../assets/styles/theme.less";

.main-fifth {
  padding-top: 80px;
  padding-bottom: 36px;
  background: @secure;
  position: relative;

  .screen-sm({
    padding-bottom: 41px;
  });

  .screen-xs({
    padding-bottom: 63px;
  });

  .col-8 {
    .screen-sm({
      -webkit-box-flex: 0;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    });
  }

  .col-5 {
    position: relative;
    z-index: 2;
    .screen-sm({
      -webkit-box-flex: 0;
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
    });

    .screen-xs({
      -webkit-box-flex: 0;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    });

    &:nth-child(2),
    &:nth-child(4) {
      .screen-xs({
        left: 8%;
        position: relative
      });
    }
  }

  .justify-content-center {
    .screen-sm({
      left: 8.3%;
      position: relative
    });

    .screen-xs({
      left: 0;
    });
  }

  h2 {
    .heading2();
    color: @white;
    margin: 0 0 16px 0;
    -webkit-font-smoothing: antialiased;

    span {
      color: @black;
    }
  }

  &__description {
    .paragraph();
    letter-spacing: 0.02em;
    color: @white;
    margin: 0 0 80px 0;
    -webkit-font-smoothing: antialiased;

    .screen-xs({
      margin: 0 0 40px 0;
    });
  }

  &__lock {
    position: absolute;
    right: 0;
    top: 21.4%;
    width: 30%;

    .screen-lg({
      top: 14.7%;
      width: 45%;
    });

    .screen-md({
      top: 27.5%;
      width: 54%;
      right: -19%;
    });

    .screen-sm({
      top: 24%;
      width: 62%;
      right: -22%;
    });

    .screen-xs({
      top: 45%;
      width: 100%;
      right: -35%;
    });
  }

  &__item {
    margin-right: 40px;
    padding: 24px;
    border: 1px solid @white;
    border-radius: 32px 32px 8px 32px;
    margin-bottom: 40px;

    .screen-xs({
      margin-right: 25px;
      margin-bottom: 16px;
    });

    svg {
      width: 48px;
      display: block;
      margin-bottom: 8px;
    }

    h4 {
      .paragraphBold();
      letter-spacing: 0.02em;
      color: @white;
      margin: 0;
      -webkit-font-smoothing: antialiased;
    }

    p {
      .caption();
      letter-spacing: 0.02em;
      color: rgba(255, 255, 255, 0.7);
      margin: 0;
      -webkit-font-smoothing: antialiased;

      a {
        transition: color 300ms ease-in-out;
        color: rgba(255, 255, 255, 0.7);

        &:hover {
          color: @white;
        }
      }
    }
  }
}
</style>

<template>
  <div class="main-fifth">
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
            <p>Our code is open and can be independently verified by anyone.</p>
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

  h2 {
    .heading2();
    color: @white;
    margin: 0 0 16px 0;

    span {
      color: @black;
    }
  }

  &__description {
    .paragraph();
    letter-spacing: 0.02em;
    color: @white;
    margin: 0 0 80px 0;
  }

  &__lock {
    position: absolute;
    right: 0;
    top: 21.4%;
    width: 30%;
  }

  &__item {
    margin-right: 40px;
    padding: 24px;
    border: 1px solid @white;
    border-radius: 32px 32px 8px 32px;
    margin-bottom: 40px;

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
    }

    p {
      .caption();
      letter-spacing: 0.02em;
      color: @white;
      opacity: 0.7;
      margin: 0;
    }
  }
}
</style>

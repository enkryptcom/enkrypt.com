<template>
  <div class="main-sixth">
    <div class="container">
      <div class="row justify-content-start">
        <div class="col-8">
          <h2>Everything you need in one place.</h2>
          <p class="main-sixth__description">
            Enkrypt has everything you need to safely explore the decentralized
            world.
          </p>
        </div>
      </div>
      <div class="row justify-content-start">
        <div class="col-4">
          <div class="main-sixth__item">
            <receive />
            <p>Hold, send, and receive tokens and NFTs</p>
          </div>
        </div>
        <div class="col-4">
          <div class="main-sixth__item">
            <swap />
            <p>Swap tokens and bridge assets between chains</p>
          </div>
        </div>
        <div class="col-4">
          <div class="main-sixth__item">
            <buy />
            <p>Buy crypto with your bank card</p>
          </div>
        </div>
        <div class="col-4">
          <div class="main-sixth__item">
            <accounts />
            <p>Manage multiple accounts on multiple networks</p>
          </div>
        </div>
        <div class="col-4">
          <div class="main-sixth__item">
            <web3 />
            <p>Connect to web3 apps</p>
          </div>
        </div>
        <div class="col-4">
          <div class="main-sixth__item">
            <no-import />
            <p>No need to manually import tokens</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Receive from "../../../icons/feature/receive.vue";
import Swap from "../../../icons/feature/swap.vue";
import Buy from "../../../icons/feature/buy.vue";
import Accounts from "../../../icons/feature/accounts.vue";
import Web3 from "../../../icons/feature/web3.vue";
import NoImport from "../../../icons/feature/no-import.vue";
</script>

<style lang="less" scoped>
@import "../../../assets/styles/theme.less";

.main-sixth {
  padding-top: 80px;
  padding-bottom: 40px;

  .col-8 {
    .screen-sm({
      -webkit-box-flex: 0;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    });
  }

  .col-4 {
    .screen-sm({
      -webkit-box-flex: 0;
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
    });
  }

  h2 {
    .heading2();
    color: @black;
    margin: 0 0 16px 0;
  }

  &__description {
    .paragraph();
    letter-spacing: 0.02em;
    color: @black;
    margin: 0 0 40px 0;
  }

  &__item {
    margin: 0 0 40px 0;

    svg {
      width: 40px;
      display: block;
      margin: 0 0 8px 0;
    }

    p {
      .paragraph();
      color: @black;
      letter-spacing: 0.02em;
      margin: 0;

      .screen-lg({
        padding-right: 10px
      });

      .screen-md({
        padding-right: 28px
      });

      .screen-xs({
        padding-right: 13px
      });
    }
  }
}
</style>

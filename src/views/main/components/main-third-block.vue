<template>
  <div class="main-third">
    <div class="container">
      <div class="row justify-content-start">
        <div class="col-8">
          <h2>Multiple chains. <span>One wallet.</span></h2>
          <p class="main-third__description">
            Enkrypt supports all Ethereum-based EVM chains, Polkadot, and
            Substrate chains with more blockchains on the way.
          </p>
        </div>
      </div>
      <div class="row justify-content-start">
        <div class="col-11">
          <div class="main-third__networks">
            <div class="main-third__networks-item eth">
              <eth /><span>Ethereum</span>
            </div>
            <div class="main-third__networks-item polkadot">
              <polkadot /><span>Polkadot</span>
            </div>
            <div class="main-third__networks-item kusama">
              <kusama /><span>Kusama</span>
            </div>
            <div class="main-third__networks-item polygon">
              <Polygon /><span>Polygon</span>
            </div>
            <div class="main-third__networks-item acala">
              <acala /><span>Acala</span>
            </div>
            <div class="main-third__networks-devider"></div>
            <div class="main-third__networks-item moonbeam">
              <moonbeam /><span>Moonbeam</span>
            </div>
            <div class="main-third__networks-item bnb">
              <Bnb /><span>BNB smart chain</span>
            </div>
            <div class="main-third__networks-item karura">
              <karura /><span>Karura</span>
            </div>
            <div class="main-third__networks-item moonriver">
              <moonriver /><span>Moonriver</span>
            </div>
          </div>

          <p class="main-third__info">
            Are you a contributor to a specific chain that you would like
            Enkrypt to support? <a href="#">Get in touch!</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Eth from "../../../icons/networks/eth.vue";
import Polkadot from "../../../icons/networks/polkadot.vue";
import Kusama from "../../../icons/networks/kusama.vue";
import Polygon from "../../../icons/networks/polygon.vue";
import Acala from "../../../icons/networks/acala.vue";
import Moonbeam from "../../../icons/networks/moonbeam.vue";
import Bnb from "../../../icons/networks/bnb.vue";
import Karura from "../../../icons/networks/karura.vue";
import Moonriver from "../../../icons/networks/moonriver.vue";
</script>

<style lang="less" scoped>
@import "../../../assets/styles/theme.less";

.main-third {
  background-image: url("../../../assets/img/chains.jpg");
  padding-top: 80px;
  padding-bottom: 74px;
  background-size: cover;
  position: relative;
  .sizing();
  .screen-retina({
    background-image: url("../../../assets/img/chains@2x.jpg");
  });

  h2 {
    .heading2();
    color: @primary;
    margin: 0 0 16px 0;

    span {
      color: @black;
    }
  }

  &__description {
    .paragraph();
    letter-spacing: 0.02em;
    color: @black;
    margin: 0 0 80px 0;
  }

  &__networks {
    margin-bottom: 60px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    font-size: 0;

    &-item {
      padding: 8px 16px 8px 8px;
      height: 52px;
      border-radius: 30px;
      margin-right: 20px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .paragraphBold();
      letter-spacing: 0.02em;
      color: @white;
      text-decoration: none;
      margin-bottom: 20px;

      &:nth-child(5) {
        margin-right: 0;
      }

      &:nth-child(7) {
        margin-left: 88px;
      }

      svg {
        width: 36px;
        height: 36px;
        margin-right: 8px;
      }

      &.eth {
        background: @eth;
      }

      &.polkadot {
        background-color: @polkadot;
      }

      &.kusama {
        background-color: @kusama;
      }

      &.polygon {
        background-color: @polygon;
      }

      &.acala {
        background-color: @acala;
      }

      &.moonbeam {
        background-color: @moonbeam;
      }

      &.bnb {
        background-color: @bnb;
      }

      &.karura {
        background: @karura;
      }

      &.moonriver {
        background-color: @moonriver;
      }
    }

    &-devider {
      width: 100%;
      height: 0;
    }
  }

  &__info {
    .caption();
    letter-spacing: 0.02em;
    color: rgba(0, 0, 0, 0.36);
    margin: 0;

    a {
      color: @black;

      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>

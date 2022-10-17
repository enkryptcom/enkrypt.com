<template>
  <div class="main-third__networks">
    <div class="main-third__networks-item acala">
      <acala /><span>Acala</span>
    </div>
    <div class="main-third__networks-item moonbeam">
      <moonbeam /><span>Moonbeam</span>
    </div>
    <div class="main-third__networks-item bnb">
      <Bnb /><span>BNB Smart chain</span>
    </div>
    <div class="main-third__networks-item karura">
      <karura /><span>Karura</span>
    </div>
    <div class="main-third__networks-item moonriver">
      <moonriver /><span>Moonriver</span>
    </div>
    <div class="main-third__networks-item astar">
      <astar /><span>Astar</span>
    </div>
    <div class="main-third__networks-item shiden">
      <shiden /><span>Shiden</span>
    </div>
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
import Astar from "../../../icons/networks/astar.vue";
import Shiden from "../../../icons/networks/shiden.vue";
</script>

<style lang="less" scoped>
@import "../../../assets/styles/theme.less";

.main-third {
  &__networks {
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
      margin-right: 16px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .paragraphBold();
      letter-spacing: 0.02em;
      color: @white;
      text-decoration: none;

      .screen-lg({
          height: 48px;
          margin-right: 16px;
        });

      .screen-sm({
          height: 44px;
          margin-right: 16px;
        });

      svg {
        width: 36px;
        height: 36px;
        margin-right: 8px;

        .screen-lg({
              width: 32px;
              height: 32px;
            });

        .screen-sm({
              width: 28px;
              height: 28px;
            });
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

      &.astar {
        background: @astar;
      }

      &.shiden {
        background-color: @shiden;
      }
    }
  }
}
</style>

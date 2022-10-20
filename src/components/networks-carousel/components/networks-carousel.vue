<template>
  <div class="main-third__networks">
    <div
      v-for="(item, idx) in itemsArr"
      :key="idx"
      class="main-third__networks-item"
      :class="item.class"
    >
      <component :is="item.image" /><span>{{ item.name }}</span>
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
import Okx from "../../../icons/networks/okx.vue";

const cList = {
  eth: {
    name: "Ethereum",
    class: "eth",
    image: Eth,
  },
  polygon: {
    name: "Polygon",
    class: "polygon",
    image: Polygon,
  },
  acala: {
    name: "Acala",
    class: "acala",
    image: Acala,
  },
  moonriver: {
    name: "Moonriver",
    class: "moonriver",
    image: Moonriver,
  },
  astar: {
    name: "Astar",
    class: "astar",
    image: Astar,
  },
  polkadot: {
    name: "Polkadot",
    class: "polkadot",
    image: Polkadot,
  },
  shiden: {
    name: "Shiden",
    class: "shiden",
    image: Shiden,
  },
  okx: {
    name: "OKX Chain",
    class: "okx",
    image: Okx,
  },
  kusama: {
    name: "Kusama",
    class: "kusama",
    image: Kusama,
  },
  moonbeam: {
    name: "Moonbeam",
    class: "moonbeam",
    image: Moonbeam,
  },
  bnb: {
    name: "BNB Smart chain",
    class: "bnb",
    image: Bnb,
  },
  karura: {
    name: "Karura",
    class: "karura",
    image: Karura,
  },
};
const shuffleArray = (array: any[]): any[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
const itemsArr = shuffleArray(Object.values(cList));
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
      &.okx {
        background-color: @okx;
      }
    }
  }
}
</style>

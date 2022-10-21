<template>
  <div v-if="loaded" class="internal">
    <div v-if="content" class="container">
      <div class="row justify-content-center">
        <div class="col-12">
          <div class="content">
            <div class="content__header">
              <img
                class="content__header-icon"
                :src="content.icon"
                :alt="content.title"
              />
              <h1>{{ content.title }}</h1>
            </div>

            <template v-for="block in contentBlocksWithHash" :key="block.key">
              <template v-if="block">
                <h3>{{ block.title }}</h3>
                <p
                  v-for="par in block.paragraps"
                  :key="par.key"
                  v-html="par.item"
                ></p>
              </template>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
  <downloads></downloads>
  <div class="indent"></div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import * as objectHash from "object-hash";
import Downloads from "@/components/downloads/index.vue";
import { useRoute } from "vue-router";

const hash = objectHash;

// TODO: handle and discuss v-html, not safety, parse links?
const networks = [
  {
    path: "polygon",
    icon: "/src/assets/internal/polygon.network.svg",
    title: "Polygon wallet",
    blocks: [
      {
        title: "About Enkrypt",
        paragraps: [
          "Non-custodial web3 wallets are necessary for building the decentralized internet of the future where user data and privacy are better protected.",
        ],
      },
      {
        title: "What's Polygon?",
        paragraps: [
          "Polygon is a Layer 2 scaling solution that achieves scale by utilizing sidechains for off-chain computation while ensuring asset security using the Plasma framework and a decentralized network of Proof-of-Stake (PoS) validators.",
          "Polygon strives to solve the scalability and usability issues while not compromising on decentralization and leveraging the existing developer community and ecosystem. Polygon is an off/side chain scaling solution for existing platforms to provide scalability and superior user experience to DApps/user functionalities.",
          '<a href="https://polygon.technology/" target="_blank" rel="nofollow">https://polygon.technology/</a>',
        ],
      },
    ],
  },
  {
    path: "ethereum",
    icon: "/src/assets/internal/polygon.network.svg",
    title: "Ethereum wallet",
    blocks: [
      {
        title: "About Enkrypt",
        paragraps: [
          "Non-custodial web3 wallets are necessary for building the decentralized internet of the future where user data and privacy are better protected.",
        ],
      },
      {
        title: "What's Ethereum?",
        paragraps: [
          "Polygon is a Layer 2 scaling solution that achieves scale by utilizing sidechains for off-chain computation while ensuring asset security using the Plasma framework and a decentralized network of Proof-of-Stake (PoS) validators.",
          "Polygon strives to solve the scalability and usability issues while not compromising on decentralization and leveraging the existing developer community and ecosystem. Polygon is an off/side chain scaling solution for existing platforms to provide scalability and superior user experience to DApps/user functionalities.",
          '<a href="https://polygon.technology/" target="_blank" rel="nofollow">https://polygon.technology/</a>',
        ],
      },
    ],
  },
];
var loaded = false;
var content: {
  path: string;
  icon: string;
  title: string;
  blocks: { title: string; paragraps: string[] }[];
} | null = null;
const route = useRoute();

const path = route.params.networkName;
if (path) {
  console.log("path:  " + path);
  content = networks.filter((i) => i.path === path)[0];
  console.log("content: " + JSON.stringify(content));
  loaded = true;
}
const contentBlocksWithHash = computed(() => {
  if (content && content.blocks) {
    return content.blocks.map((i: { paragraps: any[] }) => ({
      ...i,
      paragraps: i.paragraps.map((p: any) => ({
        item: p,
        key: hash(p),
      })),
      key: hash(i),
    }));
  } else return null;
});
</script>

<style lang="less" scoped>
@import "@/assets/styles/theme.less";

.internal {
  font-family: "Albert Sans";
  font-style: normal;
  padding-top: 184px;
  padding-bottom: 56px;
  max-width: 700px;
  margin: 0 auto;

  .screen-lg({
    max-width: 610px;
    padding-bottom: 80px;
  });

  .screen-md({
    padding-bottom: 56px;
  });

  .screen-sm({
    padding-top: 144px;
    padding-bottom: 64px;
  });

  .screen-xs({
    padding-top: 108px;
  });

  img {
    flex: 0 0 auto;

    .screen-xs({
      margin-bottom: 16px;
    });
  }

  h1 {
    font-weight: 750;
    margin: 0;
    letter-spacing: -0.01em;
    font-size: 56px;
    line-height: 110%;

    .screen-lg({
      font-size: 48px;
    });

    .screen-sm({
      font-size: 40px;
    });
  }

  h3 {
    font-weight: 600;
    font-size: 36px;
    line-height: 110%;
    margin-bottom: 16px;
    margin-top: 48px;

    .screen-lg({
      font-size: 32px;
    });

    .screen-md({
      margin-top: 24px;
    });

    .screen-sm({
      font-size: 28px;
    });
  }

  p {
    font-weight: 400;
    font-size: 24px;
    line-height: 150%;
    letter-spacing: 0.02em;
    margin: 0 0 16px 0;

    .screen-lg({
      font-size: 20px;
    });

    .screen-sm({
      font-size: 18px;
    });
  }

  ::v-deep a {
    color: @primary;
  }
}
.content {
  display: flex;
  flex-direction: column;
}

.content__header {
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  .screen-xs({
      flex-direction: column;
      align-items: flex-start;
    });

  .screen-sm({
    
  });
}

.content__header-icon {
  margin-right: 32px;
  .screen-xs({
    margin-bottom: 24px;
  });
}
</style>

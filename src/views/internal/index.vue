<template>
  <div v-if="loaded" class="internal">
    <div v-if="content" class="container">
      <div class="row justify-content-center">
        <div class="col-12">
          <div class="content">
            <div class="content__header">
              <img
                class="content__header-icon"
                :src="icons[content.path as keyof typeof icons].pageIcon"
                :alt="content.title"
              />
              <h1>{{ content.title }}</h1>
            </div>

            <template
              v-for="(block, idxm) in contentBlocksWithHash"
              :key="idxm + 'cont'"
            >
              <template v-if="block">
                <h3>{{ block.title }}</h3>
                <!-- eslint-disable vue/no-v-html -->
                <p
                  v-for="(par, idxp) in block.paragraps"
                  :key="idxp + 'para'"
                  v-html="par.item"
                ></p>
                <!--eslint-enable-->
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
import { computed } from "vue";
import Downloads from "@/components/downloads/index.vue";
import { useRoute } from "vue-router";
import networkList from "@/networks/networks";
import icons from "@/networks/icons";

//console.log(JSON.stringify(icons));
var loaded = false;
var content: {
  path: string;
  title: string;
  blocks: { title: string; paragraps: string[] }[];
} | null = null;
const route = useRoute();
const networks = Object.values(networkList);
const path = route.params.networkName;
if (path) {
  content = networks.filter((i) => i.path === path)[0];
  loaded = true;
}
const contentBlocksWithHash = computed(() => {
  if (content && content.blocks) {
    return content.blocks.map((i: { title: string; paragraps: any[] }) => ({
      title: i.title,
      paragraps: i.paragraps.map((p: any) => ({
        item: p,
      })),
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

  :deep(a) {
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
  max-width: 80px;
  max-height: 80px;
  margin-right: 32px;
  .screen-xs({
    margin-bottom: 24px;
  });
}
</style>

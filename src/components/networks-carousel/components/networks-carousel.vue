<template>
  <div class="main-third__networks">
    <a
      v-for="(item, idx) in itemsArr"
      :key="idx"
      :href="`/networks/${item.path}-wallet/`"
    >
      <div
        class="main-third__networks-item"
        :style="`background: ${item.color};`"
      >
        <img :src="item.image" :alt="item.name + ' logo'" /><span>{{
          item.name
        }}</span>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import { CarouselListItem, NetworkName } from "@/types/networks";
import IconList from "@/networks/icons";
import NetworkList from "@/networks/networks";

const props = defineProps({
  line: {
    type: Number,
    default: 1,
  },
});
const maxLines = 3;
const cList: { [key in NetworkName]: CarouselListItem } = Object.keys(
  IconList
).reduce((prev, cur) => {
  prev[cur as NetworkName] = {
    name: NetworkList[cur as NetworkName].name,
    color: NetworkList[cur as NetworkName].color,
    image: IconList[cur as NetworkName].carouselIcon,
    path: NetworkList[cur as NetworkName].path,
  };
  return prev;
}, {} as { [key in NetworkName]: CarouselListItem });

const shuffleArray = (array: any[]): any[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
const items = Object.values(cList);
const startPos = (items.length / maxLines) * (props.line % maxLines);
const itemsArr = shuffleArray(
  items.slice(startPos, startPos + items.length / maxLines)
);
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
    a:link {
      text-decoration: none;
    }

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

      img {
        width: 36px;
        height: 36px;
        margin-right: 8px;
        border-radius: 50%;
        .screen-lg({
              width: 32px;
              height: 32px;
            });

        .screen-sm({
              width: 28px;
              height: 28px;
            });
      }
    }
  }
}
</style>

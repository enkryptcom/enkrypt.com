<template>
  <carousel :duration="duration" :direction="direction">
    <networks-carousel-first-line v-if="line == 1" />
    <networks-carousel-second-line v-if="line == 2" />
    <networks-carousel-third-line v-if="line == 3" />
    <networks-carousel-fourth-line v-if="line == 4" />
    <networks-carousel-fifth-line v-if="line == 5" />
  </carousel>
</template>

<script setup lang="ts">
import NetworksCarouselFirstLine from "./components/networks-carousel-first-line.vue";
import NetworksCarouselSecondLine from "./components/networks-carousel-second-line.vue";
import NetworksCarouselThirdLine from "./components/networks-carousel-third-line.vue";
import NetworksCarouselFourthLine from "./components/networks-carousel-fourth-line.vue";
import NetworksCarouselFifthLine from "./components/networks-carousel-fifth-line.vue";

import Carousel from "../carousel/index.vue";

defineProps({
  duration: {
    type: String,
    default: "12s",
  },
  direction: {
    type: String,
    default: "normal",
  },
  line: {
    type: Number,
    default: 1,
  },
});
</script>

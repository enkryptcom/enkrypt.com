<template>
  <carousel :duration="duration" :direction="direction">
    <networks-carousel v-if="line == 1" />
    <networks-carousel v-if="line == 2" />
    <networks-carousel v-if="line == 3" />
    <networks-carousel v-if="line == 4" />
    <networks-carousel v-if="line == 5" />
  </carousel>
</template>

<script setup lang="ts">
import NetworksCarousel from "./components/networks-carousel.vue";

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

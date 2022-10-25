<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 7C4 6.44772 4.44772 6 5 6H19.7143C19.8721 6 20 6.12792 20 6.28571C20 7.23249 19.2325 8 18.2857 8H5C4.44772 8 4 7.55228 4 7Z"
      :fill="fill"
    />
    <path
      d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
      :fill="fill"
    />
    <path
      d="M4 17C4 16.4477 4.44772 16 5 16H18.2857C19.2325 16 20 16.7675 20 17.7143C20 17.8721 19.8721 18 19.7143 18H5C4.44772 18 4 17.5523 4 17Z"
      :fill="fill"
    />
  </svg>
</template>

<script setup lang="ts">
defineProps({
  fill: {
    type: String,
    default: "white",
  },
});
</script>

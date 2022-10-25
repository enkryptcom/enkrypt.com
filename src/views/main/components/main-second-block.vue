<template>
  <div class="main-second">
    <div class="container">
      <div class="row justify-content-start">
        <div class="col-7">
          <h2>Easily access all your favorite apps on</h2>
          <div class="main-second__network">
            <span>{{ text }}</span>
          </div>
          <p>
            Switch accounts and chains with a single click. Try something new
            without having to set up another wallet.
          </p>
        </div>
      </div>
    </div>
    <img class="main-second__pic" src="../../../assets/pic/pic7.png" alt="" />
    <div class="container">
      <div class="row justify-content-start">
        <div class="col-7">
          <img
            class="main-second__pic-mobile"
            src="../../../assets/pic/pic7.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
const networks = [
  "Ethereum",
  "Polkadot",
  "Moonbeam",
  "Acala",
  "Kusama",
  "Moonriver",
  "Karura",
  "Polygon",
  "BNB Smart Chain",
  "Astar",
  "Shiden",
  "OKX Chain",
];
const text = ref<string>("");
const isDeleting = ref<boolean>(false);
const loopNum = ref<number>(0);
const period = ref<number>(2000);

const tick = () => {
  var i = loopNum.value % networks.length;
  var fullTxt = networks[i];

  if (isDeleting.value) {
    text.value = fullTxt.substring(0, text.value.length - 1);
  } else {
    text.value = fullTxt.substring(0, text.value.length + 1);
  }

  var delta = 100 - Math.random() * 100;

  if (isDeleting.value) {
    delta /= 3;
  }

  if (!isDeleting.value && text.value === fullTxt) {
    delta = period.value;
    isDeleting.value = true;
  } else if (isDeleting.value && text.value === "") {
    isDeleting.value = false;
    loopNum.value++;
    delta = 300;
  }

  setTimeout(() => {
    tick();
  }, delta);
};

onMounted(() => {
  tick();
});
</script>

<style lang="less" scoped>
@import "../../../assets/styles/theme.less";

.main-second {
  padding: 160px 0;
  background: conic-gradient(
    from 89.42deg at -5.54% 109.9%,
    #c549ff -110.3deg,
    #704bff 0.59deg,
    #c549ff 249.7deg,
    #704bff 360.59deg
  );
  position: relative;
  overflow: hidden;

  .screen-sm({
    padding: 80px 0 0 0;
  });

  .screen-xs({
    padding: 80px 0 0 0;
  });

  .col-7 {
    .screen-sm({
      -webkit-box-flex: 0;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
      position: relative;
      z-index: 1;
    });
  }

  h2 {
    .heading2();
    letter-spacing: -0.01em;
    margin: 0 0 14px 0;
    color: @white;
    -webkit-font-smoothing: antialiased;

    .screen-lg({
      margin: 0 0 12px 0;
    });

    .screen-sm({
      margin: 0 0 17px 0;
    });
  }

  &__network {
    display: table;
    margin: 0 0 17px 0;
    padding: 4px 8px;
    background: @white;
    border-radius: 0px 12px 0px 0px;
    .sizing();
    height: 70px;
    font-size: 0;

    span {
      .heading2();
      letter-spacing: -0.01em;
      background: linear-gradient(86.81deg, #c549ff -22.41%, #704bff 120.76%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      display: block;
      min-width: 1px;
      white-space: nowrap;

      .screen-m({
        font-style: normal;
        font-weight: 750;
        font-size: 39px;
        line-height: 44px;
      });
    }

    .screen-lg({
      margin: 0 0 12px 0;
      height: 64px;
    });

    .screen-md({
      margin: 0 0 21px 0;
    });

    .screen-sm({
      margin: 0 0 17px 0;
      height: 52px;
    });
  }

  p {
    .paragraph();
    letter-spacing: 0.02em;
    margin: 0;
    color: @white;
    -webkit-font-smoothing: antialiased;
  }

  &__pic {
    width: 64%;
    position: absolute;
    top: 58%;
    transform: translateY(-50%);
    left: 55%;
    max-width: 800px;

    .screen-lg({
      width: 73%;
      left: 54.8%;
    });

    .screen-md({
      width: 91.4%;
      left: 54%;
      top: 57%;
    });

    .screen-sm({
      display: none;
    });

    &-mobile {
      display: none;
      width: 100%;

      .screen-sm({
        display: block;
        width: 528px;
        margin-left: -20px;
        margin-top: 32px;
        margin-bottom: -132px;
      });

      .screen-xs({
        margin-bottom: -138px;
        width: 428px;
        margin-left: -16px;
        margin-top: 46px;
      });
    }
  }
}
</style>

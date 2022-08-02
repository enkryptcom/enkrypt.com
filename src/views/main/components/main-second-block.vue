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
            Switch accounts and chains with a single click. Try something new
            without having to set up another wallet.
          </p>
        </div>
      </div>
    </div>
    <img class="main-second__pic" src="../../../assets/pic/pic7.png" alt="" />
    <img
      class="main-second__pic-mobile"
      src="../../../assets/pic/pic7.png"
      alt=""
    />
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

  var delta = 200 - Math.random() * 100;

  if (isDeleting.value) {
    delta /= 2;
  }

  if (!isDeleting.value && text.value === fullTxt) {
    delta = period.value;
    isDeleting.value = true;
  } else if (isDeleting.value && text.value === "") {
    isDeleting.value = false;
    loopNum.value++;
    delta = 500;
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
    padding: 80px 0 243px 0;
  });

  .screen-sm({
    padding: 80px 0 216px 0;
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
      margin: 0 0 7px 0;
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
      min-width: 5px;
    }

    .screen-lg({
      margin: 0 0 12px 0;
      height: 64px;
    });

    .screen-md({
      margin: 0 0 21px 0;
    });

    .screen-sm({
      margin: 0 0 8px 0;
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
    width: 47.6%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 57.3%;
    max-width: 572px;
    filter: drop-shadow(0px 76px 30px rgba(0, 0, 0, 0.01))
      drop-shadow(0px 43px 26px rgba(0, 0, 0, 0.05))
      drop-shadow(0px 19px 19px rgba(0, 0, 0, 0.09))
      drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.1))
      drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.1));

    .screen-lg({
      width: 54%;    
      left: 57.8%;
    });

    .screen-md({
      width: 70.4%;
      left: 57.4%;
    });

    .screen-sm({
      display: none;
    });

    &-mobile {
      display: none;
      width: 100%;
      position: absolute;

      .screen-sm({
        display: block;
        bottom: -13.2%;
      });

      .screen-sm({
        bottom: -18%;
        width: 160%;
      });
    }
  }
}
</style>

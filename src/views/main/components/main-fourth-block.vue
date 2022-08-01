<template>
  <div class="main-fourth">
    <div class="container">
      <div class="row justify-content-start">
        <div class="col-8">
          <h2>All your <span>NFTs</span> in one place</h2>
          <p>Safely keep all your NFTs from various chains in one place.</p>
        </div>
      </div>
      <div class="row justify-content-end">
        <div class="col-5">
          <img
            class="main-fourth__pic"
            src="../../../assets/pic/pic2.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="main-fourth__nfts">
      <div class="main-fourth__nfts-item">
        <img src="../../../assets/pic/pic3.png" alt="" />
      </div>
      <div class="main-fourth__nfts-item">
        <img src="../../../assets/pic/pic4.png" alt="" />
      </div>
      <div class="main-fourth__nfts-item">
        <img src="../../../assets/pic/pic5.png" alt="" />
      </div>
      <div class="main-fourth__nfts-item">
        <img src="../../../assets/pic/pic6.png" alt="" />
      </div>
      <div class="main-fourth__nfts-item">
        <img src="../../../assets/pic/pic3.png" alt="" />
      </div>
      <div class="main-fourth__nfts-item">
        <img src="../../../assets/pic/pic4.png" alt="" />
      </div>
      <div class="main-fourth__nfts-item">
        <img src="../../../assets/pic/pic4.png" alt="" />
      </div>
      <div class="main-fourth__nfts-item">
        <img src="../../../assets/pic/pic3.png" alt="" />
      </div>
      <div class="main-fourth__nfts-item">
        <img src="../../../assets/pic/pic4.png" alt="" />
      </div>
      <div class="main-fourth__nfts-item">
        <img src="../../../assets/pic/pic4.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
@import "../../../assets/styles/theme.less";

.main-fourth {
  padding-top: 80px;
  padding-bottom: 80px;
  position: relative;

  .screen-lg({
    padding-bottom: 77px;
  });

  .col-8 {
    .screen-sm({
      -webkit-box-flex: 0;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    });
  }

  .col-5 {
    .screen-md({
      -webkit-box-flex: 0;
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
    });
    .screen-sm({
      -webkit-box-flex: 0;
      -ms-flex: 0 0 83.33333333%;
      flex: 0 0 83.33333333%;
      max-width: 83.33333333%;
     });
  }

  .justify-content-end {
    .screen-sm({
      -webkit-box-pack: start !important;
      -ms-flex-pack: start !important;
      justify-content: flex-start !important;
    });
  }

  h2 {
    .heading2();
    color: @primary;
    margin: 0 0 16px 0;

    span {
      color: @black;
    }
  }

  p {
    .paragraph();
    letter-spacing: 0.02em;
    color: @black;
    margin: 0 0 40px 0;
  }

  &__pic {
    max-width: 100%;
    filter: drop-shadow(0px 53px 21px rgba(0, 0, 0, 0.01))
      drop-shadow(0px 30px 18px rgba(0, 0, 0, 0.05))
      drop-shadow(0px 13px 13px rgba(0, 0, 0, 0.09))
      drop-shadow(0px 3px 7px rgba(0, 0, 0, 0.1))
      drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.1));
    margin-bottom: 62px;
    position: relative;
    z-index: 2;

    .screen-md({
      margin-top: 7px;
      margin-bottom: 119px;
    });

    .screen-sm({
      margin-top: 0;
      margin-bottom: 93px;
    });

    .screen-xs({
      margin-bottom: 157px;
    });
  }

  &__nfts {
    position: absolute;
    width: 100%;
    left: -10.3%;
    bottom: 77px;
    white-space: nowrap;
    text-align: center;

    .screen-lg({
      left: -12.6%;
    });

    .screen-md({
      left: -19%;
    });

    .screen-md({
      left: -21%;
    });

    .screen-xs({
      left: -45%;
    });

    &-item {
      margin: 0 10px;
      width: 228px;
      display: inline-block;
      vertical-align: middle;
      max-width: 228px;

      img {
        width: 100%;
        border-radius: 16px;
      }
    }
  }
}
</style>

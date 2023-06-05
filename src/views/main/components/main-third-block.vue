<template>
  <div id="chains" class="main-third">
    <div class="container">
      <div class="row justify-content-start">
        <div class="col-8">
          <h2>Multiple chains. <span>One wallet.</span></h2>
          <p class="main-third__description">
            Enkrypt supports all Ethereum-based EVM chains, Polkadot, and
            Substrate chains with more blockchains on the way.
          </p>
        </div>
      </div>
    </div>
    <div class="main-third__carousels">
      <networks-carousel duration="130s" direction="normal" :line="1" />
      <networks-carousel duration="140s" direction="reverse" :line="2" />
      <networks-carousel duration="150s" direction="normal" :line="3" />
      <networks-carousel duration="130s" direction="reverse" :line="4" />
      <networks-carousel duration="140s" direction="normal" :line="5" />
    </div>
    <div class="container">
      <div class="row justify-content-start">
        <div class="col-11">
          <p class="main-third__info">
            Are you a contributor to a specific chain that you would like
            Enkrypt to support?
            <a target="_blank" href="https://github.com/enkryptcom/enKrypt"
              >Submit a PR</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NetworksCarousel from "../../../components/networks-carousel/index.vue";
</script>

<style lang="less" scoped>
@import "../../../assets/styles/theme.less";

.main-third {
  background-image: url("../../../assets/img/chains@2x.jpg");
  padding-top: 80px;
  padding-bottom: 74px;
  background-size: cover;
  position: relative;
  .sizing();
  .screen-retina({
    background-image: url("../../../assets/img/chains@2x.jpg");
  });
  .screen-lg({
    padding-bottom: 79px;
  });
  .screen-md({
    padding-bottom: 55px;
  });
  .screen-sm({
    padding-bottom: 150px;
  });
  .screen-xs({
    padding-bottom: 81px;
  });

  .col-11 {
    .screen-md({
      -webkit-box-flex: 0;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    });
  }

  .col-8 {
    .screen-sm({
      -webkit-box-flex: 0;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
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

  &__description {
    .paragraph();
    letter-spacing: 0.02em;
    color: @black;
    margin: 0 0 80px 0;

    .screen-sm({
      margin: 0 0 40px 0;
    });

    .screen-xs({
      margin: 0 0 80px 0;
    });
  }

  &__carousels {
    height: 196px;
    position: relative;
    margin-bottom: 60px;
    width: 100%;

    .screen-lg({
      height: 188px;
    });

    .screen-xs({
      height: 322px;
    });

    .screen-lg({
      margin-bottom: 80px;
    });

    .screen-sm({
      margin-bottom: 40px;
    });

    .vifnslb-container {
      margin-bottom: 20px;

      .screen-lg({
        margin-bottom: 16px;
      });

      &:nth-child(3) {
        margin-bottom: 0;

        .screen-xs({
          margin-bottom: 16px;
        });
      }

      &:nth-child(4),
      &:nth-child(5) {
        display: none;

        .screen-xs({
          display: block;
        });
      }

      &:last-child {
        .screen-xs({
          margin-bottom: 16px;
        });
      }
    }
  }

  &__info {
    .caption();
    letter-spacing: 0.02em;
    color: rgba(0, 0, 0, 0.36);
    margin: 0;

    a {
      color: @black;
      transition: opacity 300ms ease-in-out;

      .screen-md({
        display: block;
      });

      .screen-sm({
        display: inline;
      });

      &:hover {
        opacity: 0.7;
      }
    }
  }
}
</style>

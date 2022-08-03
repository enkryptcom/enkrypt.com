<script>
import { h, defineComponent } from "vue";
export default defineComponent({
  props: {
    // eslint-disable-next-line vue/require-default-prop
    barStyle: Object,
    duration: {
      type: String,
      default: "12s",
    },
    direction: {
      type: String,
      default: "normal",
    },
    delay: {
      type: String,
      default: "0s",
    },
    paused: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    customStyle() {
      return {
        ...this.barStyle,
        "animation-duration": this.duration,
        "animation-direction": this.direction,
        "animation-delay": this.delay,
        "animation-play-state": this.paused ? "paused" : "running",
      };
    },
  },
  render() {
    const bar = h("div", { class: "vifnslb-bar" }, this.$slots.default());
    const slider = h(
      "div",
      { class: ["vifnslb-element"], style: this.customStyle },
      [bar, bar]
    );
    return h("div", { class: ["vifnslb-container"] }, [slider]);
  },
});
</script>

<style scoped>
@keyframes moveSlideshow {
  100% {
    transform: translateX(-50%);
  }
}
.vifnslb-container {
  width: 100%;
  overflow: hidden;
}
.vifnslb-element {
  transform: translate3d(0, 0, 0); /* Hey browser, please use my GPU */
  position: relative;
  overflow: hidden;
  animation-name: moveSlideshow;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  display: flex;
  width: max-content;
  min-width: 200%;
}
.vifnslb-bar {
  width: 50%;
}
</style>

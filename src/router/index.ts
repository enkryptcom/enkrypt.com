import { createRouter, createWebHashHistory } from "vue-router";
import Main from "../views/main/index.vue";
import Internal from "../views/internal/index.vue";

const routes = {
  intro: {
    path: "/",
    components: {
      view: Main,
    },
    name: "main",
  },
  internal: {
    path: "/networks/:networkName",
    components: {
      view: Internal,
    },
    name: "internal",
  },
};

export default createRouter({
  history: createWebHashHistory(),
  routes: Object.values(routes),
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
        top: 71,
      };
    }
  },
});

export { routes };

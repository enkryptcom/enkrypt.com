import { createRouter, createWebHashHistory } from "vue-router";
import Main from "../views/main/index.vue";

const routes = {
  intro: {
    path: "/",
    components: {
      view: Main,
    },
    name: "main",
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

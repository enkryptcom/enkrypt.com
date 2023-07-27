import { createRouter, createWebHistory } from "vue-router";

const routes = {
  intro: {
    path: "/",
    components: {
      view: () => import(`../views/main/index.vue`),
    },
    name: "main",
  },
  internal: {
    path: "/networks/:networkName-wallet",
    components: {
      view: () => import(`../views/internal/index.vue`),
    },
    name: "internal",
  },
  catchAll: { path: "/:catchAll(.*)", redirect: { name: "main" } },
};

export default createRouter({
  history: createWebHistory(),
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

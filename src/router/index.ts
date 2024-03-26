import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/main/index.vue";
import { trackPageVisit } from "@/utils/metrics";

const routes = {
  intro: {
    path: "/",
    components: {
      view: Main,
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

const router = createRouter({
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
router.beforeEach((to) => {
  trackPageVisit(to.path);
});
export default router;
export { routes };

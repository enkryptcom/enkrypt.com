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
});

export { routes };

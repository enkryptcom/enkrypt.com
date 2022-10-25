import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

declare global {
  interface Window {
    Intercom: any;
  }
}

window.Intercom = window.Intercom || {};

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);

app.mount("#app");

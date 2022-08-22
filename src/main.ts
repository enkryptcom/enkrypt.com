import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

declare global {
  interface Window {
    Intercom: any;
  }
}

window.Intercom = window.Intercom || {};

const app = createApp(App);

app.use(router);

app.mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/store";

declare global {
  interface Window {
    Intercom: any;
  }
}

window.Intercom = window.Intercom || {};

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");

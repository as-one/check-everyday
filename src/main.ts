import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VueGtag from "vue-gtag";

import "./assets/grid.min.css";
import "./assets/style.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(VueGtag, {
    config: { id: import.meta.env.VITE_GA_MEASUREMENT_ID }
}, router);

app.mount("#app");

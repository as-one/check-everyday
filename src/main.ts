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

createApp(App).use(VueGtag, {
    config: { id: "G-QNPED591KP" }
}, router);

app.mount("#app");

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "@fortawesome/fontawesome-free/css/all.css";

const app = createApp(App);

router.afterEach((to) => {
  document.title = "Insight Hire | " + (to.meta.title || "Home");
});

app.use(router).mount("#app");

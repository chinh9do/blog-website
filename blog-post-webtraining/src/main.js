import { createApp } from "vue";
import App from "./App.vue";
import Router from "./routes";
import Store from "./store";
import Toaster from "@meforma/vue-toaster";

const app = createApp(App);

app.use(Toaster, {
  position: "top",
});
app.use(Router);
app.use(Store);
app.mount("#app");

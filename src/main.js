import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import { router } from "./routes";

Vue.config.productionTip = false;

window.jQuery = require("jquery");
require("bootstrap");

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");

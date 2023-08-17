import Vue from "vue";
import App from "./App.vue";
import { router } from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

Vue.config.productionTip = false;

library.add(faTimes);

window.jQuery = require("jquery");
require("bootstrap");

Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");

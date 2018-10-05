import Vue from "vue";
import App from "./App.vue";

import i18n from "@/middlewares/i18n";
import kendo from "@/middlewares/kendo";

Vue.config.productionTip = false;

new Vue({
  i18n,
  render: h => h(App),
  components: {
    ...kendo
  }
}).$mount("#app");

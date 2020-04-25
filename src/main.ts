import "../node_modules/rpg-awesome/css/rpg-awesome.min.css";
import Vue from "vue";
import Buefy from "buefy";
import CompositionApi from "@vue/composition-api";
import App from "./App.vue";
import router from "./router";
import Default from "./layouts/Default.vue";

Vue.config.productionTip = false;

Vue.use(CompositionApi);
Vue.use(Buefy);
Vue.component("Layout", Default);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

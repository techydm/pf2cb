import "../node_modules/rpg-awesome/css/rpg-awesome.min.css";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import CompositionApi from "@vue/composition-api";
import Buefy from "buefy";
import Default from "./layouts/Default.vue";

Vue.use(CompositionApi);
Vue.use(Buefy);
Vue.component("Layout", Default);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

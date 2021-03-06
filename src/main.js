import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import i18n from "./i18n";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  created() {
    AOS.init();
  },
  render: (h) => h(App),
}).$mount("#app");

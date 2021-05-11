import Vue from 'vue'
import App from './App.vue'
import axios from './http'
import store from './store'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')



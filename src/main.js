import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'intersection-observer';

import VueObserveVisibility from 'vue-observe-visibility';
import vSelect from 'vue-select';

import '@fortawesome/fontawesome-free/css/all.css';
import 'typeface-inter';
import 'typeface-poppins';

Vue.component('v-select', vSelect);
Vue.use(VueObserveVisibility);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

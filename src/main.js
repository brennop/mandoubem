import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import vSelect from 'vue-select';

import '@fortawesome/fontawesome-free/css/all.css';
import 'typeface-inter';

Vue.component('v-select', vSelect);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

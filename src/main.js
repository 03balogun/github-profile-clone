import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex';
import store from './store';


Vue.config.productionTip = false;
Vue.use(Vuex);

const storeInstance = new Vuex.Store(store);

new Vue({
  router,
  store: storeInstance,
  render: h => h(App)
}).$mount('#app');

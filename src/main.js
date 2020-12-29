import Vue from 'vue';
import EvaIcons from 'vue-eva-icons';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(EvaIcons);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

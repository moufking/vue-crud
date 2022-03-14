import Vue from 'vue'
import App from './App.vue'
import router from 'router';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

Vue.config.productionTip = false

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

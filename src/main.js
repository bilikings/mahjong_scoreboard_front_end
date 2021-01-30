import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css';
import router from './router'
import store from './store'
import stomp from './stomp'

Vue.config.productionTip = false;
Vue.use(Vant)

new Vue({
  render: h => h(App),
  router,
  store,
  stomp
}).$mount('#app')

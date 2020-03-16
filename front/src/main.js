import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Axios from 'axios'
import store from './store/store'
require('./assets/style/style.css')

Vue.prototype.$axios = Axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

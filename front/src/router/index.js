import Vue from 'vue'
import Router from 'vue-router'

import Shopping from '../components/Shopping.vue'
import Cart from '../components/Cart.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Shopping', component: Shopping},
    {path: '/cart', name: 'Cart', component: Cart},
  ]
})
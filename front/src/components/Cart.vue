<template>
  <div class="cart">
      <router-link class="cart-linkback" to="/">Back to Shopping</router-link>
      <ul class="cart-items">
          <li class="cart-item" v-for="item in cartProducts" v-bind:key="item._id">
              <p class="cart-item-detail">{{item.title}}</p>
              <p class="cart-item-detail">{{moneyFormat(item.price, item.currency)}}</p>
              <p class="cart-item-detail">{{item.quantity}}</p>
          </li>
      </ul>
      <div>
          <label for="">Total: {{moneyFormat(cartTotalPrice)}}</label>
      </div>
  </div>
</template>

<script>

import {mapGetters} from 'vuex'
import currencyFormatter from 'currency-formatter';

export default {
  name: 'Cart',
  data: function() {
    return {
      items: []
    }
  },
  computed: {
    ...mapGetters('cart', ['cartProducts', 'cartTotalPrice'])   
  },
  methods: {
    moneyFormat: function (price, currency) {
      price = price / 100;
      return currencyFormatter.format(price, { code: currency })
    }
  },
}
</script>
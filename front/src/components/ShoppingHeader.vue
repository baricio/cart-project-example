<template>
    <div class="header">
        <div class="header-logocontent">
          <div class="header-logoimage"></div>
        </div>
        <div class="header-center">
          <p>Best Shopping for you</p>
        </div>
        <div class="header-cart" @click="goToCart()">
          <div class="header-cartimage"></div>
          <div class="header-cart-count">{{total}}</div>
        </div>
    </div>
</template>

<script>

import {mapState} from 'vuex'

export default {
  name: 'ShoppingHeader',
  computed: mapState({
    total: (state) => {
      return state.cart.items.reduce((total, product) => {
        return total + product.quantity;
      }, 0);
    }
  }),
  methods: {
    goToCart: function() {
       this.$router.push(
        {
          path: '/cart',
        }
     )
    }
  },
}
</script>
<template>
  <div class="shopping">
    <div class="products">
      <div class="products-item" v-for="product in productItems" v-bind:key="product._id">
        <h2 class="title">{{product.name}}</h2>
        <img class="thumbs" :src="product.image.thumb" alt="">
        <p>Price: {{moneyFormat(product.price.value, product.price.value.currency)}}</p>
        <p>Stock: {{product.stock}}</p>
        <div class="products-action">
          <label>Quantity: </label>
          <input type="number" v-model="product.quantity" value="1"  min="1" :max="product.stock">
          <button @click="addProductToCart(product)">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'
import currencyFormatter from 'currency-formatter';

export default {
  name: 'Shopping',
  data: function() {
    return {
      products: [],
      product: {
        _id: '',
        price: 0,
        quantity: 0
      }
    }
  },
  computed: mapState({
    productItems: state => state.products.all
  }),
  created() {
    this.$store.dispatch('products/getAllProducts')
  },
  methods: {
    ...mapActions(
      'cart', ['addProductToCart']
    ),
    getProducst: async function () {
      let resp = await this.$axios.get('http://localhost:3000/api/v2/products')
      this.products = resp.data;
      console.log(this.products);
    },
    moneyFormat: function (price, currency) {
      price = price / 100;
      return currencyFormatter.format(price, { code: currency })
    }
  }
}
</script>
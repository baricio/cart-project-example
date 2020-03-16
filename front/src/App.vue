<template>
  <div id="app">
    <ShoppingHeader></ShoppingHeader>
    <router-view></router-view>
  </div>
</template>

<script>

import ShoppingHeader from './components/ShoppingHeader';

export default {
  name: 'App',
  components: {
    ShoppingHeader
  },
}
</script>
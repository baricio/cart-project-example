<template>
    <div class="toast" v-show="showmessage">
        <div class="toast-message">{{msg}}</div>
    </div>
</template>

<script>
export default {
  name: 'ShoppingHeader',
  props: {
    msg: String,
    show: Boolean
  },
  data() {
      return {
          timeshow: null,
          showmessage : false
      }
  },
  watch: {
      show: function (val) {
          if (val) {
              clearTimeout(this.timeshow)
              this.showmessage = true;
              this.timeshow = setTimeout(() => this.showmessage = false, 1000)
          }
      }
  }
}
</script>
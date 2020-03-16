
const state = {
    items: [],
    checkoutStatus: null
  }
  
  // getters
  const getters = {
    cartProducts: (state, getters, rootState) => {
      return state.items.map(({ _id, quantity }) => {
        const product = rootState.products.all.find(product => product._id === _id)
        console.log('cart-product', product)
        return {
          title: product.name,
          price: product.price.value,
          quantity
        }
      })
    },
  
    cartTotalPrice: (state, getters) => {
      return getters.cartProducts.reduce((total, product) => {
        return total + product.price * product.quantity
      }, 0)
    },

    cartTotalItens: (state, getters) => {
        return getters.cartProducts.reduce((total, product) => {
          return total + product.quantity
        }, 0)
      },
  }
  
  // actions
  const actions = {
   
    addProductToCart ({ state, commit }, product) {
      if (product.stock > 0) {
        const cartItem = state.items.find(item => item._id === product._id)
        if (!cartItem) {
          commit('pushProductToCart', { _id: product._id })
        } else {
          commit('incrementItemQuantity', cartItem)
        }
        // remove 1 item from stock
        commit('products/decrementProductInventory', { _id: product.id }, { root: true })
      }
    }
  }
  
  // mutations
  const mutations = {
    pushProductToCart (state, { _id }) {
      state.items.push({
        _id,
        quantity: 1
      })
    },
  
    incrementItemQuantity (state, { _id }) {
      const cartItem = state.items.find(item => item._id === _id)
      cartItem.quantity++
    },
  
    setCartItems (state, { items }) {
      state.items = items
    },
  
    setCheckoutStatus (state, status) {
      state.checkoutStatus = status
    }
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }
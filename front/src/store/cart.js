
const state = {
    items: [],
    checkoutStatus: null
  }
  
  // getters
  const getters = {
    cartProducts: (state, getters, rootState) => {
      return state.items.map(({ _id, quantity }) => {
        const product = rootState.products.all.find(product => product._id === _id)
        return {
          product_id: _id,
          title: product.name,
          price: product.price.value,
          currency: product.price.currency,
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
          commit('pushProductToCart', { _id: product._id, quantity: product.quantity })
        } else {
          commit('incrementItemQuantity', cartItem, {_id: product._id, quantity: product.quantity })
        }
        // remove 1 item from stock
        commit('products/decrementProductInventory', { _id: product.id }, { root: true })
      }
    }
  }
  
  // mutations
  const mutations = {
    pushProductToCart (state, { _id, quantity }) {
      state.items.push({
        _id,
        quantity: parseInt(quantity)
      })
    },
  
    incrementItemQuantity (state, { _id, quantity }) {
      const cartItem = state.items.find(item => item._id === _id)
      cartItem.quantity += parseInt(quantity)
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
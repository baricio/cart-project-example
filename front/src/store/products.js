import axios from 'axios'

// initial state
const state = {
  all: []
}

// getters
const getters = {

}

// actions
const actions = {
  async getAllProducts ({ commit }) {
    let resp = await axios.get('http://localhost:3000/api/v2/products')
    commit('setProducts', resp)
  }
}

// mutations
const mutations = {
  setProducts (state, resp) {
    state.all = resp.data
  },
  decrementProductInventory (state, { id }) {
    const product = state.all.find(product => product.id === id)
    product.stock--
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
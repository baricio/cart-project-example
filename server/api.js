import axios from 'axios'

const version = '2'
const API = `/api/${version}`

export default {
  getPorducts: params => axios.get(`${API}/products`, { params })
}
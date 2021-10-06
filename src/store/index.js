import { createStore } from 'vuex'
import apiAdmin from "../apis/api-admin";

export default createStore({
  state: {
    users: {},
    products: {}, 
    categories: {},
  },
  mutations: {
  },
  actions: {
    loadUsers(){
      apiAdmin.getUsers()
      .then(data => {
        this.state.users = data.data
      })
    },
    loadProducts(){
      apiAdmin.getProducts()
      .then(data=> {
        this.state.products = data.data
      })
    },
    loadCategories(){
      apiAdmin.getCategories()
      .then(data =>  {
        this.state.categories = data.data
      })
    },
  },
  modules: {
  }
})

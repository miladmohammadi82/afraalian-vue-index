import { createStore } from 'vuex'
import apiAdmin from "../apis/api-admin";
import axios from "axios";

export default createStore({
  state: {
    users: {},
    products: {}, 
    categories: {},
    articles: {},
    orders: {},
    orderItems: {},
    currentUser: JSON.parse(localStorage.getItem('user')),
    token: localStorage.getItem('token'),
    isLogin: false,
  },
  mutations: {
    editIsLogin(){
      this.state.isLogin = true
    }
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
    loadArticles(){
      apiAdmin.getArticles()
      .then(data =>  {
        this.state.articles = data.data
      })
    },
    loadOrders(){
      apiAdmin.getOrder()
      .then(data =>  {
        this.state.orders = data.data
      })
    },
    loadOrderItems(){
      apiAdmin.getOrder()
      .then(data =>  {
        this.state.orderItems = data.data
      })
    },
    getUser(){
      axios.defaults.headers.common['Authorization'] = `Bearer ${this.state.token}`
      // apiAdmin.getUser()
      //   .then((response) => {
      //     this.state.currentUser = response.data[0];
      //   })
      //   .catch((errors) => {
      //     console.log(errors);
      //   })
    }
  },
  modules: {
  }
})

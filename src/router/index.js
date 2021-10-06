import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Users from '../views/user/users.vue'
import NewUser from '../views/user/nweUser.vue'
import EditUser from '../views/user/editUser.vue'

import Product from '../views/product/products.vue'
import NewProduct from '../views/product/newProduct.vue'
import EditProduct from '../views/product/editProduct.vue'

import Categories from '../views/category/categories.vue'

const routes = [
  { path: '/', name: 'Home', component: Home, },

  { path: '/users', name: 'Users', component: Users, },
  { path: '/users/newUser', name: 'newUser', component: NewUser },
  { path: '/users/editUser/:id', name: 'editUser', component: EditUser },
 
  { path: '/products', name: 'Products', component: Product, },
  { path: '/products/newProduct', name: 'newProduct', component: NewProduct, },
  { path: '/products/editProduct/:id', name: 'editProduct', component: EditProduct, },

  { path: '/categories', name: 'Categories', component: Categories },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

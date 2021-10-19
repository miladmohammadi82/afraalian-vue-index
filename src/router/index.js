import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Users from '../views/user/users.vue'
import NewUser from '../views/user/nweUser.vue'
import EditUser from '../views/user/editUser.vue'

import Product from '../views/product/products.vue'
import NewProduct from '../views/product/newProduct.vue'
import EditProduct from '../views/product/editProduct.vue'

import Categories from '../views/category/categories.vue'
import NewCategories from '../views/category/newCategory.vue'
import EditCategory from '../views/category/editCategory.vue'

import Articles from '../views/article/articles.vue'
import NewArticle from '../views/article/newArticle.vue'
import EditArticle from '../views/article/editArticle.vue'

import Orders from '../views/order/orders.vue'
import ShowOrders from '../views/order/showOrders.vue'

import ProductComponents from '../views/comments/product/productComments'
import ArticleComments from '../views/comments/article/articleComponents.vue'

import Address from '../views/address/address'

import Login from '../views/auth/login'



const routes = [
  { path: '/', name: 'Home', component: Home, },

  { path: '/users', name: 'Users', component: Users, },
  { path: '/users/newUser', name: 'newUser', component: NewUser },
  { path: '/users/editUser/:id', name: 'editUser', component: EditUser },
 
  { path: '/products', name: 'Products', component: Product, },
  { path: '/products/newProduct', name: 'newProduct', component: NewProduct, },
  { path: '/products/editProduct/:id', name: 'editProduct', component: EditProduct, },

  { path: '/categories', name: 'Categories', component: Categories },
  { path: '/categories/newCategories', name: 'newCategories', component: NewCategories },
  { path: '/categories/editCategory/:id', name: 'editCategory', component: EditCategory },

  { path: '/articles', name: 'Articles', component: Articles },
  { path: '/articles/newArticle', name: 'newArticle', component: NewArticle },
  { path: '/articles/editArticle/:id', name: 'editArticle', component: EditArticle },

  { path: '/orders', name: 'Orders', component: Orders },
  { path: '/orders/showOrders/:id', name: 'showOrders', component: ShowOrders },

  { path: '/productComments', name: 'productComments', component: ProductComponents },
  { path: '/articleComments', name: 'articleComments', component: ArticleComments },

  { path: '/address', name: 'Address', component: Address },

  { path: '/login', name: 'Login', component: Login },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

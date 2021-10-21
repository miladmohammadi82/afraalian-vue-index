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
  { path: '/', name: 'Home', component: Home, meta: { authOnly: true } },

  { path: '/users', name: 'Users', component: Users, meta: { authOnly: true } },
  { path: '/users/newUser', name: 'newUser', component: NewUser, meta: { authOnly: true } },
  { path: '/users/editUser/:id', name: 'editUser', component: EditUser, meta: { authOnly: true } },
 
  { path: '/products', name: 'Products', component: Product, meta: { authOnly: true } },
  { path: '/products/newProduct', name: 'newProduct', component: NewProduct, meta: { authOnly: true } },
  { path: '/products/editProduct/:id', name: 'editProduct', component: EditProduct, meta: { authOnly: true } },

  { path: '/categories', name: 'Categories', component: Categories, meta: { authOnly: true } },
  { path: '/categories/newCategories', name: 'newCategories', component: NewCategories, meta: { authOnly: true } },
  { path: '/categories/editCategory/:id', name: 'editCategory', component: EditCategory, meta: { authOnly: true } },

  { path: '/articles', name: 'Articles', component: Articles, meta: { authOnly: true } },
  { path: '/articles/newArticle', name: 'newArticle', component: NewArticle, meta: { authOnly: true } },
  { path: '/articles/editArticle/:id', name: 'editArticle', component: EditArticle, meta: { authOnly: true } },

  { path: '/orders', name: 'Orders', component: Orders, meta: { authOnly: true } },
  { path: '/orders/showOrders/:id', name: 'showOrders', component: ShowOrders, meta: { authOnly: true } },

  { path: '/productComments', name: 'productComments', component: ProductComponents, meta: { authOnly: true } },
  { path: '/articleComments', name: 'articleComments', component: ArticleComments, meta: { authOnly: true } },

  { path: '/address', name: 'Address', component: Address, meta: { authOnly: true } },

  { path: '/login', name: 'Login', component: Login, meta: { gustOnly: true }  },


]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


function isLoggedIn(){
  return localStorage.getItem("token")
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authOnly)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!isLoggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  }
  else if (to.matched.some(record => record.meta.gustOnly)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (isLoggedIn()) {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router

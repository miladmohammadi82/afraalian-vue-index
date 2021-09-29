import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Users from '../views/user/users.vue'
import NewUser from '../views/user/nweUser.vue'
import EditUser from '../views/user/editUser.vue'

const routes = [
  { path: '/', name: 'Home', component: Home, },
  { path: '/users', name: 'Users', component: Users, },
  { path: '/users/newUser', name: 'newUser', component: NewUser },
  { path: '/users/editUser/:id', name: 'editUser', component: EditUser },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

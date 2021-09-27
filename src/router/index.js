import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Users from '../views/user/users.vue'
import NewUsers from '../views/user/nweUser.vue'

const routes = [
  { path: '/', name: 'Home', component: Home, },
  { path: '/users', name: 'Users', component: Users, },

  { path: '/newUsers', name: 'Newusers', component: NewUsers, },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

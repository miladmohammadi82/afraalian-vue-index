import { createStore } from 'vuex'
import apiAdmin from "../apis/api-admin";
export default createStore({
  state: {
    users: {},
  },
  mutations: {
  },
  actions: {
    loadUsers(){
      apiAdmin.getUsers()
      .then(data => {
        this.state.users = data.data
      })
    }
  },
  modules: {
  }
})

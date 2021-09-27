import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import "./css/adminlte.css"
import "./css/bootstrap-rtl.min.css"
import "./css/custom-style.css"
import "./css/persian-datepicker.min.css"
import "./css/all.min.css"


createApp(App).use(store).use(router).mount('#app')

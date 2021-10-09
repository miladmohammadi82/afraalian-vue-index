import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueProgressBar from "@aacassandra/vue3-progressbar";

import "./css/adminlte.css"
import "./css/bootstrap-rtl.min.css"
import "./css/custom-style.css"
import "./css/persian-datepicker.min.css"
import "./css/all.min.css"

const options = {
    color: "#bffaf3",
    failedColor: "#874b4b",
    thickness: "5px",
    transition: {
      speed: "0.2s",
      opacity: "0.6s",
      termination: 300,
    },
    autoRevert: true,
    location: "left",
    inverse: false,
};


createApp(App).use(VueProgressBar, options).use(store).use(router).mount('#app')

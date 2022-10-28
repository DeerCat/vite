import {createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import request from './utils/request.js'
const app = createApp(App)

app.use(router)
app.config.globalProperties.$http = request
app.mount('#app')

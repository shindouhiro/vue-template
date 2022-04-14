import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
import 'uno.css'
const app = createApp(App)
const router = createRouter({
    routes,
    history: createWebHistory(),
})
app.use(router)
app.mount('#app')

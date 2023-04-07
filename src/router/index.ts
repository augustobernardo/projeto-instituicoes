import { createRouter, createWebHistory } from 'vue-router'
import About from '@views/About.vue'
import App from '@/App.vue'

const routes = [
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/',
        name: 'Home',
        component: App
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'

// const childrenRoutes = [
//     {
//         path: '/:instId',
//         name: 'Child1',
//         component: () => import('../views/About.vue')
//     },
// ]

const routes = [
    {
        path: '/about',
        name: 'About',
        component: About,
        // children: childrenRoutes
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
    }
]

const router = createRouter({
    history: createWebHistory(), //process.env.BASE_URL
    routes
})

export default router
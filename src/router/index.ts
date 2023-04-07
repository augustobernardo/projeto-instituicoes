import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'

// const childrenRoutes = [
//     {
//         path: 'child1',
//         name: 'Child1',
//         component: () => import('../views/Child1.vue')
//     },
//     {
//         path: 'child2',
//         name: 'Child2',
//         component: () => import('../views/Child2.vue')
//     }
// ]


const routes = [
    {
        path: '/about',
        name: 'About',
        component: About,
        // children: childrenRoutes
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    }
]

const router = createRouter({
    history: createWebHistory(), //process.env.BASE_URL
    routes
})

export default router
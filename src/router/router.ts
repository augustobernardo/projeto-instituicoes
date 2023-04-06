import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../Home.vue';
import AppVue from '../App.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/home',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: AppVue,
    },
];


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});


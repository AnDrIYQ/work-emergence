import { createRouter, createWebHistory } from 'vue-router';
import ViewPage from '@root/views/Login.vue';

const routes = [
    {
        path: '/login',
        name: 'login',
        component: ViewPage,
        meta: {
            title: 'Login',
            keepAlive: true,
            publicOnly: true,
            authRequired: false,
        },
    },
    {
        path: '/',
        name: 'home',
        component: ViewPage,
        meta: {
            title: 'Work Emergence',
            keepAlive: true,
            authRequired: true,
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

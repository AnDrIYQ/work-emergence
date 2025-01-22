import { createRouter, createWebHistory } from 'vue-router';
import Login from '@root/views/Login.vue';
import Register from '@root/views/Register.vue';
import NotFound from '@root/views/NotFound.vue';

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            title: 'Вхід',
            keepAlive: true,
        },
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            title: 'Реєстрація',
            keepAlive: true,
        },
    },
    {
        path: '/',
        name: 'home',
        component: Login,
        meta: {
            title: 'Work Emergence',
            keepAlive: true,
        },
    },
    {
        path: "/:pathMatch(.*)",
        component: NotFound
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

import { createRouter, createWebHistory } from 'vue-router';
import ViewPage from '@root/views/ViewPage';

const routes = [
    {
        path: '/login',
        name: 'login',
        component: ViewPage,
        meta: {
            keepAlive: true,
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

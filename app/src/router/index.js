import { createRouter, createWebHistory } from 'vue-router';
import { defineAsyncComponent } from "vue";

const routes = [
    {
        path: '/',
        name: 'View',
        component: defineAsyncComponent(() => import('@root/views/ViewPage')),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

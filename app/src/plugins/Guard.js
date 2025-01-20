export default class GuardPlugin {
    install(app, options = {}) {
        const router = options.router;

        if (!router) {
            throw new Error('Router instance is required for GuardPlugin.');
        }

        router.beforeEach((to, from, next) => {
            const authToken = localStorage.getItem('authToken');

            if (to.meta?.authRequired) {
                if (!authToken && to.path !== '/login') {
                    console.warn('Access denied. Redirecting to /login.');
                    return next('/login');
                }
            } else if (to.meta?.publicOnly) {
                if (authToken && to.path === '/login') {
                    return next('/');
                }
            }

            next();
        });
    }
}

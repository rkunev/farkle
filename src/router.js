import Vue from 'vue';
import VueRouter from 'vue-router';

import LoginContainer from 'src/containers/LoginContainer';
import DashboardContainer from 'src/containers/DashboardContainer';
import UsersContainer from 'src/containers/UsersContainer';
import NotFoundContainer from 'src/containers/NotFoundContainer';

import authService from 'src/services/authService';

Vue.use(VueRouter);

export const routes = [
    {
        path: '/auth',
        component: LoginContainer
    },
    {
        path: '/',
        component: DashboardContainer,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/users',
        component: UsersContainer,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '*',
        component: NotFoundContainer
    }
];

export const config = {
    mode: 'history',
    routes
};

export const router = new VueRouter(config);

router.beforeEach((to, from, next) => {
    let redirect = '';
    const is404 = to.matched.some(m => m.path === '*');
    const isAuthOnly = to.matched.some(m => m.meta.requiresAuth);

    if (to.path !== '/auth' && to.path !== '/' && !is404) {
        redirect = to.path;
    }

    authService.isAuthenticated()
        .then(isAuthenticated => {
            if (isAuthOnly && !isAuthenticated) {
                const authURL = (redirect.length)
                    ? encodeURI('/auth' + '?redirect=' + redirect)
                    : '/auth';

                next(authURL); // redirecting to /auth, because user isn't authenticated
            } else if (to.path === '/auth' && isAuthenticated) {
                next('/'); // redericting to dashboard, because we're already authenticated
            } else {
                next(); // proceed as usual, because no auth is required
            }
        });
})

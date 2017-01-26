import Vue from 'vue';
import VueRouter from 'vue-router';

import AppWrapper from 'containers/AppWrapper';

import Login from 'containers/Login';
import Dashboard from 'containers/Dashboard';
import Users from 'containers/Users';
import About from 'containers/About';
import GameRules from 'containers/GameRules';

import NotFound from 'containers/NotFound';

import * as authService from 'services/authService';

Vue.use(VueRouter);

export const routes = [
    { path: '/auth', component: Login, },
    {
        path: '',
        component: AppWrapper,
        meta: {
            requiresAuth: true
        },
        children: [
            { path: '', component: Dashboard },
            { path: '/users', component: Users },
            { path: '/about', component: About, meta: { requiresAuth: false } },
            { path: '/game-rules', component: GameRules, meta: { requiresAuth: false } },
        ]
    },
    { path: '*', component: NotFound }
];

export const config = {
    mode: 'history',
    routes
};

export const router = new VueRouter(config);

router.beforeEach((to, from, next) => {
    let redirect = '';
    const is404 = to.matched.some(m => m.path === '*');
    const isAuthOnly = (to.meta.requiresAuth !== false) && to.matched.some(m => m.meta.requiresAuth);

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
});

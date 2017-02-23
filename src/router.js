import Vue from 'vue';
import VueRouter from 'vue-router';

import AppWrapper from 'containers/AppWrapper';

import Login from 'containers/Login';
import Dashboard from 'containers/Dashboard';
import NewGame from 'containers/NewGame';
import GameRobot from 'containers/GameRobot';
import GameHotseat from 'containers/GameHotseat';
import User from 'containers/User';
import About from 'containers/About';
import GameRules from 'containers/GameRules';

import NotFound from 'containers/NotFound';

import { isAuthenticated } from 'services/authService';

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
            {
                path: '',
                component: Dashboard,
                meta: {
                    title: 'Dashboard',
                },
            },
            {
                path: '/users/:userId',
                component: User,
                meta: {
                    title: 'Profile',
                },
                alias: '/users/:userId/profile',
            },
            {
                path: '/play/new',
                component: NewGame,
                meta: {
                    title: 'New Game',
                },
            },
            {
                path: '/play/robot',
                component: GameRobot,
                meta: {
                    title: 'Game Room',
                },
            },
            {
                path: '/play/hotseat',
                component: GameHotseat,
                meta: {
                    title: 'Game Room',
                },
            },
            {
                path: '/play/*',
                redirect: '/play/new'
            },
            {
                path: '/about',
                component: About,
                meta: {
                    title: 'About',
                    requiresAuth: false
                },
            },
            {
                path: '/game-rules',
                component: GameRules,
                meta: {
                    title: 'Game Rules',
                    requiresAuth: false
                },
            },
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

    isAuthenticated()
        .then((isUserAuth) => {
            if (isAuthOnly && !isUserAuth) {
                const authURL = (redirect.length)
                    ? encodeURI('/auth' + '?redirect=' + redirect)
                    : '/auth';

                next(authURL); // redirecting to /auth, because user isn't authenticated
            } else if (to.path === '/auth' && isUserAuth) {
                next('/'); // redericting to dashboard, because we're already authenticated
            } else {
                next(); // proceed as usual, because no auth is required
            }
        });
});

import Vue from 'vue';
import Router from 'vue-router';
import Main from './views/Main.vue';
import Host from '@/views/Host.vue';
import Join from '@/views/Join.vue';
import Home from './views/Home.vue';
import Room from '@/views/Room.vue';
import Auth from './views/Auth.vue';
import Profile from './components/Profile.vue';
import Player from './components/Player.vue';
import RequiresAuth from './views/RequiresAuth.vue';
import NotFound from '@/views/NotFound.vue';

import store from '@/store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/host',
      name: 'host',
      component: Host,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/join',
      name: 'join',
      component: Join,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/room/:room_id',
      name: 'room',
      component: Room, // TODO change me to all player view
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: 'player/:player',
          component: Player,
        },
      ],
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth,
      beforeEnter: (to, from, next) => {
        if (store.state.logged_in) {
          next({
            path: '/',
          });
        }
        next();
      },
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/life-total',
      name: 'life-total',
      component: Player,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/requires-auth',
      name: 'requires-auth',
      component: RequiresAuth,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '*',
      name: 'catch-all-not-found',
      component: NotFound,
      meta: {
        requiresAuth: false,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.state.logged_in) {
      next({
        path: '/auth',
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;

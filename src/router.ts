import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Auth from './views/Auth.vue';
import Profile from './components/Profile.vue';
import Player from './components/Player.vue';
import NotFound from '@/views/NotFound.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth,
    },
    {
      path: '/life-total',
      name: 'life-total',
      component: Player,
    },
    {
      path: '*',
      name: 'catch-all-not-found',
      component: NotFound,
    },
  ],
});

import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginView from '@/views/LoginView.vue';
import { userGuard } from '@/guards/userGuard';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/messages',
    name: 'messages',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "messages" */ '@/views/MessagesView.vue'),
    beforeEnter: userGuard,
  },
  {
    path: '*',
    component: LoginView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

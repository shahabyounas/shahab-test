/**
 * Reference
 * https://router.vuejs.org/guide/
 */

import { createRouter, createWebHashHistory } from 'vue-router';

import Landing from '../views/Landing.vue';

const routes = [{ path: '/', component: Landing }];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';

createApp(App).use(router).mount('#app');

/**
 * Import Font Awsome
 */

import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

/**
 * Import Bootstrap CSS and bundle
 */
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

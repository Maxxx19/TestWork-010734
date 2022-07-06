/*require('./bootstrap');
import { createApp } from 'vue';
window.Vue = vue;

import App from './components/App.vue';
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import VueAxios from 'vue-axios';
import axios from 'axios';
import {routes} from './routes';
 
//Vue.use(VueRouter);
//Vue.use(VueAxios, axios);
 
const router = new createRouter({
    history: createWebHashHistory(),
    routes: routes
});
 
const app = createApp({
    el: '#app',
    router: router,
    render: h => h(App),
});*/
require('./bootstrap');

import { createApp } from 'vue';

import App from "./components/App.vue"; 
//import router from './routes.js'; 
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {routes} from './routes';

const app = createApp(App)

const router = new createRouter({
    history: createWebHashHistory(),
    routes: routes
});
app.use(VueAxios, axios)
app.use(router);

app.mount('#app');
import './assets/main.css'

import { createApp } from 'vue'
// import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'

import HomePage from './pages/HomePage.vue';
import VaccinationPage from './pages/VaccinationPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/vaccination',
            name: 'vaccination',
            component: VaccinationPage,
        },
        
    ]
})

const app = createApp(App);
app.use(router);
app.mount('#app')

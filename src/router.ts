import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
// import About from './views/About.vue';
import Video from './views/Video.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/login', component: Login },
        { path: '/about', component: () => import('./views/About.vue') },
        { path: '/video/:id', component: Video },
    ]
})
export default router;
import { createRouter, createWebHistory } from 'vue-router';
// import Home from './views/HomePage.vue';
// import Login from './views/LoginPage.vue';
// // import About from './views/About.vue';
// import Video from './views/VideoPage.vue';
// const router = createRouter({
//     history: createWebHistory(),
//     routes: [
//         { path: '/', component: Home },
//         { path: '/login', component: Login },
//         { path: '/about', component: () => import('./views/AboutPage.vue') },
//         { path: '/video/:id', component: Video },
//     ]
// })
 
const routes:any =[];
const modules = import.meta.glob('./views/*.vue');
for (const path in modules) {
    const name = path.split('/').pop()?.replace(/\.\w+$/, '').toLowerCase();
    routes.push({
        path: `/${name}`,
        component: modules[path]
    })
}
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;
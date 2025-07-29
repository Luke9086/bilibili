import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import './main.css';
createApp(App).mount('#app');
console.log(import.meta.env.VITE_NAME);
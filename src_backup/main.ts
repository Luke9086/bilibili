import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
// import antd from 'ant-design-vue';
import './main.css';
// import 'ant-design-vue/dist/reset.css';
import router from './router';
const app = createApp(App);
app.use(router);
app.use(createPinia());
// app.use(antd);
app.mount('#app');
// console.log(import.meta.env.VITE_NAME);
// function add(a:number,b:number):number{
//   return a+b;
// }
// console.log(add(32,2));
// interface AddFn {
//     (a:number,b:number):number;
// }
// const add1:AddFn = (a,b)=>{
//     return a+b;
// }
// type AddFn2 = (a:number,b:number)=>number;
// const add2:AddFn2 = (a,b)=>{
//     return a+b;
// }
// console.log(add1(32,2));
// console.log(add2(32,2));

// function noop<T>(arg:T):T{
//     return arg;
// }
// console.log(noop(32));
// console.log(noop('32'));

// function getProperty<T,K extends keyof T>(obj:T,key:K):T[K]{
//     return obj[key];
// }
// const x = {a:1,b:2,c:3,d:4};
// console.log(getProperty(x,'a'));
// console.log(getProperty(x,'b'));

// const ele:HTMLElement = document.body;
// ele.addEventListener('click',(e:MouseEvent)=>{
//     console.log(e.target);
// });

// function create<T>(c:new ()=>T):T{
//     return new c();
// }
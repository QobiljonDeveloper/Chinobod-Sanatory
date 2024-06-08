import { createRouter, createWebHistory } from 'vue-router';
import Batafsil from './components/Batafsil/Batafsil.vue';
import  Home from "./App.vue"

const routes = [
  {
    path: '/batafsil',
    name: 'Batafil',
    component: Batafsil
  },
  {
    path:'/',
    name:Home, 
    component: Home
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

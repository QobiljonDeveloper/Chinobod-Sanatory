import { createRouter, createWebHistory } from 'vue-router';
import Batafsil from './components/Batafsil/Batafsil.vue';

const routes = [
  {
    path: '/batafsil',
    name: 'Batafil',
    component: Batafsil
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

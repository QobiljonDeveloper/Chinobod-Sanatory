
import { createRouter, createWebHistory } from 'vue-router';
import Home from './App.vue';  
import Batafsil from './components/Batafsil/Batafsil.vue';
import Navigation from './components/Navigation/Navigation.vue';
import Error from "./components/Error/Error.vue";
import Room from "./components/Room/Room.vue"
import Value from "./components/Room-Value/Room_Value.vue"
import Standard from "./components/Standard/Standard.vue"
import Komfort from "./components/Komfort/Komfort.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/batafsil',
    name: 'Batafsil',
    component: Batafsil
  },
  {
    path: '/navigation',
    name: 'Navigation',
    component: Navigation
  },
  {
    path: '/Error',
    name: 'Error',
    component: Error
  },
  {
    path: '/Room',
    name: 'Room',
    component: Room
  },
  {
    path: '/Value',
    name: 'Value',
    component: Value
  },
  {
    path: '/Standard',
    name: 'Standard',
    component:Standard
  },
  {
    path: '/Komfort',
    name: 'Komfort',
    component:Komfort
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

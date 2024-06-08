<template>
  <div class="items-center flex-col contents container mx-auto">
    <nav>
      <Header />
      <Navbar />
      <ShowCase />
    </nav>
    <section>
      <AboutWe />
      <Rooms />
      <Map />
      <Form />
      <Comments />
      <Batafsil />
    </section>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script setup>
import Header from './components/Header/Header.vue';
import Navbar from "./components/Navbar/Navbar.vue";
import ShowCase from "./components/ShowCase/ShowCase.vue";
import AboutWe from "./components/Page/AboutWe.vue"
import Map from './components/Map/Map.vue';
import Form from './components/Form/Form.vue'
import Comments from './components/Comments/Comments.vue'
import Footer from './components/Footer/Footer.vue'
import Rooms from './components/PageSec/Rooms.vue'
import Batafsil from './components/Batafsil/Batafsil.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: AboutWe
    },
    {
        path: '/Form',
        name: 'Form',
        component: Form
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
</script>

<style scoped>
/* Your scoped styles */
</style>

<template>
  <div class="items-center flex-col contents container mx-auto">
    <Header id="header" />
    <div v-if="isBatafsilRoute">
      <router-view></router-view>
    </div>
    <div v-else>

      <ShowCase id="showcase" />
      <AboutWe id="about-us" />
      <Rooms id="rooms" />
      <Map id="map" />
      <Form id="form" />
      <Comments id="comments" />
      <Footer id="footer" />
    </div>
  </div>
</template>


<script setup>
import { computed } from "vue";

import Header from './components/Header/Header.vue';
import Navbar from "./components/Navbar/Navbar.vue";
import ShowCase from "./components/ShowCase/ShowCase.vue";
import AboutWe from "./components/Page/AboutWe.vue"
import Map from './components/Map/Map.vue';
import Form from './components/Form/Form.vue'
import Comments from './components/Comments/Comments.vue'
import Footer from './components/Footer/Footer.vue'
import Rooms from './components/PageSec/Rooms.vue'
import { useRoute } from 'vue-router';

const route = useRoute();

const isBatafsilRoute = computed(() => route.path === '/batafsil');
</script>

<style scoped>
/* Your scoped styles */
</style>

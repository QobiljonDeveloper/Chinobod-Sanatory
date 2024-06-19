<template>
  <div class="items-center flex-col contents container mx-auto">
    <div v-if="isSpecialRoute">
      <router-view></router-view>
    </div>
    <div v-else>
      <Header id="header" />
      <Navbar />
      <ShowCase id="showcase" />
      <AboutWe id="about-us" />
      <Rooms id="rooms" />
      <Map id="map" />
      <Form id="form" />
      <Comments id="comments" />
      <Footer id="footer" />
      <Error />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from 'vue-router';

import Header from './components/Header/Header.vue';
import Navbar from "./components/Navbar/Navbar.vue";
import ShowCase from "./components/ShowCase/ShowCase.vue";
import AboutWe from "./components/Page/AboutWe.vue";
import Map from './components/Map/Map.vue';
import Form from './components/Form/Form.vue';
import Comments from './components/Comments/Comments.vue';
import Footer from './components/Footer/Footer.vue';
import Rooms from './components/PageSec/Rooms.vue';
import Error from './components/Error/Error.vue';

const route = useRoute();
const specialRoutes = ['/batafsil', '/Navigation', '/Room', '/Value', '/Standard' , '/Komfort'];
const isSpecialRoute = computed(() => specialRoutes.includes(route.path));
</script>

<style scoped>
/* Your scoped styles */
</style>

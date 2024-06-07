<template>
  <div class=" items-center flex-col contents container mx-auto">
    <Header />
    <Navbar />
    <ShowCase />
    <AboutWe/>
  </div>
</template>

<script setup>
import Header from './components/Header/Header.vue';
import Navbar from "./components/Navbar/Navbar.vue";
import ShowCase from "./components/ShowCase/ShowCase.vue";
import AboutWe from "./components/Page/AboutWe.vue"
</script>

<style scoped>
/* Your styles here */
</style>

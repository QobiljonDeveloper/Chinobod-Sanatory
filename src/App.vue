<template>
  <div class=" items-center flex-col contents container mx-auto">
    <Header />
    <Navbar />
    <ShowCase />
    <Page/>
  </div>
</template>

<script setup>
import Header from './components/Header/Header.vue';
import Navbar from "./components/Navbar/Navbar.vue";
import ShowCase from "./components/ShowCase/ShowCase.vue";
import Page from "./components/Page/Page.vue";
import Texts from './components/Texts/Texts.vue';
</script>

<style scoped>
/* Your styles here */
</style>

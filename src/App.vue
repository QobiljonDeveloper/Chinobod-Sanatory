<template>
  <div class="items-center flex-col contents container mx-auto">
    <Header />
    <Navbar />
    <ShowCase />
    <Page />
    <Map />
    <Form />
    <Comments />
    <Footer/>
  </div>
</template>

<script setup>
import Header from './components/Header/Header.vue'
import Navbar from './components/Navbar/Navbar.vue'
import ShowCase from './components/ShowCase/ShowCase.vue'
import Page from './components/Page/Page.vue'
import Texts from './components/Texts/Texts.vue'
import Map from './components/Map/Map.vue'
import Form from './components/Form/Form.vue'
import Comments from './components/Comments/Comments.vue'
import Footer from './components/Footer/Footer.vue'
</script>
<style scoped>
/* Your styles here */
</style>

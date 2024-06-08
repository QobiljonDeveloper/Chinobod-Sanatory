<template>
    <div class="swiper-container">
      <swiper :slides-per-view="1" :space-between="10" navigation pagination>
        <swiper-slide v-for="(image, index) in images" :key="index">
          <img :src="image.src" :alt="image.alt" class="w-full h-auto" />
        </swiper-slide>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </swiper>
      <h1>Hello world </h1>
    </div>
  </template>
  
  <script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper-bundle.css';
  
  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        images: [
          { src: ('@/assets/Hotel-room/Hotel-room-1.svg'), alt: 'Image 1' },
          { src: ('@/assets/Hotel-room/Hotel-room-1.svg'), alt: 'Image 2' },
        ]
      };
    }
  };
  </script>
  
  <style>
  .swiper-button-next,
  .swiper-button-prev {
    color: #3D5F01;
  }
  
  .w-full {
    width: 100%;
  }
  
  .h-auto {
    height: auto;
  }
  </style>
  
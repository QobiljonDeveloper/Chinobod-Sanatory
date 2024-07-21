<template>
  <footer class="bg-green-700 text-white py-8">
    <div class="container mx-auto px-4">
      <!-- Contact and Icon Section -->
      <div class="flex flex-col md:flex-row md:justify-between items-center mb-8">
        <!-- Contact Information -->
        <div class="text-center md:text-left mb-4 md:mb-0">
          <p class="text-lg font-semibold mb-2">Murojaat uchun:</p>
          <p class="text-base">+998717112345</p>
          <p class="text-base">+998717112345</p>
        </div>
        <!-- Icon Section -->
        <div class="flex justify-center md:justify-start mb-4 md:mb-0">
          <i class="fas fa-caduceus fa-3x"></i>
        </div>
      </div>

      <!-- Team Members Section -->
      <div class="flex flex-col md:flex-row md:justify-between gap-6 mb-8">
        <!-- Team Member 1 -->
        <div class="flex items-center gap-4 mb-4 md:mb-0">
          <img src="../../assets/img/person.jpg" alt="Sayt G'oyasi" class="w-16 h-16 rounded-full object-cover">
          <p class="text-center md:text-left text-base">Sayt G'oyasi : Surayyo Usmanxodjayeva</p>
        </div>
        <!-- Team Member 2 -->
        <div class="flex items-center gap-4">
          <img src="../../assets/img/per.jpg" alt="Loyiha menejeri" class="w-16 h-16 rounded-full object-cover">
          <p class="text-center md:text-left text-base">Loyiha menejeri : Azizbek Nasullayev</p>
        </div>
      </div>

      <!-- Address and Social Media Links -->
      <div class="text-center md:text-right">
        <p class="mb-2 text-base">Toshkent sh, Yunusobod tumani, Chinobod ko'chasi, 7-uy</p>
        <a href="http://www.chinnobod.uz" class="text-white block mb-2 text-base">www.chinnobod.uz</a>
        <div class="flex justify-center md:justify-end space-x-4">
          <a href="https://t.me/chinabad_uz" target="_blank" class="text-white">
            <i class="fab fa-telegram fa-lg"></i>
          </a>
          <a href="https://facebook.com/chinabad_uz" target="_blank" class="text-white">
            <i class="fab fa-facebook fa-lg"></i>
          </a>
          <a href="https://instagram.com/chinabad_uz" target="_blank" class="text-white">
            <i class="fab fa-instagram fa-lg"></i>
          </a>
          <a href="https://twitter.com/chinabad_uz" target="_blank" class="text-white">
            <i class="fab fa-twitter fa-lg"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
footer {
  background-color: #3d5f00;
}
</style>

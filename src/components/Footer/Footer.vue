<template>
  <footer class="bg-green-700 text-white py-8">
    <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <div class="text-center md:text-left mb-4 md:mb-0">
        <p class="text-lg font-semibold mb-2">Murojaat uchun:</p>
        <p>+998717112345</p>
        <p>+998717112345</p>
      </div>
      <div class="flex justify-center md:justify-start mb-4 md:mb-0">
        <i class="fas fa-caduceus fa-3x"></i>
      </div>
      <div class="text-center md:text-right mb-4 md:mb-0">
        <p>Toshkent sh, Yunusobod tumani, Chinobod ko'chasi, 7-uy</p>
      </div>
    </div>
    <div class="container mx-auto text-center md:text-right">
      <a href="http://www.chinnobod.uz" class="text-white">www.chinnobod.uz</a>
      <div class="flex justify-center md:justify-end space-x-4 mt-2">
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
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
footer {
  background-color: #4b5320; /* Match the green color from the image */
}
</style>

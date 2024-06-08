<template>
  <div class="container p-6 bg-white rounded-lg shadow-md !mt-10 !mb-10">
    <h2 class="text-5xl font-bold text-gray-800 mb-4">IZOHLAR</h2>
    <div class="rating flex mb-4" id="rating">
      <span class="star text-7xl text-gray-400 cursor-pointer mr-1" data-value="1">&#9734;</span>
      <span class="star text-7xl text-gray-400 cursor-pointer mr-1" data-value="2">&#9734;</span>
      <span class="star text-7xl text-gray-400 cursor-pointer mr-1" data-value="3">&#9734;</span>
      <span class="star text-7xl text-gray-400 cursor-pointer mr-1" data-value="4">&#9734;</span>
      <span class="star text-7xl text-gray-400 cursor-pointer" data-value="5">&#9734;</span>
    </div>
    <textarea
      class="w-full h-40 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
      placeholder="Sanatoriyamiz haqida fikringizni kiriting"></textarea>
  </div>
</template>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const stars = document.querySelectorAll('.star');
  stars.forEach(star => {
    star.addEventListener('click', (e) => {
      const rating = e.target.getAttribute('data-value');
      updateStars(rating);
    });
  });

  function updateStars(rating) {
    stars.forEach(star => {
      if (star.getAttribute('data-value') <= rating) {
        star.classList.remove('text-gray-400');
        star.classList.add('text-yellow-500');
        star.innerHTML = '&#9733;';
      } else {
        star.classList.remove('text-yellow-500');
        star.classList.add('text-gray-400');
        star.innerHTML = '&#9734;';
      }
    });
  }
});
</script>

<style>
.container {
  margin-top: 10px;
  margin-bottom: 10px;
}

.star {
  cursor: pointer;
}
</style>

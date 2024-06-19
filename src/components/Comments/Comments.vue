<template>
  <div class="container p-6 bg-white rounded-lg shadow-md !mt-10 !mb-10">
    <h2 class="text-5xl font-bold text-gray-800 mb-4">IZOHLAR</h2>
    <div class="rating flex mb-4" id="rating">
      <span class="star text-7xl text-gray-400 cursor-pointer mr-1" data-value="1" @click="updateStars(1)">&#9734;</span>
      <span class="star text-7xl text-gray-400 cursor-pointer mr-1" data-value="2" @click="updateStars(2)">&#9734;</span>
      <span class="star text-7xl text-gray-400 cursor-pointer mr-1" data-value="3" @click="updateStars(3)">&#9734;</span>
      <span class="star text-7xl text-gray-400 cursor-pointer mr-1" data-value="4" @click="updateStars(4)">&#9734;</span>
      <span class="star text-7xl text-gray-400 cursor-pointer" data-value="5" @click="updateStars(5)">&#9734;</span>
    </div>
    <textarea v-model="formData.comment"
      class="w-full h-40 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
      placeholder="Sanatoriyamiz haqida fikringizni kiriting"></textarea>
    <div class="flex justify-end">
      <button type="submit" class="bg-[#3D5F01] mt-4 text-white font-roboto px-4 py-4 rounded-tl-3xl rounded-br-3xl"
        @click="handleSubmit">
        Tasdiqlash
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        comment: '',
        rating: 0
      },
      stars: []
    }
  },
  mounted() {
    this.stars = Array.from(document.querySelectorAll('.star'));
  },
  methods: {
    updateStars(rating) {
      this.formData.rating = rating;
      this.stars.forEach((star, index) => {
        if (index < rating) {
          star.classList.remove('text-gray-400');
          star.classList.add('text-yellow-500');
          star.innerHTML = '&#9733;';
        } else {
          star.classList.remove('text-yellow-500');
          star.classList.add('text-gray-400');
          star.innerHTML = '&#9734;';
        }
      });
    },
    handleSubmit() {
      const BOT_TOKEN = '7267506140:AAEHhJBrHmIyiqbqxefjdLMU4yubr9-7dk8'; 
      const CHAT_ID = -1002240327746; 

      const message = `
        <b>Rating:</b> ${this.formData.rating} stars
        <b>Comment:</b> ${this.formData.comment}
      `;

      fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'HTML'
        })
      })
        .then(response => response.json())
        .then(data => {
          console.log('Message sent:', data);
          alert('Form submitted successfully!');
          this.clearForm();
        })
        .catch(error => {
          console.error('Error sending message:', error);
          alert('Failed to submit the form.');
        });
    },
    clearForm() {
      // Reset form fields and ratings
      this.formData.comment = '';
      this.formData.rating = 0;
      this.stars.forEach(star => {
        star.classList.remove('text-yellow-500');
        star.classList.add('text-gray-400');
        star.innerHTML = '&#9734;';
      });
    }
  }
}
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

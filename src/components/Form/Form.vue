<template>
  <div class="p-6 bg-gray-100 rounded-lg shadow-md mt-5">
    <div class="container p-6">
      <h2 class="text-center text-green-700 font-bold text-5xl mb-6">JOY BAND QILISH</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4 flex items-center justify-center">
          <label for="name" class="text-green-700 font-medium mb-2 text-[25px] w-1/3">Ism Familiyangizni kiriting</label>
          <input type="text" id="name" v-model="formData.name"
            class="w-2/4 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" />
        </div>
        <div class="mb-4 flex items-center justify-center">
          <label for="region" class="text-green-700 font-medium mb-2 text-[25px] w-1/3">O'zingiz yashaydigan
            viloyat</label>
          <select id="region" v-model="formData.region"
            class="w-2/4 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600">
            <option>Toshkent Shahar</option>
            <option>Andijon viloyati</option>
            <option>Buxoro viloyati</option>
            <option>Fargʻona viloyati</option>
            <option>Jizzax viloyati</option>
            <option>Xorazm viloyati</option>
            <option>Namangan viloyati</option>
            <option>Navoiy viloyati</option>
            <option>Qashqadaryo viloyati</option>
            <option>Qoraqalpogʻiston Respublikasi</option>
            <option>Samarqand viloyati</option>
            <option>Sirdaryo viloyati</option>
            <option>Surxondaryo viloyati</option>
            <option>Toshkent viloyati</option>
          </select>
        </div>
        <div class="mb-4 flex items-center justify-center">
          <label for="phone" class="text-green-700 font-medium mb-2 text-[25px] w-1/3">Telefon raqamingizni
            kiriting</label>
          <input type="tel" id="phone" v-model="formData.phone"
            class="w-2/4 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600" />
        </div>
        <div class="mb-4 flex items-center justify-center">
          <label for="type" class="text-green-700 font-medium mb-2 text-[25px] w-1/3">Band qilish turini tanlang</label>
          <select id="type" v-model="formData.type"
            class="w-2/4 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600">
            <option>Standard</option>
            <option>Komfort</option>
            <option>Lux</option>
          </select>
        </div>
        <div class="flex justify-end items-center w-[92%]">
          <button type="submit" class="bg-[#3D5F01] mt-4 text-white font-roboto px-4 py-4 rounded-tl-3xl rounded-br-3xl">
            Tasdiqlash
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        region: '',
        phone: '',
        type: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      const BOT_TOKEN = '7267506140:AAEHhJBrHmIyiqbqxefjdLMU4yubr9-7dk8';
      const CHAT_ID = -1002240327746;
      const message = `
        <b>Ism Familiyangiz:</b> ${this.formData.name}\n
        <b>O'zingiz yashaydigan viloyat:</b> ${this.formData.region}\n
        <b>Telefon raqam:</b> ${this.formData.phone}\n
        <b>Band qilish turi:</b> ${this.formData.type}
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
      this.formData.name = '';
      this.formData.region = '';
      this.formData.phone = '';
      this.formData.type = '';
    }
  }
}
</script>

<style>
/* Add any global styles if necessary */
</style>

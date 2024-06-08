<template>
  <div class="p-6 bg-gray-100 rounded-lg shadow-md mt-5">
    <div class="container p-6">
      <h2 class="text-center text-green-700 font-bold text-5xl mb-6">JOY BAND QILISH</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4 flex items-center justify-center">
          <label for="name" class="text-green-700 font-medium mb-2 text-[25px] w-1/3"
            >Ism Familiyangizni kiriting</label
          >
          <input
            type="text"
            id="name"
            v-model="formData.name"
            class="w-2/4 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div class="mb-4 flex items-center justify-center">
          <label for="region" class="text-green-700 font-medium mb-2 text-[25px] w-1/3"
            >O'zingiz yashaydigan viloyat</label
          >
          <select
            id="region"
            v-model="formData.region"
            class="w-2/4 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            <option>Toshkent Sh</option>
            <!-- Add other options as needed -->
          </select>
        </div>
        <div class="mb-4 flex items-center justify-center">
          <label for="phone" class="text-green-700 font-medium mb-2 text-[25px] w-1/3"
            >Telefon raqamingizni kiriting</label
          >
          <input
            type="tel"
            id="phone"
            v-model="formData.phone"
            class="w-2/4 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div class="mb-4 flex items-center justify-center">
          <label for="type" class="text-green-700 font-medium mb-2 text-[25px] w-1/3"
            >Band qilish turini tanlang</label
          >
          <select
            id="type"
            v-model="formData.type"
            class="w-2/4 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            <option>Only Ne</option>
          </select>
        </div>
        <div class="flex justify-end items-center w-[92%]">
          <button
            type="submit"
            class="bg-[#3D5F01] mt-4 text-white font-roboto px-4 py-4 rounded-tl-3xl rounded-br-3xl"
          >
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
      // Handle form submission
      console.log(this.formData)
    }
  }
}
</script>

<style>
/* Add any global styles if necessary */
</style>

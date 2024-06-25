<template>
    <div class="bg min-h-screen flex justify-center items-center">
        <div class="container">
            <div class="flex justify-center w-full komfort gap-16">
                <div class="flex flex-col gap-5">
                    <p class="text-[#4E6B20] text-2xl font-semibold text-center">2 o'rinli standard</p>
                    <video width="540" height="360" controls>
                        <source :src="videoSource2" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div class="flex justify-center items-center">
                    <img src="../../assets/img/x.png" alt="" class="w-[200px]">
                </div>
                <div>
                    <div class="flex flex-col items-center gap-5">
                        <div class="">
                            <p class="text-red-600 text-2xl font-medium text-center">1 kishi uchun narx : 300.000</p>
                            <div class="relative mt-5">
                                <input type="" v-model.number="inputValue" @input="validateInput"
                                    placeholder="Sonini kiriting"
                                    class="border rounded-lg px-4 py-2 w-[300px] shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-12" />
                               
                                <p v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</p>
                            </div>
                            <div></div>
                        </div>
                        <button v-if="!selectedPaymentMethod" :disabled="isInvalidInput"
                            class="bg-[#3D5F01] text-white font-roboto w-[175px] py-4 rounded-tl-3xl rounded-br-3xl text-center shadow-xl disabled:opacity-50 disabled:cursor-not-allowed shadow-[#3D5F01]"
                            @click="handlePayment('click')">
                            To'lov Qilish (Click)
                        </button>
                        <button v-if="selectedPaymentMethod === 'click'" :disabled="isInvalidInput"
                            class="bg-[#3D5F01] text-white font-roboto w-[175px] py-4 rounded-tl-3xl rounded-br-3xl text-center shadow-xl disabled:opacity-50 disabled:cursor-not-allowed shadow-[#3D5F01]"
                            @click="redirectToPayment('click')">
                            To'lov Qilish (Click)
                        </button>
                        <button v-if="selectedPaymentMethod === 'payme'" :disabled="isInvalidInput"
                            class="bg-[#3D5F01] text-white font-roboto w-[175px] py-4 rounded-tl-3xl rounded-br-3xl text-center shadow-xl disabled:opacity-50 disabled:cursor-not-allowed shadow-[#3D5F01]"
                            @click="redirectToPayment('payme')">
                            To'lov Qilish (Payme)
                        </button>
                        <button v-if="selectedPaymentMethod === 'uzum'" :disabled="isInvalidInput"
                            class="bg-[#3D5F01] text-white font-roboto w-[175px] py-4 rounded-tl-3xl rounded-br-3xl text-center shadow-xl disabled:opacity-50 disabled:cursor-not-allowed shadow-[#3D5F01]"
                            @click="redirectToPayment('uzum')">
                            To'lov Qilish (Uzum)
                        </button>
                    </div>
                    <div class="mt-10 items-center flex flex-col">
                        <p>To'lov usulini tanlang:</p>
                        <div class="flex gap-3">
                            <button @click="handlePayment('click')">
                                <img src="../../assets/img/click.svg" alt="Click" />
                            </button>
                            <button @click="handlePayment('payme')">
                                <img src="../../assets/img/payme.svg" alt="Payme" />
                            </button>
                            <button @click="handlePayment('uzum')">
                                <img src="../../assets/img/uzum.svg" alt="Uzum" />
                            </button>
                        </div>
                        <router-link to="/Room" class="text-left px-6 py-2 bg-[#022511] text-white max-w-xs rounded-lg">
                            <img src="../../assets/img/exit.png" alt="" />
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import videoSource2 from '../../assets/video/fg4tjryzpa50ibxc4jgg.mp4'

export default {
    data() {
        return {
            selectedPaymentMethod: null,
            videoSource2: videoSource2,
            inputValue: 1, // Default value as number
            errorMessage: '',
        }
    },
    computed: {
        isInvalidInput() {
            return this.errorMessage !== ''
        }
    },
    methods: {
        validateInput() {
            if (this.inputValue > 15) {
                this.errorMessage = 'Son 15 dan oshmasligi kerak';
            } else {
                this.errorMessage = '';
            }
        },
        handlePayment(method) {
            this.selectedPaymentMethod = method;
        },
        redirectToPayment(method) {
            switch (method) {
                case 'click':
                    window.location.href = 'https://click.uz/ru';
                    break;
                case 'payme':
                    window.location.href = 'https://payme.uz/home/main';
                    break;
                case 'uzum':
                    window.location.href = 'https://uzumbank.uz/ru';
                    break;
                default:
                    break;
            }
        }
    }
}
</script>
  
<style scoped>
input {
    padding-right: 2.5rem;
    /* Adjust padding to accommodate the span */
}

button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
</style>
  
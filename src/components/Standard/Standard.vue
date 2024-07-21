<template>
    <div class="bg min-h-screen flex justify-center items-center p-4">
        <div class="container mx-auto">
            <div class="flex flex-col md:flex-row justify-center w-full gap-8 md:gap-16">
                <!-- Video Section -->
                <div class="flex flex-col gap-5 w-full md:w-1/3">
                    <p class="text-[#4E6B20] text-xl md:text-2xl font-semibold text-center">
                        Standard, 2 xona 2 krovat
                    </p>
                    <div class="video border-4 border-[#fff] rounded-lg">
                        <video class="rounded-lg w-full" controls>
                            <source :src="videoSource" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>

                <!-- Image Section -->
                <div class="flex justify-center items-center w-full md:w-1/3">
                    <img src="../../assets/img/x.png" alt="" class="w-[150px] md:w-[200px]">
                </div>

                <!-- Pricing and Payment Section -->
                <div class="flex flex-col items-center gap-5 w-full md:w-1/3">
                    <p class="text-red-600 text-xl md:text-2xl font-medium text-center">
                        1 Kun uchun narx : 300.000
                    </p>
                    <div class="relative mt-5">
                        <input v-model.number="inputValue" @input="validateInput" @blur="resetInputValue" type="number"
                            placeholder="Sonini kiriting"
                            class="border rounded-lg px-4 py-2 w-full max-w-xs shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-12" />
                        <p v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</p>
                    </div>
                    <div class="flex items-center gap-1 text-[#4E6B20] text-base">
                        <p>{{ inputValue || 1 }}</p>
                        <p>x</p>
                        <p>300,000</p>
                        <p>=</p>
                        <p>{{ totalPrice.toLocaleString() + " so'm" }}</p>
                    </div>
                    <div class="flex flex-col items-center gap-3 mt-5">
                        <button v-if="!selectedPaymentMethod" :disabled="isInvalidInput"
                            class="gradient-button py-4 text-center disabled:opacity-50 disabled:cursor-not-allowed"
                            @click="handlePayment('click')">
                            To'lov Qilish (Click)
                        </button>
                        <button v-if="selectedPaymentMethod === 'click'" :disabled="isInvalidInput"
                            class="gradient-button text-white py-4 text-center disabled:opacity-50 disabled:cursor-not-allowed"
                            @click="redirectToPayment('click')">
                            To'lov Qilish (Click)
                        </button>
                        <button v-if="selectedPaymentMethod === 'payme'" :disabled="isInvalidInput"
                            class="gradient-button text-white py-4 text-center disabled:opacity-50 disabled:cursor-not-allowed"
                            @click="redirectToPayment('payme')">
                            To'lov Qilish (Payme)
                        </button>
                        <button v-if="selectedPaymentMethod === 'uzum'" :disabled="isInvalidInput"
                            class="gradient-button text-white py-4 text-center disabled:opacity-50 disabled:cursor-not-allowed"
                            @click="redirectToPayment('uzum')">
                            To'lov Qilish (Uzum)
                        </button>
                    </div>
                    <div class="mt-10 flex flex-col items-center gap-3">
                        <p>To'lov usulini tanlang:</p>
                        <div class="flex gap-3">
                            <button @click="handlePayment('click')">
                                <img src="../../assets/img/click.svg" alt="Click" class="w-8 h-8 md:w-12 md:h-12" />
                            </button>
                            <button @click="handlePayment('payme')">
                                <img src="../../assets/img/payme.svg" alt="Payme" class="w-8 h-8 md:w-12 md:h-12" />
                            </button>
                            <button @click="handlePayment('uzum')">
                                <img src="../../assets/img/uzum.svg" alt="Uzum" class="w-8 h-8 md:w-12 md:h-12" />
                            </button>
                        </div>
                        <router-link to="/Room"
                            class="text-left px-6 py-2 bg-[#022511] text-white max-w-xs rounded-lg mt-4">
                            <img src="../../assets/img/exit.png" alt="" />
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import videoSource from '@/assets/video/rosp22hqgw7hqlvefp7b.mp4';

export default {
    data() {
        return {
            selectedPaymentMethod: null,
            videoSource: videoSource,
            inputValue: 1,
            errorMessage: '',
        }
    },
    computed: {
        isInvalidInput() {
            return this.errorMessage !== ''
        },
        totalPrice() {
            return (this.inputValue || 1) * 300000;
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
        resetInputValue() {
            if (!this.inputValue) {
                this.inputValue = 1;
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
}

button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.video {
    box-shadow: 4.95px 0px 2.6px rgba(159, 159, 159);
}

.gradient-button {
    background: linear-gradient(to top right, #3D5F01, rgb(61, 61, 61));
    border: none;
    color: white;
    width: 175px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 25px;
    cursor: pointer;
    transition: 0.3s ease;
}

.gradient-button:hover {
    background: linear-gradient(to right, #4d7901, rgb(70, 70, 70));
}
</style>

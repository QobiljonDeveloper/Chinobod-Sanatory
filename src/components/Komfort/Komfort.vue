<template>
    <div class="bg min-h-screen flex justify-center items-center p-4">
        <div class="container mx-auto">
            <div class="flex flex-col lg:flex-row gap-16">
                <!-- Left Column -->
                <div class="flex flex-col gap-5 w-full lg:w-1/3">
                    <p class="text-[#4E6B20] text-xl lg:text-2xl font-semibold text-center">
                        Komfort, 2 o'rinli standard
                    </p>
                    <div class="video border-4 border-[#fff] rounded-lg overflow-hidden">
                        <video width="100%" height="auto" controls class="rounded-lg">
                            <source :src="videoSource2" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <!-- Center Image -->
                <div class="flex justify-center items-center w-full lg:w-1/3">
                    <img src="../../assets/img/x.png" alt="" class="w-[150px] lg:w-[200px]">
                </div>
                <!-- Right Column -->
                <div class="w-full lg:w-1/3">
                    <div class="flex flex-col items-center gap-5">
                        <p class="text-red-600 text-xl lg:text-2xl font-medium text-center">
                            1 Kun uchun narx : 350.000
                        </p>
                        <div class="relative mt-5">
                            <input v-model.number="inputValue" @input="validateInput" @blur="resetInputValue" type="number"
                                placeholder="Sonini kiriting"
                                class="border rounded-lg px-4 py-2 w-full lg:w-[300px] shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-12" />
                            <p v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</p>
                        </div>
                        <div class="flex items-center gap-1">
                            <p class="text-base text-[#4E6B20]">{{ inputValue || 1 }}</p>
                            <p class="text-base text-[#4E6B20]">x</p>
                            <p class="text-base text-[#4E6B20]">350,000</p>
                            <p class="text-base text-[#4E6B20]">=</p>
                            <p class="text-base text-[#4E6B20]">{{ totalPrice.toLocaleString() + " so'm" }}</p>
                        </div>
                        <div class="flex flex-col gap-2 mt-4">
                            <button v-if="!selectedPaymentMethod" :disabled="isInvalidInput"
                                class="gradient-button font-roboto py-4 text-center shadow-xl disabled:opacity-50 disabled:cursor-not-allowed shadow-[#3D5F01]"
                                @click="handlePayment('click')">
                                To'lov Qilish (Click)
                            </button>
                            <button v-if="selectedPaymentMethod === 'click'" :disabled="isInvalidInput"
                                class="gradient-button text-white font-roboto py-4 text-center shadow-xl disabled:opacity-50 disabled:cursor-not-allowed shadow-[#3D5F01]"
                                @click="redirectToPayment('click')">
                                To'lov Qilish (Click)
                            </button>
                            <button v-if="selectedPaymentMethod === 'payme'" :disabled="isInvalidInput"
                                class="gradient-button text-white font-roboto py-4 text-center shadow-xl disabled:opacity-50 disabled:cursor-not-allowed shadow-[#3D5F01]"
                                @click="redirectToPayment('payme')">
                                To'lov Qilish (Payme)
                            </button>
                            <button v-if="selectedPaymentMethod === 'uzum'" :disabled="isInvalidInput"
                                class="gradient-button text-white font-roboto py-4 text-center shadow-xl disabled:opacity-50 disabled:cursor-not-allowed shadow-[#3D5F01]"
                                @click="redirectToPayment('uzum')">
                                To'lov Qilish (Uzum)
                            </button>
                        </div>
                        <!-- Payment Methods -->
                        <div class="mt-10 flex flex-col items-center">
                            <p class="mb-4">To'lov usulini tanlang:</p>
                            <div class="flex flex-wrap gap-3 justify-center">
                                <button @click="handlePayment('click')">
                                    <img src="../../assets/img/click.svg" alt="Click" class="w-[40px] lg:w-[50px]" />
                                </button>
                                <button @click="handlePayment('payme')">
                                    <img src="../../assets/img/payme.svg" alt="Payme" class="w-[40px] lg:w-[50px]" />
                                </button>
                                <button @click="handlePayment('uzum')">
                                    <img src="../../assets/img/uzum.svg" alt="Uzum" class="w-[40px] lg:w-[50px]" />
                                </button>
                            </div>
                            <router-link to="/Room"
                                class="mt-6 px-6 py-2 bg-[#022511] text-white max-w-xs rounded-lg flex items-center gap-2">
                                <img src="../../assets/img/exit.png" alt="" class="w-[20px] lg:w-[25px]" />
                            </router-link>
                        </div>
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
        },
        totalPrice() {
            return (this.inputValue || 1) * 350000;
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
    /* Adjust padding to accommodate the span */
}

button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.video {
    box-shadow: 4.95px 0px 2.6px rgba(159, 159, 159);
    width: 100%;
    height: auto;
}

.gradient-button {
    background: linear-gradient(to top right, #3D5F01, rgb(61, 61, 61));
    border: none;
    color: white;
    width: 100%;
    max-width: 175px;
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

/* Responsive adjustments */
@media (max-width: 768px) {
    .container {
        padding: 0 1rem;
    }

    .text-center {
        text-align: center;
    }

    .video video {
        width: 100%;
        height: auto;
    }

    .gradient-button {
        width: 100%;
        max-width: none;
    }
}
</style>


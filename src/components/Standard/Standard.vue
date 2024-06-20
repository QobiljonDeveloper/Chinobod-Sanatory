<template lang="">
    <div class="bg min-h-screen flex justify-center items-center ">
        
        <div class="container"><div class="flex justify-between w-full standard">
                    <video width="640" height="360" controls>
                        <source :src="videoSource" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                <div>
                    <div class="flex flex-col items-center gap-5">
                        <div class="flex gap-5">
                            <p class="text-[#4E6B20] text-2xl font-semibold">2 xona 2 krovat</p>
                            <p class="text-[#4E6B20] text-2xl font-semibold">300.000 so'm</p>
                        </div>
                        <button v-if="!selectedPaymentMethod"
                            class="bg-[#3D5F01] text-white font-roboto w-[175px] py-4 rounded-tl-3xl rounded-br-3xl text-center"
                            @click="handlePayment('click')">
                            To'lov Qilish (Click)
                        </button>
                        <button v-if="selectedPaymentMethod === 'click'"
                            class="bg-[#3D5F01] text-white font-roboto w-[175px] py-4 rounded-tl-3xl rounded-br-3xl text-center"
                            @click="redirectToPayment('click')">
                            To'lov Qilish (Click)
                        </button>
                        <button v-if="selectedPaymentMethod === 'payme'"
                            class="bg-[#3D5F01] text-white font-roboto w-[175px] py-4 rounded-tl-3xl rounded-br-3xl text-center"
                            @click="redirectToPayment('payme')">
                            To'lov Qilish (Payme)
                        </button>
                        <button v-if="selectedPaymentMethod === 'uzum'"
                            class="bg-[#3D5F01] text-white font-roboto w-[175px] py-4 rounded-tl-3xl rounded-br-3xl text-center"
                            @click="redirectToPayment('uzum')">
                            To'lov Qilish (Uzum)
                        </button>
                    </div>
                    <div class="mt-10 items-center flex flex-col">
                        <p>To'lov usulini tanlang:</p>
                        <div class="flex gap-3">
                            <button @click="handlePayment('click')">
                                <img src="../../assets/img/click.svg" alt="Click">
                            </button>
                            <button @click="handlePayment('payme')">
                                <img src="../../assets/img/payme.svg" alt="Payme">
                            </button>
                            <button @click="handlePayment('uzum')">
                                <img src="../../assets/img/uzum.svg" alt="Uzum">
                            </button>
                        </div>
                        <router-link to="/Room" class="text-left px-6 py-2 bg-[#022511] text-white max-w-xs rounded-lg">
                <img src="../../assets/img/exit.png" alt="">
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

        };
    },
    methods: {
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
<style lang="">
    
</style>
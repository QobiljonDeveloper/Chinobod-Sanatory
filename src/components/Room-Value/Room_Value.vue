<template>
    <div class="bg min-h-screen flex flex-col justify-center">
        <div class="container flex flex-col gap-5 items-center w-full">
         
            
            <div class="flex justify-between w-full lux">
                <div class="right border-dashed border-4 border-[#4E6B20]">
                    <video width="500" height="260" controls>
                        <source :src="videoSource2" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div>
                    <div class="flex flex-col items-center gap-5">
                        <div class="flex gap-5">
                            <p class="text-[#4E6B20] text-2xl font-semibold">Lux 2 to'shak, 1 xonali</p>
                            <p class="text-[#4E6B20] text-2xl font-semibold">400.000 so'm</p>
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import videoSource from '@/assets/video/rosp22hqgw7hqlvefp7b.mp4';
import videoSource2 from '@/assets/video/fg4tjryzpa50ibxc4jgg.mp4';
import videoSource3 from '@/assets/video/59tibuwdbivz34q3abnc.mp4';


export default {
    data() {
        return {
            selectedPaymentMethod: null,
            videoSource: videoSource,
            videoSource2: videoSource2,
            videoSource3: videoSource3,
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
  
<style></style>
  
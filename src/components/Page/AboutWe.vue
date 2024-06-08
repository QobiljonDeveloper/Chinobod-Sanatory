<!-- <template>
    <div class="container flex items-center flex-col">
        <div class="flex items-center justify-center flex-col">
            <h1 class="font-extrabold text-[#3E6002] text-4xl">BIZ HAQIMIZDA</h1>
            <p class="text-[#4E6B20] text-base font-bold max-w-[75%] text-center mt-5">Chinobod sanatoriyasi siz va oilangiz
                dam olishi va so'glomlashuvi uchun judayam ajoyb imkoniyat</p>
        </div>
        <div class="flex mt-10 items-center justify-between w-full">
            <div class="flex flex-col" style="width: 660px">
                <p class="text-[#4E6B20] text-3xl font-bold">Sizga nima taklif qila olamiz ?</p>
                <p class="text-[#4E6B20] text-base font-bold max-w-[70%] mt-5">
                    Yuqori darajadagi xizmat, shinam xonalar, tog'li landshaftlarning noyob manzaralari nafaqat tanangiz
                    bilan,
                    balki qalbingiz bilan ham dam olishga yordam beradi.
                    Zamonaviy davolash xonalari, Tuz g'ori, Chinobod manbaidan toza suv, Suv osti dushi massaji, jismoniy
                    terapiya.
                    Sanatoriyada ovqat hazm qilish tizimi, ginekologik kasalliklar, qandli diabet kasalliklariga tashxis
                    qoyish
                    va davolash uchun zarur diagnostika va davolash xonalari mavjud.
                </p>
                <div class="flex items-start justify-start gap-10 mt-5">
                    <button class="bg-[#3D5F01] text-white font-roboto w-[175px] py-4 rounded-tl-3xl rounded-br-3xl">
                        BATAFSIL
                    </button>
                    <button class="bg-[#3D5F01] text-white font-roboto px-4 py-4 rounded-tl-3xl rounded-br-3xl">
                        <img src="../../assets/img/arrow.svg" alt="">
                    </button>
                </div>
            </div>
            <div class="relative partial-border p-5" style="width: 560px;">
                <video ref="video1" width="640" height="360" controls @play="videoStarted" @pause="videoPaused">
                    <source :src="videoSource" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
        <div class="flex mt-10 items-center justify-between w-full">
            <div class="relative partial-border p-5" style="width: 560px;">
                <video width="640" height="360" controls>
                    <source :src="videoSource2" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="flex flex-col" style="width: 400px;">
                <p class="text-[#4E6B20] text-3xl font-bold">Dam olishingiz uchun qo'shimcha imkoniyatlar</p>
                <p class="text-[#4E6B20] text-base font-bold mt-5 w-full">
                    - Oshxona<br>
                    - Dam olish maydoni<br>
                    - Mashinalar uchun turargoh<br>
                    - Qulay xonalar<br>
                    - Yoqimli bog' manzarasi<br>
                    - Yuqori samarali davolash usullari<br>
                    - Qulay yashash sharoitlari
                </p>
                <div class="flex items-start justify-start gap-10 mt-5">
                    <button class="bg-[#3D5F01] text-white font-roboto w-[175px] py-4 rounded-tl-3xl rounded-br-3xl">
                        BATAFSIL
                    </button>
                    <button class="bg-[#3D5F01] text-white font-roboto px-4 py-4 rounded-tl-3xl rounded-br-3xl">
                        <img src="../../assets/img/arrow.svg" alt="">
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import videoSource from '@/assets/video/Suite_Room_Promo_Video_For_Hotel_｜｜_Created_by_CIRCLE_Digital_qemqQHaeCYo.mp4';
import videoSource2 from '@/assets/video/Plaza Hotel ｜ Advertising [BCuH9jTMK58].mp4';

export default {
    data() {
        return {
            videoSource: videoSource,
            videoSource2: videoSource2,
        };
    },
}
</script>

<style>
.partial-border::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 170px;
    height: 4px;
    background-color: #4E6B20;
}

.partial-border::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 150px;
    background-color: #4E6B20;
}
</style> -->

<template>
    <div class="container flex items-center flex-col">
        <div class="flex items-center justify-center flex-col">
            <h1 class="font-extrabold text-[#3E6002] text-4xl">BIZ HAQIMIZDA</h1>
            <p class="text-[#4E6B20] text-base font-bold max-w-[75%] text-center mt-5">Chinobod sanatoriyasi siz va oilangiz
                dam olishi va so'glomlashuvi uchun judayam ajoyb imkoniyat</p>
        </div>
        <div class="flex mt-10 items-center justify-between w-full">
            <div class="flex flex-col" style="width: 660px">
                <p class="text-[#4E6B20] text-3xl font-bold">Sizga nima taklif qila olamiz ?</p>
                <p class="text-[#4E6B20] text-base font-bold max-w-[70%] mt-5">
                    Yuqori darajadagi xizmat, shinam xonalar, tog'li landshaftlarning noyob manzaralari nafaqat tanangiz
                    bilan,
                    balki qalbingiz bilan ham dam olishga yordam beradi.
                    Zamonaviy davolash xonalari, Tuz g'ori, Chinobod manbaidan toza suv, Suv osti dushi massaji, jismoniy
                    terapiya.
                    Sanatoriyada ovqat hazm qilish tizimi, ginekologik kasalliklar, qandli diabet kasalliklariga tashxis
                    qoyish
                    va davolash uchun zarur diagnostika va davolash xonalari mavjud.
                </p>
                <div class="flex items-start justify-start gap-10 mt-5">
                    <router-link to="/batafsil" target="_blank">
                        <button class="bg-[#3D5F01] text-white font-roboto w-[175px] py-4 rounded-tl-3xl rounded-br-3xl">
                            BATAFSIL
                        </button>
                    </router-link>

                    <button class="bg-[#3D5F01] text-white font-roboto px-4 py-4 rounded-tl-3xl rounded-br-3xl">
                        <img src="../../assets/img/arrow.svg" alt="">
                    </button>
                </div>
            </div>
            <div class="relative partial-border p-5" style="width: 560px;">
                <video ref="video1" width="640" height="360" controls @play="videoStarted" @pause="videoPaused">
                    <source :src="videoSource" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
        <div class="flex mt-10 items-center justify-between w-full">
            <div class="relative partial-border p-5" style="width: 560px;">
                <video width="640" height="360" controls>
                    <source :src="videoSource2" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="flex flex-col" style="width: 400px;">
                <p class="text-[#4E6B20] text-3xl font-bold">Dam olishingiz uchun qo'shimcha imkoniyatlar</p>
                <p class="text-[#4E6B20] text-base font-bold mt-5 w-full">
                    - Oshxona<br>
                    - Dam olish maydoni<br>
                    - Mashinalar uchun turargoh<br>
                    - Qulay xonalar<br>
                    - Yoqimli bog' manzarasi<br>
                    - Yuqori samarali davolash usullari<br>
                    - Qulay yashash sharoitlari
                </p>
                <div class="flex items-start justify-start gap-10 mt-5">
                    <router-link to="/batafsil">
                        <button class="bg-[#3D5F01] text-white font-roboto w-[175px] py-4 rounded-tl-3xl rounded-br-3xl">
                            BATAFSIL
                        </button>
                    </router-link>
                    <button class="bg-[#3D5F01] text-white font-roboto px-4 py-4 rounded-tl-3xl rounded-br-3xl">
                        <img src="../../assets/img/arrow.svg" alt="">
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import videoSource from '@/assets/video/Suite_Room_Promo_Video_For_Hotel_｜｜_Created_by_CIRCLE_Digital_qemqQHaeCYo.mp4';
import videoSource2 from '@/assets/video/Plaza Hotel ｜ Advertising [BCuH9jTMK58].mp4';

export default {
    data() {
        return {
            videoSource: videoSource,
            videoSource2: videoSource2,
        };
    },
}
</script>
  
<style>
.partial-border::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 170px;
    height: 4px;
    background-color: #4E6B20;
}

.partial-border::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 150px;
    background-color: #4E6B20;
}
</style>
  

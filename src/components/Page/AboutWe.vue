<template>
    <div class="container flex flex-col items-center">
        <div class="flex flex-col items-center justify-center">
            <h1 class="font-extrabold text-[#3E6002] text-4xl">BIZ HAQIMIZDA</h1>
            <p class="text-[#4E6B20] text-base font-bold max-w-[75%] text-center mt-5">
                Chinobod sanatoriyasi siz va oilangiz dam olishi va so'glomlashuvi uchun judayam ajoyib imkoniyat
            </p>
        </div>
        <div
            class="flex flex-col lg:flex-row lg:items-center lg:justify-between justify-between lg:mt-10  w-full mt-10 wrapper-1">
            <div class="flex flex-col order-1 text-start lg:w-[660px]">
                <p class="text-[#4E6B20] text-3xl font-bold">Sizga nima taklif qila olamiz ?</p>
                <p class="text-[#4E6B20] text-base font-bold max-w-[70%] mt-5">
                    Yuqori darajadagi xizmat, shinam xonalar, tog'li landshaftlarning noyob manzaralari nafaqat tanangiz
                    bilan, balki qalbingiz bilan ham dam olishga yordam beradi. Zamonaviy davolash xonalari, Tuz g'ori,
                    Chinobod
                    manbaidan toza suv, Suv osti dushi massaji, jismoniy terapiya. Sanatoriyada ovqat hazm qilish
                    tizimi, ginekologik
                    kasalliklar, qandli diabet kasalliklariga tashxis qoyish va davolash uchun zarur diagnostika va
                    davolash xonalari
                    mavjud.
                </p>
                <div class="flex justify-start gap-5 mt-5">
                    <router-link to="/batafsil"
                        class="bg-[#3D5F01] text-white font-roboto w-[175px] py-4 rounded-tl-3xl rounded-br-3xl text-center">
                        BATAFSIL
                    </router-link>
                    <router-link to="/batafsil"
                        class="bg-[#3D5F01] text-white font-roboto px-4 py-4 rounded-tl-3xl rounded-br-3xl text-center">
                        <img src="../../assets/img/arrow.svg" alt="">
                    </router-link>
                </div>
            </div>
            <div class="relative partial-border p-5 order-2 lg:w-[560px] video">
                <video ref="video1" width="640" height="360" controls @play="videoStarted" @pause="videoPaused">
                    <source :src="videoSource" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
        <div class="flex flex-col lg:flex-row items-center justify-between w-full mt-10 wrapper-2">
            <div class="relative partial-border p-5 order-2 lg:w-[560px]">
                <video width="640" height="360" controls>
                    <source :src="videoSource2" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="flex flex-col order-1 text-start lg:w-[400px]">
                <p class="text-[#4E6B20] text-3xl font-bold">Dam olishingiz uchun qo'shimcha imkoniyatlar</p>
                <p class="text-[#4E6B20] text-base font-bold mt-5 w-full mx-auto">
                    - Oshxona<br>
                    - Dam olish maydoni<br>
                    - Mashinalar uchun turargoh<br>
                    - Qulay xonalar<br>
                    - Yoqimli bog' manzarasi<br>
                    - Yuqori samarali davolash usullari<br>
                    - Qulay yashash sharoitlari
                </p>
                <div class="flex items-start justify-start gap-5 mt-5">
                    <router-link to="/batafsil"
                        class="bg-[#3D5F01] text-white font-roboto w-[175px] py-4 rounded-tl-3xl rounded-br-3xl text-center">
                        BATAFSIL
                    </router-link>
                    <router-link to="/batafsil"
                        class="bg-[#3D5F01] text-white font-roboto px-4 py-4 rounded-tl-3xl rounded-br-3xl text-center">
                        <img src="../../assets/img/arrow.svg" alt="">
                    </router-link>
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

/* Media query to add margin-top for videos in wrapper-1 and wrapper-2 on larger screens */
@media (min-width: 1024px) {

    .wrapper-1 .video,
    .wrapper-2 .video {
        margin-top: 100px;
    }
}
</style>



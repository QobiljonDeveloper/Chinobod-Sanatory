<template>
    <div class="container flex items-center flex-col">
        <div class="flex items-center justify-center flex-col">
            <h1 class="font-extrabold text-[#3E6002] text-4xl">BIZ HAQIMIZDA</h1>
            <p class="text-[#4E6B20] text-base font-bold max-w-[75%] text-center mt-5">Chinobod sanatoriyasi siz va oilangiz
                dam olishi va so'glomlashuvi uchun judayam ajoyb imkoniyat</p>
        </div>
        <div class="flex items-center mt-10">
            <div class="flex flex-col">
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
            <div class="relative partial-border p-5">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/IQw-4JABPCM?si=6GJE6JVpUhMIzq-n"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'YourComponent'
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

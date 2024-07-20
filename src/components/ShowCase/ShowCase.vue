<template>
  <div class="container flex flex-col lg:flex-row py-10 justify-between items-center">
    <div class="w-full lg:w-[70%] flex flex-col items-start justify-center bg-[#EFEFEF] h-[640px] gap-6 px-16 wrapper">
      <div>
        <h1 class="font-roboto font-black text-[#3E6002] text-5xl">CHINABAD</h1>
        <h2 class="font-roboto font-bold text-[#3D5F00] text-3xl">Sanatoriyasiga xush kelibsiz</h2>
      </div>
      <div class="border-b-2 border-[#3D5F00] w-[35%]"></div>
      <p class="font-roboto text-[#4E6B20] text-base font-bold ">
        Yuqori texnalogiyalar bilan jihozlangan hamda shifobaxsh <br> suvga ega sanatoriyamizga tashrif
        buyurishingizdan oldin <br> o'z xonangizni ko'ring va joyingizni oldindan buyurtma qiling
      </p>
      <div class="flex items-center gap-5">
        <a href="#form" class="bg-[#3D5F01] text-white font-roboto px-4 py-4 rounded-tl-3xl rounded-br-3xl">
          BUYURTMA BERISH
        </a>
        <a href="#form" class="bg-[#3D5F01] text-white font-roboto px-4 py-4 rounded-tl-3xl rounded-br-3xl">
          <img src="../../assets/img/arrow.svg" alt="arrow" />
        </a>
      </div>
    </div>
    <div class="w-full lg:w-[40%] h-[640px]">
      <img src="../../assets/img/ShowCase-bg.jpg" alt="Showcase" class="w-full h-full object-cover" />
    </div>
  </div>
</template>

<script setup></script>

<style>
@media (min-width: 1024px) {
  .container {
    flex-direction: row;
  }
}
</style>

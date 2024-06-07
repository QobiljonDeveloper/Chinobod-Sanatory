<template>
    <div class="bg-[#3D5F00] w-full h-24 flex items-center justify-between">
        <div class="container mx-auto flex  items-center justify-between">
            <div class="relative">
                <input placeholder="Search Here" type="text"
                    class="border-b-2 border-x-0 border-y-0 border-solid border-[#fafafa] bg-transparent w-[270px] py-1  outline-none px-3">
                <img src="../../assets/img/search.png" alt=""
                    class="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4">
            </div>
            <div class="middle-header flex flex-col items-center">
                <img src="../../assets/img/medicine.svg" alt="" class="w-16 h-16">
                <p class="text-white font-roboto">CHINABAD</p>
            </div>
            <div class="flex items-center gap-10">
                <div class="flex gap-1">
                    <button class="text-white font-roboto">Register</button>
                    <span class="text-white">/</span>
                    <button class="text-white font-roboto ">Login</button>
                </div>
                <div class="flex items-center gap-3">
                    <button type="button"
                        class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white rounded-lg "
                        id="btn2">
                        <img src="../../assets/img/heart.png" alt="">
                        <div
                            class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-[#5E8913] rounded-full -top-2 -right-2 ">
                            0</div>
                    </button>
                    <button type="button"
                        class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white rounded-lg "
                        id="btn2">
                        <img src="../../assets/img/cart.png" alt="">
                        <div
                            class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-[#5E8913] rounded-full -top-2 -right-2 ">
                            0</div>
                    </button>
                </div>
            </div>

        </div>

    </div>
</template>
  
<script setup>
import { ElInput } from 'element-plus';
import 'element-plus/dist/index.css';
</script>
<style lang="">
    
</style>
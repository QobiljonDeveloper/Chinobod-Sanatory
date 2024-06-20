<template>
    <div class="bg min-h-screen flex justify-between items-center">
        <div class="container flex flex-col justify-between w-full gap-10 pt-10">
            <router-link to="/" class="text-left px-6 py-2 bg-[#022511] text-white rounded-lg w-[60px]">
                <img src="../../assets/img/exit.png" alt="">
            </router-link>  
            <div class="flex justify-between w-full">
                <div class="right border-dashed border-4 border-[#4E6B20]">
                    <video width="500" height="260" controls>
                        <source :src="videoSource" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div class="flex items-center gap-5">
                    <p class="text-[#4E6B20] text-3xl font-semibold">Standard Xona</p>
                    <router-link to="/Standard"
                        class="bg-[#3D5F01] text-white font-roboto w-[175px] py-4 rounded-tl-3xl rounded-br-3xl text-center standard">
                        Band Qilish
                    </router-link>
                </div>
            </div>
            <div class="flex justify-between w-full">
                <div class="right border-dashed border-4 border-[#4E6B20]">
                    <video width="500" height="260" controls>
                        <source :src="videoSource2" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div class="flex items-center gap-5">
                    <p class="text-[#4E6B20] text-3xl font-semibold">Komfort Xona</p>
                    <router-link to="/Komfort"
                        class="bg-[#3D5F01] text-white font-roboto w-[175px] py-4 rounded-tl-3xl rounded-br-3xl text-center komfort">
                        Band Qilish
                    </router-link>
                </div>
            </div>
            <div class="flex justify-between w-full">
                <div class="right border-dashed border-4 border-[#4E6B20]">
                    <video width="500" height="260" controls>
                        <source :src="videoSource3" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div class="flex items-center gap-5">
                    <p class="text-[#4E6B20] text-3xl font-semibold">Lux Xona</p>
                    <router-link to="/Value"
                        class="bg-[#3D5F01] text-white font-roboto w-[175px] py-4 rounded-tl-3xl rounded-br-3xl text-center komfort">
                        Band Qilish
                    </router-link>
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
            videoSource: videoSource,
            videoSource2: videoSource2,
            videoSource3: videoSource3,


        };
    },
};
</script>
  
<style scoped>
/* Add scoped styles here if needed */
</style>
  
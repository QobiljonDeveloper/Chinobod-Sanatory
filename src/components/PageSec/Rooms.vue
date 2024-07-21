<template>
    <div class="!mt-10 !mb-10 container">
        <div class="head flex items-center justify-center flex-col">
            <p class="text-[#4E6B20] text-3xl font-bold">XONA TURLARI</p>
            <p class="text-[#4E6B20] text-base font-bold mt-5">
                Barcha xonalar yuqori qulayliklarga ega
            </p>
        </div>
        <div class="room-type  items-center flex justify-between w-full mt-16">
            <div class="left flex w-full flex-col">
                <div class="flex justify-between w-[80%]">
                    <div>
                        <p class="text-[#4E6B20] text-3xl font-extrabold">
                            Standard, 2 xona 2 krovat
                        </p>
                    </div>
                    <div>
                        <p class="text-[#4E6B20] text-3xl font-semibold">300.000</p>
                    </div>
                </div>
                <div>
                    <p class="text-[#4E6B20] text-base font-bold mt-5 max-w-[40%]">
                        Barcha qulayliklarga ega televizor, muzlatgich, krovat (2 ta), yotoqxona
                        stoli, shkaf, yumshoq mebel, vannali xammom, lavabo va xojatxona
                    </p>
                </div>
                <div class="mt-5 flex gap-5">
                    <router-link to="/Navigation"
                        class="bg-[#3D5F01] text-white font-roboto w-[175px] py-4 rounded-tl-3xl rounded-br-3xl text-center">
                        BAND QILISH
                    </router-link>
                </div>
            </div>
            <div class="video-container">
                <video class="dashed-border" width="640" height="360" controls>
                    <source :src="videoSource" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
        <div class="room-type  items-center flex justify-between w-full mt-16">
            <div class="left flex w-full flex-col">
                <div class="flex justify-between w-[80%]">
                    <div>
                        <p class="text-[#4E6B20] text-3xl font-extrabold">
                            Komfort, 2 o'rinli standard
                        </p>
                    </div>
                    <div>
                        <p class="text-[#4E6B20] text-3xl font-semibold">350.000</p>
                    </div>
                </div>
                <div>
                    <p class="text-[#4E6B20] text-base font-bold mt-5 max-w-[40%]">
                        Barcha qulayliklarga ega televizor, muzlatgich, krovat (2 ta), yotoqxona
                        stoli, shkaf, yumshoq mebel, vannali xammom, lavabo va xojatxona
                    </p>
                </div>
                <div class="mt-5 flex gap-5">
                    <router-link to="/Navigation"
                        class="bg-[#3D5F01] text-white font-roboto w-[175px] py-4 rounded-tl-3xl rounded-br-3xl text-center">
                        BAND QILISH
                    </router-link>
                </div>
            </div>
            <div class="video-container">
                <video class="dashed-border" width="640" height="360" controls>
                    <source :src="videoSource2" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
        <div class="room-type  items-center flex justify-between w-full mt-16">
            <div class="left flex w-full flex-col">
                <div class="flex justify-between w-[80%]">
                    <div>
                        <p class="text-[#4E6B20] text-3xl font-extrabold">
                            Lux , Suit 2 to'shak, 1 xonali
                        </p>
                    </div>
                    <div>
                        <p class="text-[#4E6B20] text-3xl font-semibold">400.000</p>
                    </div>
                </div>
                <div>
                    <p class="text-[#4E6B20] text-base font-bold mt-5 max-w-[40%]">
                        Barcha qulayliklarga ega televizor, muzlatgich, krovat (2 ta), yotoqxona
                        stoli, shkaf, yumshoq mebel, vannali xammom, lavabo va xojatxona
                    </p>
                </div>
                <div class="mt-5 flex gap-5">
                    <router-link to="/Navigation"
                        class="bg-[#3D5F01] text-white font-roboto w-[175px] py-4 rounded-tl-3xl rounded-br-3xl text-center">
                        BAND QILISH
                    </router-link>
                </div>
            </div>
            <div class="video-container">
                <video class="dashed-border" width="640" height="360" controls>
                    <source :src="videoSource3" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    </div>
</template>

<script>
import videoSource from "@/assets/video/rosp22hqgw7hqlvefp7b.mp4";
import videoSource2 from "@/assets/video/fg4tjryzpa50ibxc4jgg.mp4";
import videoSource3 from "@/assets/video/59tibuwdbivz34q3abnc.mp4";

export default {
    data() {
        return {
            videoSource,
            videoSource2,
            videoSource3,
        };
    },
};
</script>

<style scoped>
.dashed-border {
    border: 3px dashed #4e6b20;
}

@media (min-width: 1024px) {
    .room-type {
        flex-direction: row;
    }

    .left {
        width: 60%;
    }

    .video-container {
        width: 40%;
        margin-top: 100px;
    }
}

@media (max-width: 1023px) {
    .room-type {
        flex-direction: column;
        align-items: center;
    }

    .left,
    .video-container {
        width: 100%;
        align-items: center;
        justify-content: center;
    }

    .video-container {
        margin-top: 20px;
    }
}
</style>

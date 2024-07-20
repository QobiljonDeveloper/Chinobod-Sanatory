<template>
    <div>
        <div class="navbar w-full h-24 flex items-center justify-center px-4 md:px-10">
            <div class="container mx-auto flex items-center justify-center">
                <div class="links-container flex items-center gap-8 py-5">
                    <a href="#header" class="font-bold text-[#4E6C1D]">ASOSIY MENYU</a>
                    <a href="#about-us" class="font-bold text-[#4E6C1D]">BIZ HAQIMIZDA</a>
                    <a href="#showcase" class="font-bold text-[#4E6C1D]">SERVIS</a>
                    <a href="#rooms" class="font-bold text-[#4E6C1D]">NARXLAR</a>
                    <a href="#map" class="font-bold text-[#4E6C1D]">XARITA</a>
                    <a href="#form" class="font-bold text-[#4E6C1D]">KONTAK</a>
                </div>
                <div class="hamburger-menu md:hidden" @click="toggleMenu">&#9776;</div>
            </div>
        </div>
        <div v-if="menuOpen" class="mobile-menu flex flex-col items-center py-4">
            <a href="#header" class="font-bold text-[#4E6C1D] py-2">ASOSIY MENYU</a>
            <a href="#about-us" class="font-bold text-[#4E6C1D] py-2">BIZ HAQIMIZDA</a>
            <a href="#showcase" class="font-bold text-[#4E6C1D] py-2">SERVIS</a>
            <a href="#rooms" class="font-bold text-[#4E6C1D] py-2">NARXLAR</a>
            <a href="#map" class="font-bold text-[#4E6C1D] py-2">XARITA</a>
            <a href="#form" class="font-bold text-[#4E6C1D] py-2">KONTAK</a>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const menuOpen = ref(false);

const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
};
</script>
<style scoped>

.logo {
    display: flex;
    align-items: center;
}

.links-container {
    display: flex;
    gap: 2rem;
    /* Adjusted for better spacing */
    padding-top: 5px;
    padding-bottom: 5px;
}

.hamburger-menu {
    display: none;
    font-size: 24px;
    color: black;
    cursor: pointer;
}

.mobile-menu {
    display: none;
    flex-direction: column;
    align-items: center;
    padding: 10px;
}

@media (max-width: 768px) {
    .hamburger-menu {
        display: block;
    }

    .links-container {
        display: none;
    }

    .mobile-menu {
        display: flex;
    }

    .container {
        justify-content: space-between;
    }
}
</style>

<template>
    <div>
        <div class="bg-[#3D5F00] w-full h-24 flex items-center justify-between">
            <div class="container mx-auto flex items-center justify-between">
                <div class="relative search-container">
                    <input v-model="searchQuery" @input="handleSearch" placeholder="Search Here" type="text"
                        class="border-b-2 border-x-0 border-y-0 border-solid border-[#fafafa] bg-transparent w-[270px] py-1 outline-none px-3 text-white" />
                    <img src="../../assets/img/search.png" alt=""
                        class="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4" />
                </div>
                <div class="middle-header flex flex-col items-center">
                    <img src="../../assets/img/medicine.svg" alt="" class="w-16 h-16" />
                    <p class="text-white font-roboto">CHINABAD</p>
                </div>
                <div class="flex items-center gap-10 links-container">
                    <div class="flex gap-1">
                        <a href="https://client.chinobod-sanatory.uz/" class="text-white font-roboto">Register</a>
                        <span class="text-white">/</span>
                        <a href="https://client.chinobod-sanatory.uz/" class="text-white font-roboto">Login</a>
                    </div>
                </div>
                <div class="hamburger-menu" @click="toggleMenu">&#9776;</div>
            </div>
        </div>
        <div v-if="searchResults.length > 0" class="search-results bg-white p-4">
            <ul>
                <li v-for="result in searchResults" :key="result.id" class="border-b py-2" @click="scrollToRooms">
                    {{ result.name }}
                </li>
            </ul>
        </div>
        <div v-if="menuOpen" class="mobile-menu">
            <input v-model="searchQuery" @input="handleSearch" placeholder="Search Here" type="text"
                class="border-b-2 border-x-0 border-y-0 border-solid border-[#fafafa] bg-transparent w-full py-1 outline-none px-3 text-white" />
            <div class="mobile-menu-items flex flex-col items-center">
                <a href="https://client.chinobod-sanatory.uz/" class="text-white font-roboto py-2">Register</a>
                <a href="https://client.chinobod-sanatory.uz/" class="text-white font-roboto py-2">Login</a>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

// Mock data
const items = [
    { id: 1, name: 'Standard, 2 xona 2 krovat' },
    { id: 2, name: '300.000' },
    {
        id: 3,
        name:
            '    Barcha qulayliklarga ega televizor, muzlatgich, krovat (2 ta), yotoqxona stoli, shkaf, yumshoq mebel, vannali xammom, lavabo va xojatxona',
    },
    { id: 4, name: "Komfort, 2 o'rinli standard" },
    { id: 5, name: '350.000' },
    { id: 4, name: "Lux , Suit 2 to'shak, 1 xonali" },
    { id: 5, name: '400.000' },
];

const searchQuery = ref('');
const searchResults = ref([]);
const menuOpen = ref(false);

const handleSearch = () => {
    if (searchQuery.value) {
        searchResults.value = items.filter((item) =>
            item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
    } else {
        searchResults.value = [];
    }
};

const scrollToRooms = () => {
    const roomsSection = document.getElementById('rooms');
    if (roomsSection) {
        roomsSection.scrollIntoView({ behavior: 'smooth' });
    }
};

const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
};
</script>
<style scoped>
.search-results {
    max-height: 300px;
    overflow-y: auto;
    cursor: pointer;
}

.hamburger-menu {
    display: none;
    font-size: 24px;
    color: white;
    cursor: pointer;
}

.mobile-menu {
    display: none;
    flex-direction: column;
    align-items: center;
    background-color: #3D5F00;
    padding: 10px;
}

@media (max-width: 768px) {
    .hamburger-menu {
        display: block;
    }

    .search-container,
    .links-container {
        display: none;
    }

    .container {
        justify-content: space-between;
    }

    .mobile-menu {
        display: flex;
    }
}
</style>

<template>
    <div>
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <button @click="handleClick">{{ buttonText }}</button>
    </div>
</template>
  
<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    buttonText: {
        type: String,
        required: true
    }
})

const handleClick = () => {
    console.log('Button clicked!')
}
console.log(title , description , buttonText);
</script>
  
<style>
</style>
  
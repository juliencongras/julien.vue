<template>
    <h1 class="text-3xl font-bold mb-6 text-center">Composant gestion de l'utilisateur</h1>
</template>

<script setup lang='js'>
import { ref } from 'vue';

const parentUserData = ref({
    name: "John",
    age: 43
})

</script>
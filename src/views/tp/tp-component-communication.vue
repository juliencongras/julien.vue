<template>
    <h1 class="text-3xl font-bold mb-6 text-center">Composant gestion de l'utilisateur</h1>
    <ActiveUserTp 
    v-bind:user-name="parentUserData.name"
    v-bind:user-age="parentUserData.age" />
</template>

<script setup lang='js'>
import { ref } from 'vue';
import ActiveUserTp from '../../components/ActiveUserTp.vue';

const parentUserData = ref({
    name: "John",
    age: 43
})

</script>
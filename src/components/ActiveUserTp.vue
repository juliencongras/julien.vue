<template>
    <div class="card bg-base-100 shadow-xl rounded-box p-6">
        <div class="card-body text-center">
            <h2 class="text-2xl font-bold mb-6">Composant affichage des données utilisateur</h2>
            <p>{{ userName }}</p>
            <p>{{ userAge }} ans</p>
        </div>
    </div>
</template>

<script setup lang='js'>
import { defineProps } from 'vue'

const props = defineProps({
    userName: {
        type: String,
        required: true
    },
    userAge: {
        type: Number,
        required: true
    },
});

</script>

<style scoped lang="css">
/* Les styles sont gérés par DaisyUI et Tailwind, pas de CSS supplémentaire n'est nécessaire ici. */
</style>
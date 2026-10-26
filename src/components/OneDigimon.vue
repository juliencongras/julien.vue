<template>
    <div class="card bg-base-100 w-96 shadow-sm my-1">
        <figure>
            <img :src="digimonImage" :alt="digimonName" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">{{ digimonName }}</h2>
        </div>
    </div>
</template>

<script setup lang='js'>
import { defineProps } from 'vue'

const props = defineProps({
    digimonImage: {
        type: String,
        required: true
    },
    digimonName: {
        type: String,
        required: true
    },
});

</script>

<style scoped lang="css">
/* Les styles sont gérés par DaisyUI et Tailwind, pas de CSS supplémentaire n'est nécessaire ici. */
</style>
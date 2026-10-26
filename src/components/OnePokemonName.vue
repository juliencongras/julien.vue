<template>
    <p class="badge badge-primary badge-lg mx-1"> {{ pokemonName }} </p>
</template>

<script setup lang='js'>
import { defineProps } from 'vue'

const props = defineProps({
    pokemonName: {
        type: String,
        required: true
    }
});

</script>

<style scoped lang="css">
/* Les styles sont gérés par DaisyUI et Tailwind, pas de CSS supplémentaire n'est nécessaire ici. */
</style>
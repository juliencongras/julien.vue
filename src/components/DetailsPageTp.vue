<template>
    <h1 class="text-3xl font-bold mb-6 text-center">Détails de l'élément {{ userName }}</h1>
    <div class="card bg-base-100 shadow-xl rounded-box p-6">
        <div class="card-body">
            <h2 class="text-2xl font-bold mb-4">Identifiant (ID) : <span class="badge badge-accent">{{ userID }}</span></h2>
            <p>Ceci est une page de détail dynamique pour l'"l"ment indentifié par l'ID **{{ userID }}**</p>
            <p>(Nom : **{{ userName }}**).</p>
            <router-link class="btn btn-outline btn-accent" to="/tp/router_and_props">Retour</router-link>
        </div>
    </div>
</template>

<script setup lang='js'>
import { defineProps } from 'vue'

const props = defineProps({
    userID: {
        type: Number,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
});

</script>

<style scoped lang="css">
/* Les styles sont gérés par DaisyUI et Tailwind, pas de CSS supplémentaire n'est nécessaire ici. */
</style>
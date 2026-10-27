<template>
    <div class="flex gap-2 bg-blue-500 p-4 rounded-xl">
        <p> Ici le composant LikeButton</p>
        <button class="btn btn-success" @click="like">Like</button>
        <button class="btn btn-error" @click="unlike">Unlike</button>
    </div>
</template>

<script setup>
import {  ref } from "vue";

// Définition des événements émis par le composant
// Phase 1 on déclare les events
const emit = defineEmits(["childLiked", "childUnliked"]);
const uneData = ref('uneDonnée');
const uneAutreDonnee = ref(12);
const unObjet = ref({lol:'toto'})

// Phase 2 on émet les events
function like() {
    // On EMIT un Event Custom
    // emit("liked");
    // On EMIT un Event Custom avec des données dedans
    emit("childLiked", uneData.value, uneAutreDonnee.value,unObjet.value);
}
// Phase 2 on émet les events
function unlike() {
    emit("childUnliked");
}
</script>

<style scoped>
/* Les styles sont gérés par DaisyUI et Tailwind, pas de CSS nécessaire ici. */
</style>
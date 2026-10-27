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
// const emit = defineEmits(["childLiked", "childUnliked"]);
// Déclaration des événements émis par le composant avec des données en mode objet pour plus de controles
// Par exemple on vérifie si les données sont bien présentes avant d'émettre l'événement
const emit = defineEmits({
    "childLiked": (uneData)=>{
        if(uneData){
            return true;
        } else {
            console.warn("L'événement childLiked a été émis sans id.");
            return false;
        }
    },
    "childUnliked": (unNombre)=>{
        if(unNombre){
            return true;
        } else {
            console.warn("L'événement childUnliked a été émis sans le nombre 42.");
            return false;
        }
    },
})

const uneData = ref('uneDonnée');
const uneAutreDonnee = ref(12);
const unObjet = ref({lol:'toto'})

// Phase 2 on émet les events
function like() {
    // On EMIT un Event Custom
    // emit("childLiked");
    // On EMIT un Event Custom avec des données dedans
    emit("childLiked", uneData.value, uneAutreDonnee.value,unObjet.value);
}
// Phase 2 on émet les events
function unlike() {
    emit("childUnliked",45);
}
</script>

<style scoped>
/* Les styles sont gérés par DaisyUI et Tailwind, pas de CSS nécessaire ici. */
</style>
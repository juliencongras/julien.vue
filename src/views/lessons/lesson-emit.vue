<template>
    <div class="container mx-auto p-4 md:p-8">
        <div class="text-center mb-8">
            <h1 class="text-4xl md:text-5xl font-extrabold text-primary">Les Événements avec $emit en Vue.js</h1>
            <p class="text-lg md:text-xl text-base-content opacity-75 mt-2">
                En Vue.js, la méthode <code>$emit</code> permet à un composant enfant d'envoyer des événements
                personnalisés au composant parent.
            </p>
        </div>

        <section id="definition" class="mb-8">
            <div class="card bg-base-100 shadow-xl rounded-box p-6">
                <h2 class="card-title text-2xl font-bold mb-3">Qu'est-ce que $emit ?</h2>
                <p class="text-base-content opacity-80">
                    La méthode <strong>$emit</strong> est utilisée pour émettre un événement personnalisé depuis un
                    composant enfant. Le parent peut écouter cet événement et réagir en conséquence.
                </p>
            </div>
        </section>

        <section id="example" class="mb-8">
            <h2 class="font-bold text-2xl mb-3 text-center">Exemple avec $emit</h2>
            <p class="text-base-content opacity-80 mb-4 text-center">
                Voici un exemple où un composant enfant envoie des événements pour indiquer si un utilisateur a aimé ou
                non une publication :
            </p>
            <div
                class="flex flex-col md:flex-row items-center justify-center gap-4 p-6 bg-base-200 rounded-box shadow-md">
                <div>
                    <!-- Utilisez le composant comme ceci -->
                    <LikeButton v-on:childLiked="handleLike" v-on:childUnliked="handleUnlike" />
                </div>
                <div>
                    <p>La ref isLiked du parent :{{ isLiked }}</p>
                    <p v-if="isLiked" class="badge badge-success text-white p-4 font-bold">Merci d'avoir aimé cette
                        publication !</p>
                    <p v-else class="badge badge-error text-white p-4 font-bold">Vous avez retiré votre like.</p>
                </div>
            </div>
        </section>

        <div class="text-center mt-8">
            <p class="text-sm opacity-75">
                Pour plus d'informations, consultez la
                <a href="https://vuejs.org/guide/components/events.html" class="link link-hover link-primary"
                    target="_blank">
                    documentation officielle sur les événements personnalisés
                </a>.
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import LikeButton from '../../components/LikeButton.vue';
// Gestion des événements émis par l'enfant
const isLiked = ref<boolean>(false);

function handleLike(eventpremiereData:any, eventdeuxiemeData:any,eventObjet:any): void {
    console.log("On arrive a réagir quand ya un like");
    console.log(eventpremiereData);
    console.log(eventdeuxiemeData);
    console.log(eventObjet);
    
    isLiked.value = true;
}

function handleUnlike(event): void {
    console.log(event);
    console.log("On arrive a réagir quand ya un Dislike");
    isLiked.value = false;
}
</script>

<style scoped lang="css">
/* Les styles sont gérés par DaisyUI et Tailwind, pas de CSS nécessaire ici. */
</style>
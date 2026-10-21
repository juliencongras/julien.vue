<template>
    <div class="container mx-auto p-4">
        <div class="card shadow-lg p-6 bg-base-100">
            <h2 class="text-2xl font-bold mb-4">
                WatchList 🎬 (Films à voir + v-if+v-for) - Mode : Composition
            </h2>
            <!-- Input -->
            <input v-model="nomFilm" type="text" placeholder="Entrez le nom d'un film"
                class="input input-bordered w-full mb-3" />
            <!-- Bouton Ajouter -->
            <button @click="ajouterFilm" class="btn btn-primary mb-4">
                Ajouter à votre Liste
            </button>
            <hr class="my-4" />
            <!-- Aucun film -->
            <h2 v-if="mesFilms.length === 0" class="text-gray-500 text-lg">
                Aucun Films à Voir ?
            </h2>
            <!-- Liste de films -->
            <ul v-else class="flex flex-col space-y-2">
                <li v-for="(unFilm, index) in mesFilms" :key="index" @click="supprimerFilm(index)"
                    class="badge badge-outline cursor-pointer hover:bg-primary hover:text-white transition-colors">
                    {{ index  }} - {{ unFilm }} - 🗑️ 
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="js">
import { ref } from 'vue'

const nomFilm = ref('')
const mesFilms = ref([])

function ajouterFilm() {
    // Vérifier si le film est vide avant d'ajouter
    // Si le nom du film sans espace est vide alors return on sort de la fonction
    if (nomFilm.value.trim() === '') return
    mesFilms.value.push(nomFilm.value)
    // UX UI quand on ajoute un film on vide le champ input
    nomFilm.value = ''
}

function supprimerFilm(leIndex) {
    mesFilms.value.splice(leIndex, 1)
}
</script>

<style scoped lang="css">
/* Rien de spécial, DaisyUI gère tout */
</style>
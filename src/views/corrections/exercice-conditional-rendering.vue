<template>
    <div class="container mx-auto p-4 md:p-8">
        <div class="card bg-base-100 shadow-xl rounded-box p-6">
            <h2 class="text-2xl font-bold text-center mb-4">🎬 WatchList (Films à voir)</h2>
            <div class="form-control mb-4">
                <label class="label">
                    <span class="label-text">Nom du film :</span>
                </label>
                <input v-model="nomFilm" type="text" placeholder="Entrez un nom de film"
                    class="input input-bordered w-full" />
            </div>
            <button @click="ajouterFilm" class="btn btn-primary mt-3">
                Ajouter à votre Liste
            </button>
            <div class="divider my-6"></div>
            <div class="text-center">
                <h3 v-if="mesFilms.length" class="text-xl font-bold mb-2">Votre Film : {{ mesFilms }}</h3>
                <p v-else class="text-lg text-base-content opacity-75">
                    Pas encore de films dans votre liste ? Veuillez en ajouter un.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang='js'>
import { ref } from 'vue'
const nomFilm = ref('')
const mesFilms = ref([])

function ajouterFilm() {
    mesFilms.value.push(nomFilm.value)
}
</script>

<style scoped lang="css"></style>
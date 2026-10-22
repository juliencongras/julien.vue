<template>
    <div class="container mx-auto p-6">
        <div class="card bg-base-100 shadow-xl rounded-box">
            <div class="card-body">
                <h5 class="text-2xl font-bold text-center">WatchList (Films à voir)</h5>
                <p>Nom du film :</p>
                <input type="text" placeholder="Entrez un nom de film" class="input" v-model="addedFilm" />
                <button class="btn btn-primary" @click="addFilm">Ajouter à votre liste</button>
                <div class="divider"></div>
                <p class="text-center" v-if="mesFilms.length == 0">Pas encore de films dans votre liste ? Veuillez en ajouter un.</p>
                <div class="badge badge-neutral badge-outline" v-else v-for="(film, index) in mesFilms":key="index" @click="removeFilm(index)">
                    {{ index + 1 }} - {{ film }} - &#128465;
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const mesFilms = ref([]);
    const addedFilm = ref("");

    function addFilm(){
        mesFilms.value.push(addedFilm.value);
    }

    function removeFilm(filmIndex){
        mesFilms.value.splice(filmIndex, 1);
    }
</script>
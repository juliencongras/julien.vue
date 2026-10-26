<template>
    <div class="flex justify-center my-8">
        <div class="card w-full max-w-xl bg-base-200 shadow-xl p-6">
            <h1 class="text-3xl font-bold text-primary mb-6 text-center">
                Une simple requête HTTP GET
            </h1>

            <!-- Pokémons -->
            <h2 class="text-xl font-semibold text-secondary mb-4">Les Pokémon :</h2>
            <div class="space-y-2">
                <p v-for="(onePokemon, index) in pokeArray" :key="index" class="badge badge-primary badge-lg mx-1">
                    {{ onePokemon.name }}
                </p>
            </div>

            <div class="divider my-6"></div>

            <!-- Météo -->
            <h2 class="text-xl font-semibold text-secondary mb-4">Météo Toulouse :</h2>
            <div class="grid gap-2">
                <p class="p-2 rounded bg-base-100 shadow-sm">
                    🌡️ Température max : <span class="font-bold">{{ tmax }}°C</span>
                </p>
                <p class="p-2 rounded bg-base-100 shadow-sm">
                    🌡️ Température min : <span class="font-bold">{{ tmin }}°C</span>
                </p>
                <p class="p-2 rounded bg-base-100 shadow-sm">
                    🌡️ Température actuelle : <span class="font-bold">{{ tcurrent }}°C</span>
                </p>
                <p class="p-2 rounded bg-base-100 shadow-sm">
                    ☁️ Condition météo : <span class="font-bold">{{ condition }}</span>
                </p>
            </div>
            <div class="divider my-6"></div>
            <h2 class="text-xl font-semibold text-secondary mb-4">Digimons :</h2>

            <div v-for="(oneDigimon, index) in digimonArray" :key="oneDigimon.id" class="card bg-base-100 w-96 shadow-sm my-1">
                <figure>
                    <img :src="oneDigimon.image" :alt="Shoes" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">{{ oneDigimon.name }}</h2>
                    <!-- <p>{{ oneDigimon.category }}</p> -->
                </div>
            </div>

            <div class="divider my-6"></div>
            <h2 class="text-xl font-semibold text-secondary mb-4">Pokemon Gen 9 </h2>
            <div v-if="pokeArrayGen9.length > 0" v-for="(item, index) in pokeArrayGen9" :key="item.pokedex_id" class="card bg-base-100 w-96 shadow-sm my-1">
                <figure>
                    <img :src="item.sprites.regular" alt="Shoes" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">{{ item.name.fr }}</h2>
                    <p>{{ item.category }}</p>
                </div>
            </div>
            <div v-else>
                <p>Aucun Pokémon trouvé</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const pokeArray = ref([])
const pokeArrayGen9 = ref([])
const digimonArray = ref([])
const tmax = ref(null)
const tmin = ref(null)
const tcurrent = ref(null)
const condition = ref(null)

const fetchPokemon = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
        console.log("response pokemon :",response);
        const data = await response.json();
        console.log("data pokemon :",data);
        pokeArray.value = data.results;
    } catch (error) {
        console.error('Erreur lors de la récupération des Pokémon :', error)
    }
}
const fetchMeteo = async () => {
    try {
        const response = await fetch('https://prevision-meteo.ch/services/json/toulouse');
        const data = await response.json();
        console.log("Data météo :",data);
        tmax.value = data.fcst_day_0.tmax
        tmin.value = data.fcst_day_0.tmin
        tcurrent.value = data.current_condition.tmp
        condition.value = data.current_condition.condition
    } catch (error) {
        console.error('Erreur lors de la récupération de la météo :', error)
    }
}


const fetchPokemonGen9 = async () => {
    try {
        const response = await fetch('https://tyradex.vercel.app/api/v1/gen/9')
        const data = await response.json()
        console.log(data)
        pokeArrayGen9.value = data
    } catch (error) {
        console.error('Erreur lors de la récupération des Pokémon :', error)
    }
}

const fetchDigimon = async () => {
    try {
        const response = await fetch('https://digi-api.com/api/v1/digimon')
        const data = await response.json();
        console.log("data digimon :",data);
        console.log("data digimon content:",data.content);
        digimonArray.value = data.content;
    } catch (error) {
        console.error('Erreur lors de la récupération des Pokémon :', error)
    }
}

onMounted(() => {
    fetchPokemonGen9()
    fetchDigimon()
    fetchMeteo()
    fetchPokemon()
})

onBeforeUnmount(() => {
    console.log("Le composant va être démonté (changement de page ?)")
})
</script>

<style scoped>
/* Styles custom si besoin */
</style>
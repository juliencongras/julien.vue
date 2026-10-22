<template>
    <div class="flex justify-center my-8">
        <div class="card w-full max-w-3xl bg-base-200 shadow-xl p-6">
            <h1 class="text-3xl font-bold text-primary mb-6 text-center">Une simple requête HTTP Get</h1>
            <h2 class="text-xl font-semibold text-secondary mb-4">Les Pokémon :</h2>
            <ul>
                <li class="badge badge-primary" v-for="(onePokemon, index) in fetchedPokemon":key="index">{{ onePokemon.name }}</li>
            </ul>

            <div class="divider my-6"></div>
        
            <h2 class="text-xl font-semibold text-secondary mb-4">Météo Toulouse :</h2>
            <div class="bg-base-100 p-4 rounded shadow">
                <p>Température max : {{ fetchedMeteo.daily.temperature_2m_max[0] }}</p>
            </div>
            <div class="bg-base-100 p-4 rounded shadow">
                <p>Température min : {{ fetchedMeteo.daily.temperature_2m_min[0] }}</p>
            </div>
            <div class="bg-base-100 p-4 rounded shadow">
                <p>Température actuelle : {{ fetchedMeteo.current.temperature_2m }}</p>
            </div>
            <div class="bg-base-100 p-4 rounded shadow">
                <p>Condition météo : ¯\_(ツ)_/¯</p>
            </div>

            <div class="divider my-6"></div>

            <h2 class="text-xl font-semibold text-secondary mb-4">Carte Yu-Gi-Oh aléatoire :</h2>
            <h2 class="text-xl font-semibold text-secondary mb-4 text-center">{{ fetchedYugioh.name }}</h2>
            <img :alt="fetchedYugioh.name" :src="fetchedYugioh.card_images[0].image_url">
            <button class="btn btn-neutral" @click="yugiohFetch">Piocher une carte aléatoire</button>

        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';

    const fetchedPokemon = ref([]);
    const fetchedMeteo = ref({daily: {temperature_2m_max: [], temperature_2m_min: []}, current: {temperature_2m: 0}});
    const fetchedYugioh = ref({name: "Loading card...", card_images: [{image_url: ""}]});

    const pokemonFetch = async () => {
        try {
            const linkApi = await fetch("https://pokeapi.co/api/v2/pokemon");
            
            if(!linkApi.ok){
                fetchedPokemon.value = "There was an error contacting the API."
            }

            const apiData = await linkApi.json();
            fetchedPokemon.value = apiData.results;
        } catch (error) {
            fetchedPokemon.value = "An error has occured";
            console.log("An error has occured: ", error);
        }
    };

    const meteoFetch = async () => {
        try {
            const linkApi = await fetch("https://api.open-meteo.com/v1/forecast?latitude=43.6043&longitude=1.4437&daily=temperature_2m_max,temperature_2m_min&current=temperature_2m,apparent_temperature&hourly=");

            if(!linkApi.ok){
                fetchedMeteo.value = "There was an error contacting the API."
            }

            const apiData = await linkApi.json();
            console.log(apiData);
            

            fetchedMeteo.value = apiData;
        } catch (error) {
            fetchedMeteo.value = "An error has occured";
            console.log("An error has occured: ", error);
        }
    };

    const yugiohFetch = async () => {
        try {
            const linkApi = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php");
            
            if(!linkApi.ok){
                fetchedPokemon.value = "There was an error contacting the API."
            }

            const apiData = await linkApi.json();
            const totalCardNumber = Object.keys(apiData.data).length;
            const chosenCard = Math.floor(Math.random() * totalCardNumber);
            fetchedYugioh.value = apiData.data[chosenCard];
            console.log(totalCardNumber, apiData.data[chosenCard]);
        } catch (error) {
            console.log("An error has occured: ", error);
        }
    };

    onMounted(() => {
        pokemonFetch();
        meteoFetch();
        yugiohFetch();
    });
</script>
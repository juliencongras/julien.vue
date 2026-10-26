<template>
    <h1 class="text-3xl font-bold mb-6 text-center">EXO PROPS (ici c'est le parent)</h1>
    <OneFriend v-for="(oneData, index) in dataFromParent" :key="index"
                    v-bind:friendID="oneData.friendID" 
                    v-bind:friendName="oneData.friendName"
                    v-bind:friendPhone="oneData.friendPhone"
                    v-bind:friendEmail="oneData.friendEmail"
                    v-bind:friendPremium="oneData.friendPremium" />

    <div class="divider my-6"></div>

    <h2 class="text-xl font-semibold text-secondary mb-4">Les Pokémon :</h2>
    <div class="space-y-2">
        <OnePokemonName v-for="(onePokemon, index) in pokeArray" :key="index"
            v-bind:pokemonName="onePokemon.name" />
    </div>

    <div class="divider my-6"></div>

    <h2 class="text-xl font-semibold text-secondary mb-4">Digimons :</h2>
    <OneDigimon v-for="(oneDigimon, index) in digimonArray" :key="index"
            v-bind:digimonName="oneDigimon.name"
            :digimonImage="oneDigimon.image" />
</template>

<script setup lang='js'>
import OneFriend from '../../components/OneFriend.vue';
import OnePokemonName from '../../components/OnePokemonName.vue';
import OneDigimon from '../../components/OneDigimon.vue';
import { ref, onMounted } from 'vue';

const pokeArray = ref([]);
const digimonArray = ref([]);

const dataFromParent = [
    {
        friendID: "lasticot",
        friendName: "Coco l'asticot - un ami en plomb",
        friendPhone: "01234 5678 991",
        friendEmail: "coco@lasticot.com",
        friendPremium: "Standard"
    },
    {
        friendID: "lasticot2",
        friendName: "Coco l'asticot - un ami en Or",
        friendPhone: "01234 5678 992",
        friendEmail: "coco@lasticot.fr",
        friendPremium: "Premium"
    },
    {
        friendID: "kimonoSurUnFrigo",
        friendName: "Steven Seagal - un ami en Or",
        friendPhone: "+338765477",
        friendEmail: "steven@seagal.com",
        friendPremium: "Premium"
    },
    {
        friendID: "yoyoyo",
        friendName: "JAROD - un ami en Or",
        friendPhone: "+338765477",
        friendEmail: "JAROD@seagal.com",
        friendPremium: "Premium"
    },
    {
        friendID: "yoyoyo",
        friendName: "JAROD - un ami en Or",
        friendPhone: "+338765477",
        friendEmail: "JAROD@seagal.com",
        friendPremium: "Premium"
    },
    {
        friendID: "ok",
        friendName: "JAROD - un ami en Or",
        friendPhone: "+338765477",
        friendEmail: "JAROD@seagal.com",
        friendPremium: "Premium"
    },
    {
        friendID: "GUS",
        friendName: "GussDX - un ami en Or",
        friendPhone: "+338765477",
        friendEmail: "JAROD@seagal.com",
        friendPremium: "Premium"
    },
];

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
    fetchPokemon();
    fetchDigimon();
})
</script>
<template>
    <div class="flex justify-center my-8">
        <div class="card w-full max-w-3xl bg-base-100 shadow-xl p-6">
            <h1 class="text-3xl font-bold text-primary mb-6 text-center">TP : Jeu tour par tour</h1>
            <p>{{ fetchedPokemon[0].name }}</p>
            <progress class="progress progress-success w-56" :value="vieAdversaire" max="100"></progress>
            <img class="w-50" :src="fetchedPokemon[0].sprites.front_default" :alt="fetchedPokemon[0].name">
            <p>{{ fetchedPokemon[1].name }}</p>
            <progress class="progress progress-success w-56" :value="viePlayer" max="100"></progress>
            <img class="w-50" :src="fetchedPokemon[1].sprites.front_default" :alt="fetchedPokemon[1].name">

            <button class="btn btn-accent" @click="attackAdversaire()">Attaque</button>
            <button class="btn btn-info" @click="specialAttackAdversaire()">Attaque spéciale</button>
            <button class="btn btn-success" @click="soinPlayer()">Soin</button>
            <button class="btn btn-error" @click="abandonner()">Abandonner</button>

            <p class="text-center">Battle log :</p>
            <li class="overflow-y-auto max-h-60">
                <ul v-for="(action, index) in battleLog":key="index">{{ action }}</ul>
            </li>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';

    const viePlayer = ref(100);
    const vieAdversaire = ref(100);
    const currentRound = ref(0);
    const winner = ref();
    const battleLog = ref([]);

    const playerBaseAttackValue = ref(10);
    const playerSpecialAttackValue = ref(30);
    const playerHealingValue = ref(30);
    const adversaireBaseAttaclValue = ref(15);

    const fetchedPokemon = ref([{name: "", sprites: {front_default: ""}},{name: "", sprites: {front_default: ""}}]);
    
    function attackAdversaire(){
        const playerAttackRandomAdjustment = playerBaseAttackValue.value + Math.floor(Math.random() * 5);
        vieAdversaire.value -= playerAttackRandomAdjustment;
        battleLog.value.push(`Player Ataque : ${playerAttackRandomAdjustment} pts`);
        attackPlayer();
        currentRound.value ++;
    }

    function specialAttackAdversaire(){
        const playerSpecialAttackRandomAdjustment = playerSpecialAttackValue.value + Math.floor(Math.random() * 5);
        vieAdversaire.value -= playerSpecialAttackRandomAdjustment;
        battleLog.value.push(`Player lance une Attaque Spéciale ! : -${playerSpecialAttackRandomAdjustment} pts`)
        attackPlayer();
        currentRound.value ++;
    }

    function attackPlayer(){
        const adversaireAttackRandomAdjustment = adversaireBaseAttaclValue.value + Math.floor(Math.random() * 5);
        viePlayer.value -= adversaireAttackRandomAdjustment;
        battleLog.value.push(`Monstre Ataque : -${adversaireAttackRandomAdjustment} pts`)
    }

    function soinPlayer(){
        viePlayer.value += playerHealingValue.value;
        if(viePlayer.value > 100){
            viePlayer.value = 100;
        }
        battleLog.value.push(`Player se soigne : ${playerHealingValue.value} pts`);
        attackPlayer();
        currentRound.value ++;
    }

    function abandonner(){

    }

    const pokemonFetch = async () => {
        try {
            const linkApi = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
            
            if(!linkApi.ok){
                fetchedPokemon.value = "There was an error contacting the API."
            }

            const apiData = await linkApi.json();
            const totalPokemon = apiData.count - 1;
            const randomPokemonPlayer = Math.floor(Math.random() * totalPokemon);
            const randomPokemonAdversaire = Math.floor(Math.random() * totalPokemon);
            
            const allPokemon = apiData.results;

            const playerApi = await fetch(allPokemon[randomPokemonPlayer].url);
            const playerApiData = await playerApi.json();

            const adversaireApi = await fetch(allPokemon[randomPokemonAdversaire].url);
            const adversaireApiData = await adversaireApi.json();
            
            fetchedPokemon.value = [playerApiData, adversaireApiData];
            
        } catch (error) {
            fetchedPokemon.value = "An error has occured";
            console.log("An error has occured: ", error);
        }
    };

    onMounted(() => {
        pokemonFetch();
    });
</script>
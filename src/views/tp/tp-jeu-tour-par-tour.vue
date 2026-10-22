<template>
    <div class="flex justify-center my-8">
        <div class="card w-full max-w-3xl bg-base-100 shadow-xl p-6">
            <h1 class="text-3xl font-bold text-primary mb-6 text-center">TP : Jeu tour par tour</h1>
            <img src="" alt="">
            <img src="" alt="">
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

    const fetchedPokemon = ref([1,2]);
    
    function attackAdversaire(){
        const playerAttackRandomAdjustment = playerBaseAttackValue + Math.floor(Math.random() * 5);
        vieAdversaire.value -= playerAttackRandomAdjustment;
        battleLog.value.push(`Player Ataque : ${playerAttackRandomAdjustment} pts`);
        attackPlayer();
        currentRound.value ++;
    }

    function specialAttackAdversaire(){
        const playerSpecialAttackRandomAdjustment = playerSpecialAttackValue + Math.floor(Math.random() * 5);
        vieAdversaire.value -= playerSpecialAttackRandomAdjustment;
        battleLog.value.push(`Player lance une Attaque Spécial ! : -${playerSpecialAttackRandomAdjustment} pts`)
        attackPlayer();
        currentRound.value ++;
    }

    function attackPlayer(){
        const adversaireAttackRandomAdjustment = adversaireBaseAttaclValue + Math.floor(Math.random() * 5);
        viePlayer.value -= adversaireAttackRandomAdjustment;
        battleLog.value.push(`Monstre Ataque : -${adversaireAttackRandomAdjustment} pts`)
    }

    function soinPlayer(){
        viePlayer.value += playerHealingValue;
        if(viePlayer.value > 100){
            viePlayer.value = 100;
        }
        battleLog.value.push(`Player se soigne : ${playerHealingValue} pts`);
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
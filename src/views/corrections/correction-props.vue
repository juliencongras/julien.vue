<template>
    <h1 class="text-2xl font-bold text-center">EXO PROPS (Ici c'est le parent (Exercice-props.vue))</h1>
    <!-- <ul class="list-disc list-inside">
        <li>Dans le composant parent on aura le tableau des copains</li>
        <li>On va utiliser une seule fois le commposant oneFriend mais on va automatiser la répétition avec le v-for</li>
        <li>Sur le composant OneFriend on va faire des v-bind de de chaque props pour leur associer les propriété des objet(du tableau lesAmis) parcouru</li>
    </ul> -->
	<!-- Le tableau est dans le parent  -->
	 <!-- <h2 class="mt-5 text-lg font-bold text-center">Le tableau des copains :</h2> -->
	 <!-- <h2 class="text-lg font-bold text-center">{{ lesAmis }}</h2> -->
	<OneFriendCorrection 
	v-for="ami in lesAmis"
	:key="ami.id"
	v-bind:unAmiId="ami.id"
	:unAmiName="ami.name"
	:unAmiPhone="ami.phone"
	:unAmiMail="ami.email"
	:unAmiPremium="ami.premium"
	></OneFriendCorrection>

	<OnePokemonName v-for="item in pokeArrayGen9"
	:key="item.pokedex_id"
	:pokemonId="item.pokedex_id"
	:pokemonName="item.name.fr"
	:pokemonImage="item.sprites.regular"
	></OnePokemonName>
</template>

<script setup lang="js">
import { ref, onMounted } from 'vue'
import OneFriendCorrection from '../../components/OneFriendCorrection.vue';
import OnePokemonName from '../../components/OnePokemonName.vue';


const lesAmis = ref([
	{
		id: 'lasticot',
		name: 'COCO L ASTICOT',
		phone: '01234 5678 991',
		email: 'coco@lasticot.com',
		premium: false
	},
	{
		id: 'lasticot2',
		name: 'COCO L ASTICOT',
		phone: '01234 5678 991',
		email: 'coco@lasticot.com',
		premium: true
	},
	{
		id: 'kimonoSurUnFrigo',
		name: "Steven Seagal",
		phone: '+338765477',
		email: 'steven@seagal.com',
		premium: true
	},
	{
		id: 'yoyoyo',
		name: "JAROD",
		phone: '+338765477',
		email: 'jAROD@seagal.com',
		premium: true
	},
	{
		id: 'yoyoyo',
		name: "JAROD",
		phone: '+338765477',
		email: 'jAROD@seagal.com',
		premium: true
	},
	{
		id: 'ok',
		name: "JAROD",
		phone: '+338765477',
		email: 'jAROD@seagal.com',
		premium: true
	},
	{
		id: 'GUS',
		name: "GussDX",
		phone: '+338765477',
		email: 'jAROD@seagal.com',
		premium: true
	}
]);

const pokeArrayGen9 = ref([])

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

onMounted(() => {
    fetchPokemonGen9()
})


</script>

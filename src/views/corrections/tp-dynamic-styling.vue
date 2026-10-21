<template>
    <div class="container mx-auto p-4 md:p-8 bg-base-200 rounded-box shadow-xl">
        <div class="text-center mb-8">
            <h1 class="text-4xl md:text-5xl font-bold text-primary">TP:Dynamic Styling</h1>
        </div>

        <div class="card bg-base-100 shadow-xl rounded-box p-6">
            <div class="card-body">
                <h2 class="card-title text-2xl font-bold mb-4">Classes Dynamiques</h2>
                <div class="form-control mb-4">
                    <label class="label">
                        <span class="label-text">Entrez 'hello' ou 'world' :</span>
                    </label>
                    <input v-model="nomClasse" type="text" placeholder="Tapez ici..."
                        class="input input-bordered w-full" />
                </div>
                    <h2 :class="classDynamique" class="text-xl font-bold transition-all duration-300">
                        Hello World (classe dynamique)
                    </h2>
            </div>
        </div>

        <div class="divider"></div>

        <div class="card bg-base-100 shadow-xl rounded-box p-6 mt-6">
            <div class="card-body">
                <h2 class="card-title text-2xl font-bold mb-4">Styles Dynamiques</h2>
                <div class="form-control mb-4">
                    <label class="label">
                        <span class="label-text">Entrez une couleur (ex: 'red', '#ff5733') :</span>
                    </label>
                    <input v-model="laCouleur" type="text" placeholder="Tapez ici..."
                        class="input input-bordered w-full" />
                </div>
                <h2 :style="{ backgroundColor: laCouleur }" class="p-4 rounded-box transition-all duration-300">
                    Hello World (couleur dynamique)
                </h2>
            </div>
        </div>

        <div class="divider"></div>

        <div class="card bg-base-100 shadow-xl rounded-box p-6 mt-6">
            <div class="card-body text-center">
                <h2 class="card-title text-2xl font-bold mb-4 mx-auto">Visibilité</h2>
                <button @click="affichage" class="btn btn-primary transition-transform duration-200 hover:scale-105">
                    Afficher/Cacher le Titre
                </button>
                <div v-bind:style="{ display: visible===true ? 'block' : 'none' }" class="mt-4">
                <!-- <div v-show="visible" class="mt-4"> -->
                    <h2 class="text-xl font-bold">Premier Titre</h2>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang='js'>
import { ref, computed } from 'vue';

// Variables réactives
const nomClasse = ref('');
const laCouleur = ref('');
const visible = ref(true);

// Méthode
function affichage() {
    visible.value = !visible.value;
}
// Propriété calculée
// const classDynamique = computed(() => ({
//     'maClasseHello': nomClasse.value === 'hello',
//     'maClasseWorld': nomClasse.value === 'world',
// }));

const classDynamique = computed(() => {
    // 1. On récupère la valeur brute de la ref pour plus de clarté
    const valeurActuelle = nomClasse.value;

    // 2. On applique une structure conditionnelle classique
    if (valeurActuelle === 'hello') {
        return 'maClasseHello'; // Retourne la première classe
    } 
    
    if (valeurActuelle === 'world') {
        return 'maClasseWorld'; // Retourne la deuxième classe
    }

    // 3. Cas par défaut : si ça ne coche aucune case, on ne met rien
    return '';
});

</script>

<style scoped lang="css">
.maClasseHello{
    background-color: red;
    color: white;
}
.maClasseWorld{
    background-color: blue;
    color: white;
}
/* Les styles sont gérés par DaisyUI et Tailwind, pas de CSS supplémentaire n'est nécessaire ici. */
</style>
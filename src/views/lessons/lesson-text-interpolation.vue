<template>
<div class="container mx-auto p-4 md:p-8">
    <div class="text-center mb-8 md:mb-12">
    <h1 class="text-4xl md:text-5xl font-extrabold text-primary">
        L'interpolation de texte dans Vue.js
    </h1>
    <p class="text-lg md:text-xl text-base-content opacity-75 mt-2 max-w-2xl mx-auto">
        L'interpolation permet d'insérer dynamiquement des valeurs JavaScript dans le DOM.
    </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
    <!-- Section pour les exemples de base -->
    <div class="card bg-base-100 shadow-xl rounded-box">
        <div class="card-body">
        <h2 class="card-title text-2xl font-bold mb-4">Exemples de base {{ variableClassic }}</h2>
        <div class="prose max-w-none">
            <p>Message de bienvenue : <span class="badge badge-info text-info-content">{{ message }}</span></p>
            <p>Donnée classique : <span class="badge badge-secondary text-secondary-content">{{ variableClassic }}</span></p>
            <p>Tableau : <span class="badge badge-accent text-accent-content">{{ tableauAdmin }}</span></p>
        </div>
        </div>
    </div>

    <!-- Section pour les expressions et fonctions -->
    <div class="card bg-base-100 shadow-xl rounded-box">
        <div class="card-body">
        <h2 class="card-title text-2xl font-bold mb-4">Expressions et appels de fonctions</h2>
        <div class="prose max-w-none">
            <p>
            Opération simple : <span class="badge badge-ghost text-base-content">2 + 2 = {{ 2 + 2 }}</span>
            </p>
            <p>
            Nom complet : <span class="badge badge-ghost text-base-content">{{ firstName + ' ' + lastName }}</span>
            </p>
            <p>
            Message en majuscules : <span class="badge badge-ghost text-base-content">{{ toUpperCase(message) }}</span>
            </p>
        </div>
        </div>
    </div>
    </div>

    <div class="text-center mt-8">
    <p class="text-sm md:text-base text-base-content opacity-50">
        Pour plus d'informations, consultez la
        <a href="https://vuejs.org/guide/essentials/template-syntax.html" class="link link-hover text-primary font-bold">documentation officielle sur la syntaxe des templates</a>.
    </p>
    </div>
</div>
</template>

<script setup lang="js">
// Pas besoin d'importer 'ref' grâce à l'auto-import de Nuxt 3 et 4
import { ref } from 'vue';
const variableClassic = 'STEVEN VANDAMME';
// Propriétés réactives
const message = ref('Bonjour, Vue.js !');
console.log(message);
console.log(message.value);

const firstName = ref('JigZo');
const lastName = ref('Dupont');
const tableauAdmin = ref([111, 'stringg']);

// Fonctions
const toUpperCase = (str) => {
    return str.toUpperCase();
};
</script>

<style scoped>
/* Les styles sont gérés par DaisyUI et Tailwind, donc pas de CSS nécessaire ici. */
</style>

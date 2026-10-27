<template>
    <div class="container mx-auto p-4 md:p-8">

        <header class="hero bg-base-200 rounded-box shadow-lg mb-8">
            <div class="hero-content text-center">
                <div class="max-w-4xl py-8">
                    <h1 class="text-5xl font-extrabold text-primary mb-3">Introduction à Vue Router</h1>
                    <p class="text-xl opacity-80">
                        Découvrez comment utiliser Vue Router pour créer des applications à plusieurs pages avec Vue.js.
                    </p>
                </div>
            </div>
        </header>

        <section class="mb-10">
            <h2 class="text-3xl font-bold mb-5 border-b-2 pb-2">Concepts clés</h2>

            <div class="flex flex-col md:flex-row gap-4">
                <div class="alert alert-info shadow-lg flex-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        class="stroke-current shrink-0 w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                        <h3 class="font-bold">Router Link</h3>
                        <div class="text-sm">Un composant pour créer des **liens de navigation** de manière déclarative.
                        </div>
                    </div>
                </div>

                <div class="alert alert-info shadow-lg flex-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        class="stroke-current shrink-0 w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                        <h3 class="font-bold">Router View</h3>
                        <div class="text-sm">Un composant qui **rend le contenu** en fonction de la route actuelle.
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="mb-10">
            <h2 class="text-3xl font-bold mb-5 border-b-2 pb-2">Exemple de base</h2>
            <p class="mb-6 opacity-90">
                Voici un exemple simple avec deux pages : <strong>Accueil</strong> et <strong>À propos</strong>.
                Utilisez les liens ci-dessous pour naviguer.
            </p>

            <nav class="flex gap-4 mb-6">
                <router-link to="/" class="btn btn-primary">Accueil</router-link>
                <router-link to="/about" class="btn btn-secondary">À propos</router-link>
            </nav>

            <div class="bg-base-300 p-6 rounded-box shadow-inner">
                <router-view />
            </div>
        </section>

        <section class="mb-8">
            <p class="text-center text-xl mb-4 font-semibold">
                Exemple de route dynamique (avec paramètres en props) :
            </p>

            <ul class="menu bg-base-100 w-full p-2 rounded-box shadow-md">
                <li v-for="item in items" :key="item.id" class="my-1 border-b border-base-200 last:border-b-0">
                    <div class="flex justify-between items-center px-4 py-2 hover:bg-base-200">
                        <span class="font-medium text-lg">{{ item.name }}</span>

                        <router-link :to="{ name: 'Details', params: { id: item.id, itemName: item.name } }"
                            class="btn btn-sm btn-outline btn-info" role="button">
                            Voir les détails
                        </router-link>
                    </div>
                </li>
            </ul>
        </section>

        <div class="text-center mt-8 p-4 bg-base-300 rounded-box">
            <p class="text-lg">
                Pour en savoir plus, consultez la
                <a href="https://router.vuejs.org/" class="link link-hover link-primary font-bold">documentation
                    officielle de Vue Router</a>.
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';


const items = ref([
    { id: 1, name: 'Steven-Vandamme' },
    { id: 2, name: 'Jean-Luc Godard' },
    { id: 3, name: 'BicVeleda' },
    { id: 44, name: 'Savage Henry' },
]);
</script>

<style scoped>
/* Les styles personnalisés ne sont plus nécessaires grâce aux classes DaisyUI/Tailwind */
/* L'utilisation de 'text-5xl', 'font-extrabold', 'text-3xl', 'text-xl' remplace les anciennes classes Bootstrap/CSS */
</style>
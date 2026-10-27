<template>
    <div class="mx-auto max-w-2xl p-4 md:p-8">

        <h1 class="text-3xl font-bold text-center mb-6">
            Détails de l'Élément <span class="text-primary">{{ itemName }}</span>
        </h1>

        <div class="card bg-base-100 shadow-xl border border-base-200">
            <div class="card-body">

                <h5 class="card-title text-xl font-semibold mb-3">
                    Identifiant (ID) :
                    <div class="badge badge-lg badge-accent ml-2">{{ id }}</div>
                </h5>

                <p class="mb-6 text-base opacity-80">
                    Ceci est une page de détail dynamique pour l'élément identifié par l'ID **{{ id }}** (Nom : **{{
                    itemName }}**).
                </p>

                <div class="card-actions justify-start">
                    <router-link to="/lessons/router" class="btn btn-outline btn-info" role="button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                        </svg>
                        Retour à la leçon Router
                    </router-link>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'; // Importation si nécessaire
// Déclaration des props récupérées depuis la route (méthode standard de Vue Router)
const props = defineProps(['id', 'itemName']);
</script>
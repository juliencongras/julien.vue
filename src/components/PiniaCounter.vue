<template>
    <div class="container mt-5 text-center">
        <h1 class="display-4 text-primary">Compteur avec Pinia</h1>
        <p class="fs-5">Gérez un compteur avec l'état global fourni par Pinia.</p>

        <!-- Affichage du compteur -->
        <div class="my-4">
            <h2 class="text-success">{{ counterStoreInComponent.count }}</h2>
        </div>

        <!-- Boutons d'action -->
         <!-- Penser à rajouter v-on + button pour les fonction incrementBy et decrementBy -->
        <div class="btn-group">
            <button class="btn btn-primary" @click="counterStoreInComponent.increment">Incrémenter</button>
            <button class="btn btn-danger" @click="counterStoreInComponent.decrement">Décrémenter</button>
            <button class="btn btn-secondary" @click="counterStoreInComponent.reset">Réinitialiser</button>
        </div>
    </div>
</template>

<script setup lang="js">
import { useCounterStore } from '../stores/counter';
const counterStoreInComponent = useCounterStore();
</script>
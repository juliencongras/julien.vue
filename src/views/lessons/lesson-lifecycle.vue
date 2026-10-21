<template>
    <div class="flex justify-center my-8">
        <div class="card w-full max-w-3xl bg-base-200 shadow-xl p-6">
            <h1 class="text-3xl font-bold text-primary mb-6 text-center">
                📚 Comprendre le cycle de vie des composants Vue
            </h1>

            <!-- Explication générale -->
            <div class="alert alert-info mb-6">
                <span>
                    Dans Vue, chaque composant a un <strong>cycle de vie</strong> : il naît, il vit, puis il est
                    détruit.
                    Comprendre ce cycle est essentiel pour savoir où placer son code.
                </span>
            </div>

            <!-- Liste des étapes -->
            <h2 class="text-xl font-semibold text-secondary mb-4">
                🔄 Principales étapes du cycle de vie :
            </h2>
            <ul class="steps steps-vertical lg:steps-horizontal">
                <li class="step step-primary">Création (setup / beforeCreate / created)</li>
                <li class="step step-primary">Montage (onMounted)</li>
                <li class="step">Mise à jour (onUpdated)</li>
                <li class="step">Démontage (onBeforeUnmount / onUnmounted)</li>
            </ul>

            <div class="divider my-6"></div>

            <!-- Exemple live -->
            <h2 class="text-xl font-semibold text-secondary mb-4">
                ⚡ Exemple interactif
            </h2>
            <p class="mb-4">
                Ci-dessous, un exemple pratique où l’on observe les logs dans la console pendant
                les différentes étapes du cycle de vie.
            </p>

            <div class="bg-base-100 p-4 rounded shadow">
                <p class="mb-2">
                    <span class="font-bold">Compteur :</span> {{ counter }}
                </p>
                <button class="btn btn-primary btn-sm" @click="counter++">
                    ➕ Incrémenter
                </button>
                <button class="btn btn-error btn-sm ml-2" @click="destroyComponent">
                    ❌ Détruire le composant
                </button>
            </div>

            <div class="divider my-6"></div>

            <!-- Pourquoi c’est important -->
            <h2 class="text-xl font-semibold text-secondary mb-4">
                💡 Pourquoi c’est important ?
            </h2>
            <div class="grid gap-2">
                <p class="p-2 rounded bg-base-100 shadow-sm">
                    🎯 Charger des données (API) dans <span class="font-bold">onMounted()</span>
                </p>
                <p class="p-2 rounded bg-base-100 shadow-sm">
                    🗑️ Libérer des ressources dans <span class="font-bold">onBeforeUnmount()</span>
                </p>
                <p class="p-2 rounded bg-base-100 shadow-sm">
                    🖥️ Mettre à jour l’UI dans <span class="font-bold">onUpdated()</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

const counter = ref(0)

// Exemple d'utilisation du cycle de vie :
onMounted(() => {
    console.log('✅ Le composant est monté : on peut faire des appels API.')
})

onUpdated(() => {
    console.log('🔄 Le composant vient d’être mis à jour : counter =', counter.value)
})

onBeforeUnmount(() => {
    console.log('⚠️ Le composant va être démonté : on peut nettoyer des timers ou listeners.')
})

onUnmounted(() => {
    console.log('🗑️ Le composant est démonté : plus de ressources en mémoire.')
})

// Exemple pour détruire le composant dynamiquement
const destroyComponent = () => {
    // Ici, on simule la destruction en rechargant la page ou en changeant de route
    location.reload()
}
</script>

<style scoped>
/* Optionnel : styles custom */
</style>
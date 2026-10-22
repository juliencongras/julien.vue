<template>
    <div class="flex justify-center my-8">
        <div class="card w-full max-w-3xl bg-base-200 shadow-xl p-6">
            <h1 class="text-3xl font-bold text-primary mb-6 text-center">Exemple Chart.js dynamique</h1>
            <p class="text-1xl font-bold mb-6 text-center">Evolution des ventes par mois</p>
            
            <BarChart />

            <button class="btn btn-primary">Ajouter +50</button>
            <button class="btn btn-neutral btn-outline">Valeur aléatoire</button>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import BarChart from '../../components/BarChart.vue'

</script>
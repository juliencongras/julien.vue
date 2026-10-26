<template>
    <div class="card bg-base-200 shadow-xl p-6 max-w-xl mx-auto">
        <h2 class="text-2xl font-bold text-primary mb-4">📊 Exemple Chart.js Dynamique</h2>

        <div class="h-72">
            <Bar :data="chartData" :options="chartOptions" />
        </div>

        <!-- Boutons pour changer la valeur -->
        <div class="flex gap-2 mt-4">
            <button class="btn btn-primary" @click="incrementValue">
                ➕ Ajouter +50
            </button>
            <button class="btn btn-outline" @click="randomValue">
                🎲 Valeur aléatoire
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import { ref, computed } from 'vue'

// 1️⃣ Enregistrer les modules Chart.js
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

// 2️⃣ Valeur dynamique
const dynamicData = ref(1200)

// 3️⃣ chartData recalculé automatiquement avec computed dès q'une des dépendances (variables) change ici la ref dynamicData
const chartData = computed(() => ({
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai'],
    datasets: [
        {
            label: 'Ventes (€)',
            // on utilise dynamicData.value pour Janvier
            data: [dynamicData.value, 1500, 900, 2000, 1800],
            backgroundColor: '#3b82f6'
        }
    ]
}))

// 4️⃣ Options Chart.js
const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: true,
            labels: { color: '#374151' }
        },
        title: {
            display: true,
            text: 'Evolution des ventes par mois'
        }
    },
    scales: {
        x: { ticks: { color: '#374151' } },
        y: { ticks: { color: '#374151' } }
    }
}

// 5️⃣ Fonctions
function incrementValue() {
    dynamicData.value += 50
}

function randomValue() {
    dynamicData.value = Math.floor(Math.random() * 3000)
}
</script>
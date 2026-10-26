<template>
    <div class="space-y-10">
        <!-- 🔹 INTRO -->
        <div class="card bg-base-200 shadow-xl p-6 max-w-3xl mx-auto">
            <h1 class="text-3xl font-bold text-primary mb-4">
                📊 Découverte de Chart.js
            </h1>
            <p class="mb-4 text-base-content">
                <strong>Chart.js</strong> est l’une des librairies JavaScript les plus populaires pour créer
                des graphiques interactifs et responsives. Simple à configurer, elle propose plusieurs types
                de graphes : lignes, barres, radars, secteurs…
            </p>

            <div class="alert alert-info">
                <span>
                    💡 Chart.js fonctionne aussi bien dans un projet Vue qu’avec Nuxt. On peut également
                    utiliser des wrappers comme <code>vue-chartjs</code> pour simplifier l’intégration.
                </span>
            </div>
        </div>

        <!-- 🔹 INSTALLATION -->
        <div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div class="card bg-base-100 p-6 shadow-md">
                <h2 class="text-2xl font-bold text-primary mb-4">🚀 Installation dans Nuxt 3</h2>
                <p class="mb-4">
                    Installez Chart.js via <strong>pnpm</strong> ou <strong>npm</strong> :
                </p>
                <pre class="bg-base-200 p-3 rounded text-sm mb-4"><code>pnpm add chart.js</code></pre>
                <p>
                    Puis importez Chart.js dans un composant ou créez un plugin Nuxt pour l’utiliser
                    globalement.
                </p>
            </div>

            <div class="card bg-base-100 p-6 shadow-md">
                <h2 class="text-2xl font-bold text-primary mb-4">🚀 Installation dans un projet Vue 3</h2>
                <p class="mb-4">
                    Même commande d’installation :
                </p>
                <pre class="bg-base-200 p-3 rounded text-sm mb-4"><code>pnpm add chart.js</code></pre>
                <p>
                    Vous pouvez ensuite importer Chart.js directement dans vos composants Vue ou passer par un
                    wrapper.
                </p>
            </div>
        </div>
          <!-- 🔹 CONFIGURATION VUE-CHARTJS -->
    <div class="card bg-base-100 shadow-lg p-6 max-w-5xl mx-auto">
      <h2 class="text-2xl font-bold text-primary mb-4">⚙️ Configurer vue-chartjs dans Nuxt et Vue</h2>
      <p class="mb-4 text-base-content">
        Une fois <code>vue-chartjs</code> et <code>chart.js</code> installés, vous devez enregistrer les composants de Chart.js et
        importer les composants <code>vue-chartjs</code>.
      </p>

      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <h3 class="text-lg font-semibold mb-2 text-primary">Dans Nuxt 3</h3>
          <p class="mb-2 text-sm">
            Créez un fichier <code>plugins/chartjs.client.ts</code> :
          </p>
          <pre class="bg-base-200 p-3 rounded text-xs overflow-x-auto">
<code>import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

// Enregistrer les composants Chart.js
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)</code>
          </pre>
          <p class="mt-2 text-sm">
            Ensuite vous pouvez importer les composants <code>Bar</code>, <code>Line</code> etc.
            de <code>vue-chartjs</code> directement dans vos composants.
          </p>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-2 text-primary">Dans Vue 3</h3>
          <p class="mb-2 text-sm">
            Même principe : enregistrez Chart.js dans votre <code>main.js</code> pour le rendre global ou dans un composant :
          </p>
          <pre class="bg-base-200 p-3 rounded text-xs overflow-x-auto">
<code>import { createApp } from 'vue'
import App from './App.vue'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

createApp(App).mount('#app')</code>
          </pre>
        </div>
      </div>
      <div class="alert alert-success mt-4">
        <span>
          ✅ Vous êtes prêt à utiliser <strong>vue-chartjs</strong> avec des composants comme <code>&lt;Bar /&gt;</code> !
        </span>
      </div>
    </div>

        <!-- 🔹 VUE-CHARTJS -->
        <div class="card bg-base-200 shadow-xl p-6 max-w-3xl mx-auto">
            <h2 class="text-2xl font-bold text-primary mb-4">🧩 Utiliser vue-chartjs</h2>
            <p class="mb-4 text-base-content">
                <code>vue-chartjs</code> est un wrapper officiel qui simplifie l’utilisation de Chart.js dans
                Vue et Nuxt. Il fournit des composants prêts à l’emploi comme
                <code>&lt;BarChart&gt;</code> ou <code>&lt;LineChart&gt;</code>.
            </p>

            <pre class="bg-base-300 p-3 rounded text-sm mb-4"><code>pnpm add vue-chartjs chart.js</code></pre>
            <p class="mb-4 text-base-content">
                Ou avec npm :
            </p>
            <pre class="bg-base-300 p-3 rounded text-sm mb-4"><code>npm install vue-chartjs chart.js</code></pre>

            <p class="mb-4">
                Exemple minimal pour afficher un graphique en barres :
            </p>

            <pre class="bg-base-300 p-3 rounded text-sm overflow-x-auto">
  <code>
  &lt;script setup&gt;
  import {
    Chart as ChartJS,
    Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale
  } from 'chart.js'
  import { Bar } from 'vue-chartjs'
  
  // Enregistrer les composants Chart.js
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  const chartData = {
    labels: ['Jan', 'Fév', 'Mar'],
    datasets: [{ label: 'Ventes', data: [40, 55, 70], backgroundColor: '#3b82f6' }]
  }
  
  const chartOptions = { responsive: true, maintainAspectRatio: false }
  &lt;/script&gt;
  
  &lt;template&gt;
    &lt;div class="h-64"&gt;
      &lt;Bar :data="chartData" :options="chartOptions" /&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  </code>
  </pre>

            <p class="mb-4">
                Pour rendre les charts dynamique en vue sur la documentation ils recommande d'utiliser des computed pour
                les chartData et ou les chartOptions
            </p>
            <a class="link link-primary" href="https://vue-chartjs.org/guide/#updating-charts">Lien vers la documentation</a>
            <!-- <BarChartDemo></BarChartDemo> -->
            <BarChartDynamic></BarChartDynamic>

            <div class="alert alert-success">
                <span>
                    ✅ Avec <strong>vue-chartjs</strong>, vous gagnez du temps et profitez d’une intégration
                    complète avec la réactivité de Vue.
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import BarChartDynamic from '../../components/BarChartDynamic.vue';
// Pas de logique ici : c’est une leçon statique avec du contenu pédagogique.
</script>
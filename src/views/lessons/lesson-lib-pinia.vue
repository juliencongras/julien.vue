<template>
  <div class="container mx-auto p-4 md:p-8 space-y-8">
    <!-- Header / Intro -->
    <div class="text-center">
      <h1 class="text-4xl md:text-5xl font-extrabold text-primary">
        🚀 Gestion d'État avec Pinia
      </h1>
      <p class="text-lg md:text-xl text-base-content opacity-75 mt-2 max-w-2xl mx-auto">
        Pinia est le store officiel de Vue 3. Il centralise les données globales de ton application et simplifie le partage d'état entre composants.
      </p>
    </div>

    <!-- Section Théorie : Pourquoi Pinia ? -->
    <section id="theory">
      <div class="grid md:grid-cols-3 gap-4">
        <div class="card bg-base-100 shadow-xl border border-base-300 p-5">
          <h3 class="text-lg font-bold mb-2 text-primary">🎯 Centralisation</h3>
          <p class="text-sm text-base-content/80">
            Conserve toutes tes données globales (session utilisateur, panier, préférences) dans des <strong>stores</strong> faciles à maintenir.
          </p>
        </div>
        <div class="card bg-base-100 shadow-xl border border-base-300 p-5">
          <h3 class="text-lg font-bold mb-2 text-secondary">⚡ Simplicité</h3>
          <p class="text-sm text-base-content/80">
            Une API intuitive basée sur <code class="text-xs font-bold">state</code>, <code class="text-xs font-bold">getters</code> et <code class="text-xs font-bold">actions</code>. Fini les mutations complexes de Vuex.
          </p>
        </div>
        <div class="card bg-base-100 shadow-xl border border-base-300 p-5">
          <h3 class="text-lg font-bold mb-2 text-accent">💾 Persistance</h3>
          <p class="text-sm text-base-content/80">
            Grâce à <code class="text-xs font-bold">pinia-plugin-persistedstate</code>, l'état peut être automatiquement sauvegardé dans le <code class="text-xs font-bold">localStorage</code>.
          </p>
        </div>
      </div>
    </section>

    <!-- Section 1 : Configuration dans main.js -->
    <section id="setup-main">
      <div class="card bg-base-100 shadow-xl border border-base-300 p-6 space-y-4">
        <h2 class="card-title text-2xl font-bold">1. Initialisation dans <code class="text-secondary">main.js</code></h2>
        <p class="text-sm text-base-content/80">
          Pour utiliser Pinia et activer la persistance automatique des données au rafraîchissement de la page, enregistre le plugin dans ton point d'entrée principal :
        </p>

        <!-- Code Shiki : main.js -->
        <div v-if="codeMainHighlighted" v-html="codeMainHighlighted" class="overflow-x-auto rounded-lg text-sm"></div>
        <div v-else class="skeleton h-56 w-full rounded-lg"></div>
      </div>
    </section>

    <!-- Section 2 : Création d'un Store Pinia -->
    <section id="store-definition">
      <div class="card bg-base-100 shadow-xl border border-base-300 p-6 space-y-4">
        <h2 class="card-title text-2xl font-bold">2. Définition du Store (<code class="text-secondary">counterStore.js</code>)</h2>
        <p class="text-sm text-base-content/80">
          Un store se crée avec <code class="text-secondary">defineStore()</code>. L'option <code class="text-secondary">persist: true</code> indique au plugin de synchroniser le store avec le stockage local.
        </p>

        <!-- Code Shiki : counterStore.js -->
        <div v-if="codeStoreHighlighted" v-html="codeStoreHighlighted" class="overflow-x-auto rounded-lg text-sm"></div>
        <div v-else class="skeleton h-64 w-full rounded-lg"></div>
      </div>
    </section>

    <!-- Section 3 : Utilisation dans un Composant + Démo Live -->
    <section id="demo">
      <div class="card bg-base-100 shadow-xl border border-base-300">
        <div class="card-body">
          <h2 class="card-title text-2xl font-bold mb-2">3. Utilisation dans un Composant</h2>
          <p class="text-sm text-base-content/70 mb-4">
            Importe le store dans ton composant pour accéder à ses propriétés et exécuter ses actions :
          </p>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <!-- Code Shiki : Usage Composant -->
            <div class="flex flex-col justify-between">
              <div v-if="codeComponentHighlighted" v-html="codeComponentHighlighted" class="overflow-x-auto rounded-lg text-sm"></div>
              <div v-else class="skeleton h-64 w-full rounded-lg"></div>
            </div>

            <!-- Rendu Interactif -->
            <div class="p-6 bg-base-200/50 rounded-box border border-base-300 flex flex-col justify-between items-center text-center space-y-4">
              <span class="text-xs font-bold uppercase tracking-wider text-base-content/50 block">Rendu interactif en direct</span>

              <!-- Composant Live Counter -->
              <div class="w-full max-w-xs p-4 bg-base-100 rounded-box border border-base-300 shadow-sm">
                <PiniaCounter />
              </div>

              <div class="alert alert-info text-xs shadow-sm">
                <span>💡 <strong>Test :</strong> Incrémente le compteur et rafraîchis la page (<code class="font-bold">F5</code>). La valeur est conservée grâce à <code class="font-bold">persistedstate</code> !</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <div class="text-center">
      <p class="text-sm opacity-75">
        Pour aller plus loin, consulte la
        <a href="https://pinia.vuejs.org/" class="link link-hover link-primary font-bold" target="_blank">
          documentation officielle de Pinia
        </a>.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { codeToHtml } from 'shiki';
import PiniaCounter from '../../components/PiniaCounter.vue';

// --- Snippets bruts pour Shiki ---
const snippetMain = `// src/main.js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import App from './App.vue';
import router from './router';

const app = createApp(App);
const pinia = createPinia();

// Intégration du plugin de persistance (localStorage)
pinia.use(piniaPluginPersistedstate);

app.use(router);
app.use(pinia);
app.mount('#app');`;

const snippetStore = `// src/stores/counterStore.js
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    reset() {
      this.count = 0;
    }
  },
  // Active la sauvegarde automatique dans le localStorage
  persist: true
});`;

const snippetComponent = `<template>
  <div>
    <h2>{{ counterStore.count }}</h2>
    <button @click="counterStore.increment">Incrémenter</button>
    <button @click="counterStore.decrement font-bold">Décrémenter</button>
    <button @click="counterStore.reset">Réinitialiser</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '../stores/counterStore';

const counterStore = useCounterStore();
<\/script>`;

// --- Variables d'état pour le HTML coloré ---
const codeMainHighlighted = ref<string>('');
const codeStoreHighlighted = ref<string>('');
const codeComponentHighlighted = ref<string>('');

onMounted(async () => {
  const [mainCode, storeCode, componentCode] = await Promise.all([
    codeToHtml(snippetMain, { lang: 'javascript', theme: 'vitesse-dark' }),
    codeToHtml(snippetStore, { lang: 'javascript', theme: 'vitesse-dark' }),
    codeToHtml(snippetComponent, { lang: 'vue', theme: 'vitesse-dark' })
  ]);

  codeMainHighlighted.value = mainCode;
  codeStoreHighlighted.value = storeCode;
  codeComponentHighlighted.value = componentCode;
});
</script>
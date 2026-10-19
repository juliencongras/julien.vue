<template>
    <div class="container mx-auto p-6">
        <!-- Carte principale -->
        <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
                <h1 class="text-4xl font-bold text-center mb-4">
                    Comprendre les deux syntaxes de Vue.js
                </h1>
                <p class="text-center text-lg text-gray-600 mb-6">
                    Vue.js propose deux approches pour écrire vos composants :
                    <strong>le Mode Options</strong> et <strong>le Mode Composition</strong>.
                </p>

                <!-- Tabs DaisyUI -->
                <div class="tabs tabs-boxed justify-center mb-6">
                    <a class="tab" :class="activeTab === 'options' ? 'tab-active' : ''" @click="activeTab = 'options'">
                        Mode Options
                    </a>
                    <a class="tab" :class="activeTab === 'composition' ? 'tab-active' : ''"
                        @click="activeTab = 'composition'">
                        Mode Composition
                    </a>
                </div>

                <!-- Contenu dynamique -->
                <div v-if="activeTab === 'options'" class="space-y-4">
                    <h2 class="text-2xl font-semibold mb-2">Mode Options</h2>
                    <div class="alert alert-info shadow-lg">
                        <div>
                            <span class="font-bold">Bon à savoir :</span>
                            Idéal pour débuter, le Mode Options structure votre composant avec des sections claires :
                            <code>data</code>, <code>methods</code>, <code>computed</code>, etc.
                        </div>
                    </div>
                    <pre class="bg-base-300 text-base-content p-4 rounded-lg overflow-x-auto">
  <code class="language-javascript">
  &lt;script&gt;
  export default {
    data() {
      return {
        message: 'Bonjour depuis le Mode Options'
      }
    },
    methods: {
      direBonjour() {
        alert(this.message)
      }
    }
  }
  &lt;/script&gt;
  
  &lt;template&gt;
    &lt;div&gt;
      &lt;p&gt;{{ message }}&lt;/p&gt;
      &lt;button @click="direBonjour"&gt;Cliquez-moi&lt;/button&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  </code>
            </pre>
                </div>

                <div v-else class="space-y-4">
                    <h2 class="text-2xl font-semibold mb-2">Mode Composition</h2>
                    <div class="alert alert-success shadow-lg">
                        <div>
                            <span class="font-bold">Bon à savoir :</span>
                            Le Mode Composition donne plus de flexibilité, idéal pour les gros projets.
                            Tout se passe dans <code>&lt;script setup&gt;</code> avec des <code>ref</code> et
                            <code>reactive</code>.
                        </div>
                    </div>
                    <pre class="bg-base-300 text-base-content p-4 rounded-lg overflow-x-auto">
  <code class="language-javascript">
  &lt;script setup&gt;
  import { ref } from 'vue'
  
  const message = ref('Bonjour depuis le Mode Composition')
  
  function direBonjour() {
    alert(message.value)
  }
  &lt;/script&gt;
  
  &lt;template&gt;
    &lt;div&gt;
      &lt;p&gt;{{ message }}&lt;/p&gt;
      &lt;button @click="direBonjour"&gt;Cliquez-moi&lt;/button&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  </code>
            </pre>
                </div>

                <!-- Toggle Switch DaisyUI -->
                <div class="text-center mt-6">
                    <label class="label cursor-pointer">
                        <span class="label-text mr-3">Basculer de mode</span>
                        <input type="checkbox" class="toggle toggle-primary" :checked="activeTab === 'composition'"
                            @change="toggleMode" />
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('options')

function toggleMode() {
    activeTab.value = activeTab.value === 'options' ? 'composition' : 'options'
}
</script>

<style scoped>
/* On peut ajouter des styles custom si besoin */
</style>
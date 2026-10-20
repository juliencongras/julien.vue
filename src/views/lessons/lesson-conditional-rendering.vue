<template>
    <div class="container mx-auto p-4 md:p-8 bg-base-200 rounded-box shadow-xl">
        <div class="text-center mb-8">
            <h1 class="text-4xl md:text-5xl font-bold text-primary">Conditional Rendering avec Vue.js</h1>
            <p class="text-lg md:text-xl text-base-content opacity-75 mt-2">
                Apprenez comment afficher ou masquer des éléments en fonction de conditions dynamiques.
            </p>
        </div>

        <!-- Section Théorie -->
        <section id="theory" class="mb-8">
            <div class="card bg-base-100 shadow-xl rounded-box p-6">
                <h2 class="card-title text-2xl font-bold mb-3">Qu'est-ce que le Conditional Rendering ?</h2>
                <p class="text-base-content opacity-80">
                    Le **Conditional Rendering** en Vue.js vous permet de contrôler l'affichage d'éléments dans le DOM
                    en fonction de l'état de vos données réactives. La directive <code>v-if</code> est l'un des moyens
                    les plus courants
                    pour implémenter cette fonctionnalité.
                </p>
                <div class="alert alert-info mt-4 rounded-box">
                    <span class="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="stroke-current shrink-0 w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span class="font-bold">Principaux cas d'utilisation :</span>
                    </span>
                    <ul class="list-disc list-inside mt-2 ml-4">
                        <li>Afficher ou masquer des sections en fonction des actions de l'utilisateur.</li>
                        <li>Gérer l'affichage des messages d'erreur ou des états de chargement.</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Exemple : Utilisation de v-if -->
        <section id="example" class="mb-8">
            <div class="card bg-base-100 shadow-xl rounded-box p-6">
                <h2 class="card-title text-2xl font-bold mb-3">Exemple : Conditional Rendering avec <code>v-if</code>
                </h2>
                <p class="text-base-content opacity-80 mb-4">
                    Cet exemple montre comment afficher ou masquer un message basé sur une condition réactive :
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <!-- Code Exemple -->
                    <div class="mockup-code">
                        <pre class="whitespace-pre-wrap"><code>
  &lt;template&gt;
    &lt;div&gt;
      &lt;button class="btn btn-primary" @click="toggleMessage"&gt;
        {{ showMessage ? 'Masquer' : 'Afficher' }} le message
      &lt;/button&gt;
      &lt;p v-if="showMessage" class="mt-3 alert alert-success"&gt;
        Ceci est un message conditionnellement rendu.
      &lt;/p&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  
  &lt;script setup&gt;
  import { ref } from 'vue';
  
  const showMessage = ref(false);
  
  function toggleMessage() {
    showMessage.value = !showMessage.value;
  }
  &lt;/script&gt;
  </code></pre>
                    </div>
                    <!-- Rendu Exemple -->
                    <div
                        class="p-4 bg-base-200 rounded-box shadow-md text-center flex flex-col items-center justify-center">
                        <button class="btn btn-primary mb-4" @click="toggleMessage">
                            {{ showMessage ? 'Masquer' : 'Afficher' }} le message
                        </button>
                        <p v-if="showMessage" class="alert alert-success mt-3 w-full max-w-sm">
                            Ceci est un message conditionnellement rendu.
                        </p>
                        <p v-else>Message avec V eLSE</p>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Footer -->
        <div class="text-center mt-8">
            <p class="text-sm opacity-75">
                Pour en savoir plus sur le conditional rendering, consultez la
                <a href="https://vuejs.org/guide/essentials/conditional.html" class="link link-hover link-primary"
                    target="_blank">
                    documentation officielle de Vue.js
                </a>.
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Donnée réactive pour l'exemple
const showMessage = ref(false);

// Fonction pour alterner l'affichage
function toggleMessage() {
    showMessage.value = !showMessage.value;
}
</script>

<style scoped lang="css">
/* Les styles sont gérés par DaisyUI et Tailwind, pas de CSS supplémentaire n'est nécessaire ici. */
</style>
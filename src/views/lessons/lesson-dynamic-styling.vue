<template>
    <div class="container mx-auto p-4 md:p-8">
        <div class="text-center mb-8">
            <h1 class="text-4xl md:text-5xl font-extrabold text-primary">Dynamic Styling avec Vue.js</h1>
            <p class="text-lg md:text-xl text-base-content opacity-75 mt-2">
                Apprenez comment utiliser <code>v-bind</code> pour appliquer des styles et des classes dynamiquement
                dans Vue.js.
            </p>
        </div>

        <!-- Section Théorie -->
        <section id="theory" class="mb-8">
            <div class="card bg-base-100 shadow-xl rounded-box p-6">
                <h2 class="card-title text-2xl font-bold mb-3">Qu'est-ce que le Dynamic Styling ?</h2>
                <p class="text-base-content opacity-80">
                    Vue.js permet de modifier dynamiquement les styles CSS et les classes d'un élément en utilisant la
                    directive <code>v-bind</code>.
                    Cela permet de rendre vos applications plus interactives et réactives.
                </p>
                <div class="alert alert-info mt-4 rounded-box">
                    <span class="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="stroke-current shrink-0 w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span class="font-bold">Principaux usages :</span>
                    </span>
                    <ul class="list-disc list-inside mt-2 ml-4">
                        <li>Changer l'apparence en fonction de l'état d'une donnée.</li>
                        <li>Appliquer plusieurs classes ou styles conditionnels.</li>
                    </ul>
                </div>
            </div>
        </section>

        <div class="flex flex-col lg:flex-row gap-6">
            <!-- Exemple 1 : Style Dynamique avec v-bind:style -->
            <div class="lg:w-1/2">
                <div class="card bg-base-100 shadow-xl rounded-box p-6">
                    <h2 class="card-title text-2xl font-bold mb-3">Exemple 1 : Dynamic Styling avec
                        <code>v-bind:style</code></h2>
                    <p class="text-base-content opacity-80 mb-4">
                        Cet exemple montre comment appliquer un style dynamique basé sur une donnée réactive :
                    </p>
                    <div class="mockup-code p-4 mb-4">
                        <pre class="whitespace-pre-wrap"><code>
  &lt;template&gt;
    &lt;div&gt;
      &lt;p :style="dynamicStyle"&gt;Texte stylé dynamiquement&lt;/p&gt;
      &lt;button class="btn btn-primary" @click="changeColor"&gt;Changer la couleur&lt;/button&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  
  &lt;script setup&gt;
  import { ref } from 'vue';
  
  const dynamicStyle = ref({
    color: 'blue',
    fontSize: '18px',
  });
  
  function changeColor() {
    dynamicStyle.value.color = dynamicStyle.value.color === 'blue' ? 'red' : 'blue';
  }
  &lt;/script&gt;
  </code></pre>
                    </div>
                    <div class="p-4 bg-base-200 rounded-box shadow-md text-center">
                        <p :style="dynamicStyle" class="text-lg font-bold mb-4">Texte stylé dynamiquement</p>
                        <button class="btn btn-primary" @click="changeColor">Changer la couleur</button>
                    </div>
                </div>
            </div>

            <!-- Exemple 2 : Classes Dynamiques avec v-bind:class -->
            <div class="lg:w-1/2">
                <div class="card bg-base-100 shadow-xl rounded-box p-6">
                    <h2 class="card-title text-2xl font-bold mb-3">Exemple 2 : Dynamic Styling avec
                        <code>v-bind:class</code></h2>
                    <p class="text-base-content opacity-80 mb-4">
                        Cet exemple montre comment appliquer des classes dynamiquement en fonction de l'état d'une
                        donnée :
                    </p>
                    <div class="mockup-code p-4 mb-4">
                        <pre class="whitespace-pre-wrap"><code>
  &lt;template&gt;
    &lt;div&gt;
      &lt;p :class="{'text-success': isActive, 'text-danger': !isActive}"&gt;Statut : {{ isActive ? 'Actif' : 'Inactif' }}&lt;/p&gt;
      &lt;button class="btn btn-secondary" @click="toggleStatus"&gt;Changer le statut&lt;/button&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  
  &lt;script setup&gt;
  import { ref } from 'vue';
  
  const isActive = ref(true);
  
  function toggleStatus() {
    isActive.value = !isActive.value;
  }
  &lt;/script&gt;
  </code></pre>
                    </div>
                    <div class="p-4 bg-base-200 rounded-box shadow-md text-center">
                        <p :class="['font-bold', { 'text-success': isActive, 'text-error': !isActive }]"
                            class="text-xl mb-4">
                            Statut : {{ isActive ? 'Actif' : 'Inactif' }}
                        </p>
                        <button class="btn btn-secondary" @click="toggleStatus">Changer le statut</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div class="text-center mt-8">
            <p class="text-sm opacity-75">
                Pour en savoir plus sur le dynamic styling, consultez la
                <a href="https://vuejs.org/guide/essentials/class-and-style.html" class="link link-hover link-primary"
                    target="_blank">
                    documentation officielle de Vue.js
                </a>.
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const activeColor = ref('red')
const myFont = ref(30)

// Exemple 1 : Style Dynamique
const dynamicStyle = ref({
    color: 'blue',
    fontSize: '18px',
});

function changeColor() {
    dynamicStyle.value.color = dynamicStyle.value.color === 'blue' ? 'red' : 'blue';
}

// Exemple 2 : Classes Dynamiques
const isActive = ref(true);

function toggleStatus() {
    isActive.value = !isActive.value;
}
</script>

<style scoped lang="css">
/* Les styles sont gérés par DaisyUI et Tailwind, pas de CSS nécessaire ici. */
</style>
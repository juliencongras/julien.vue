<template>
    <div class="container mx-auto p-4 md:p-8">
        <div class="text-center mb-8">
            <h1 class="text-4xl md:text-5xl font-extrabold text-primary">Les Watchers dans Vue.js</h1>
            <p class="text-lg md:text-xl text-base-content opacity-75 mt-2">
                Les watchers permettent d'observer et de réagir aux changements des données réactives,
                parfaits pour gérer des effets secondaires ou effectuer des tâches asynchrones.
            </p>
        </div>

        <!-- Section Théorie -->
        <section id="theory" class="mb-8">
            <div class="card bg-base-100 shadow-xl rounded-box p-6">
                <h2 class="card-title text-2xl font-bold mb-3">Qu'est-ce qu'un Watcher ?</h2>
                <p class="text-base-content opacity-80">
                    Un watcher est une fonction déclarative utilisée pour réagir aux changements d'une donnée réactive
                    ou d'une propriété calculée.
                    Ils sont souvent utilisés pour des tâches complexes ou lorsque vous avez besoin d'effectuer des
                    actions spécifiques suite à un changement.
                </p>
                <div class="alert alert-info mt-4 rounded-box">
                    <span class="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="stroke-current shrink-0 w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span class="font-bold">Utilisations communes :</span>
                    </span>
                    <ul class="list-disc list-inside mt-2 ml-4">
                        <li>Surveiller et synchroniser des données avec une API.</li>
                        <li>Effectuer des validations en temps réel.</li>
                        <li>Réagir aux changements d'une propriété calculée.</li>
                    </ul>
                </div>
            </div>
        </section>

        <div class="flex flex-col lg:flex-row gap-6">
            <!-- Exemple 1 : Surveillance d'un compteur -->
            <div class="lg:w-1/2">
                <div class="card bg-base-100 shadow-xl rounded-box p-6">
                    <h2 class="card-title text-2xl font-bold mb-3">Exemple 1 : Surveillance d'un compteur</h2>
                    <p class="text-base-content opacity-80 mb-4">
                        Cet exemple montre comment un watcher peut être utilisé pour détecter lorsque le compteur
                        dépasse une certaine limite :
                    </p>
                    <div class="mockup-code p-4 mb-4">
                        <pre class="whitespace-pre-wrap"><code>
  &lt;template&gt;
    &lt;div&gt;
      &lt;p&gt;Compteur : {{ counter }}&lt;/p&gt;
      &lt;button class="btn btn-primary" @click="increment"&gt;Incrémenter&lt;/button&gt;
      &lt;p class="mt-3 text-error" v-if="limitReached"&gt;⚠️ Limite atteinte !&lt;/p&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  
  &lt;script setup&gt;
  import { ref, watch } from 'vue';
  
  const counter = ref(0);
  const limitReached = ref(false);
  
  function increment() {
    counter.value++;
  }
  
  watch(counter, (newVal) => {
    limitReached.value = newVal >= 10;
  });
  &lt;/script&gt;
  </code></pre>
                    </div>
                    <div class="p-4 bg-base-200 rounded-box shadow-md">
                        <p class="text-base-content opacity-80">Compteur : <span class="badge badge-lg badge-primary">{{
                                counter }}</span></p>
                        <button class="btn btn-primary mt-3" @click="increment">Incrémenter</button>
                        <p class="mt-3 text-error font-bold" v-if="limitReached">⚠️ Limite atteinte !</p>
                    </div>
                </div>
            </div>

            <!-- Exemple 2 : Surveillance d'une chaîne -->
            <div class="lg:w-1/2">
                <div class="card bg-base-100 shadow-xl rounded-box p-6">
                    <h2 class="card-title text-2xl font-bold mb-3">Exemple 2 : Validation d'une chaîne de caractères
                    </h2>
                    <p class="text-base-content opacity-80 mb-4">
                        Cet exemple montre comment un watcher peut être utilisé pour valider une chaîne de caractères
                        saisie par l'utilisateur :
                    </p>
                    <div class="mockup-code p-4 mb-4">
                        <pre class="whitespace-pre-wrap"><code>
  &lt;template&gt;
    &lt;div&gt;
      &lt;label for="username"&gt;Nom d'utilisateur :&lt;/label&gt;
      &lt;input id="username" v-model="username" class="input input-bordered w-full" /&gt;
      &lt;p class="mt-3 text-error" v-if="errorMessage"&gt;{{ errorMessage }}&lt;/p&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  
  &lt;script setup&gt;
  import { ref, watch } from 'vue';
  
  const username = ref('');
  const errorMessage = ref('');
  
  watch(username, (newVal) => {
    errorMessage.value = newVal.length < 3 ? "Le nom d'utilisateur doit contenir au moins 3 caractères." : "";
  });
  &lt;/script&gt;
  </code></pre>
                    </div>
                    <div class="p-4 bg-base-200 rounded-box shadow-md">
                        <label class="form-control w-full">
                            <span class="label-text mb-1">Nom d'utilisateur :</span>
                            <input id="username" v-model="username" type="text" class="input input-bordered w-full" />
                        </label>
                        <p class="mt-3 text-error font-bold" v-if="errorMessage">{{ errorMessage }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div class="text-center mt-8">
            <p class="text-sm opacity-75">
                Pour en savoir plus sur les watchers, consultez la
                <a href="https://vuejs.org/guide/essentials/watchers.html" class="link link-hover link-primary"
                    target="_blank">
                    documentation officielle de Vue.js
                </a>.
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

// Exemple 1 : Surveillance d'un compteur
const counter = ref(0);
const limitReached = ref(false);

function increment() {
    counter.value++;
}

watch(counter, (newVal) => {
    limitReached.value = newVal >= 10;
});

// Exemple 2 : Validation d'une chaîne
const username = ref('');
const errorMessage = ref('');

watch(username, (newVal, oldVal) => {
    console.log(newVal);
    console.log(oldVal);
    errorMessage.value = newVal.length < 3 ? "Le nom d'utilisateur doit contenir au moins 3 caractères." : "Le nom est valide";
});
</script>

<style scoped lang="css">
/* Les styles sont gérés par DaisyUI et Tailwind, pas de CSS nécessaire ici. */
</style>
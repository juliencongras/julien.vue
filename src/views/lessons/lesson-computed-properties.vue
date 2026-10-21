<template>
    <div class="container mx-auto p-4 md:p-8">
        <div class="text-center mb-8">
            <h1 class="text-4xl md:text-5xl font-extrabold text-primary">Les Computed Properties dans Vue.js</h1>
            <p class="text-lg md:text-xl text-base-content opacity-75 mt-2">
                Les Computed Properties sont utilisées pour calculer des valeurs dérivées de façon réactive et
                optimisée.
            </p>
        </div>

        <!-- Section Théorie -->
        <section id="theory" class="mb-8">
            <div class="card bg-base-100 shadow-xl rounded-box p-6">
                <h2 class="card-title text-2xl font-bold mb-3">Qu'est-ce qu'une Computed Property ?</h2>
                <p class="text-base-content opacity-80">
                    Une Computed Property est une fonction déclarative utilisée pour calculer une valeur basée sur des
                    données réactives. Elle est automatiquement mise à jour lorsque les données sous-jacentes changent.
                </p>
                <div class="alert alert-info mt-4 rounded-box">
                    <span class="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="stroke-current shrink-0 w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span class="font-bold">Avantages :</span>
                    </span>
                    <ul class="list-disc list-inside mt-2 ml-4">
                        <li>Mise en cache du résultat jusqu'à ce que les dépendances changent.</li>
                        <li>Idéal pour des opérations coûteuses ou répétitives.</li>
                    </ul>
                </div>
            </div>
        </section>

        <div class="flex flex-col lg:flex-row gap-6">
            <!-- Exemple 1 : Nom Complet -->
            <div class="lg:w-1/2">
                <div class="card bg-base-100 shadow-xl rounded-box p-6">
                    <h2 class="card-title text-2xl font-bold mb-3">Exemple de Base : Nom Complet</h2>
                    <p class="text-base-content opacity-80 mb-4">
                        Utilisation d'une propriété calculée pour concaténer le prénom et le nom :
                    </p>
                    <div class="mockup-code p-4 mb-4">
                        <pre class="whitespace-pre-wrap"><code>
  &lt;template&gt;
    &lt;div&gt;
      &lt;label for="firstName"&gt;Prénom :&lt;/label&gt;
      &lt;input id="firstName" v-model="firstName" class="input input-bordered w-full" /&gt;
  
      &lt;label for="lastName" class="mt-3"&gt;Nom :&lt;/label&gt;
      &lt;input id="lastName" v-model="lastName" class="input input-bordered w-full" /&gt;
  
      &lt;p class="mt-3"&gt;Nom complet : {{ fullName }}&lt;/p&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  
  &lt;script setup&gt;
  import { ref, computed } from 'vue';
  
  const firstName = ref('');
  const lastName = ref('');
  
  const fullName = computed(() => `${firstName.value} ${lastName.value}`);
  &lt;/script&gt;
  </code></pre>
                    </div>
                    <div class="p-4 bg-base-200 rounded-box shadow-md">
                        <label class="form-control w-full">
                            <span class="label-text mb-1">Prénom :</span>
                            <input id="firstName" v-model="firstName" type="text" placeholder="Entrez le prénom..."
                                class="input input-bordered w-full" />
                        </label>
                        <label class="form-control w-full mt-3">
                            <span class="label-text mb-1">Nom :</span>
                            <input id="lastName" v-model="lastName" type="text" placeholder="Entrez le nom..."
                                class="input input-bordered w-full" />
                        </label>
                        <p class="mt-3 text-base-content opacity-80">Nom complet : <span class="badge badge-primary">
                            {{fullName }}</span></p>
                    </div>
                </div>
            </div>

            <!-- Exemple 2 : Comptage Dynamique -->
            <div class="lg:w-1/2">
                <div class="card bg-base-100 shadow-xl rounded-box p-6">
                    <h2 class="card-title text-2xl font-bold mb-3">Exemple Dynamique : Comptage de Mots</h2>
                    <p class="text-base-content opacity-80 mb-4">
                        Cet exemple montre comment une Computed Property peut calculer le nombre de mots dans une chaîne
                        de caractères :
                    </p>
                    <div class="mockup-code p-4 mb-4">
                        <pre class="whitespace-pre-wrap"><code>
  &lt;template&gt;
    &lt;div&gt;
      &lt;label for="sentence"&gt;Entrez une phrase :&lt;/label&gt;
      &lt;textarea id="sentence" v-model="sentence" rows="3" class="textarea textarea-bordered w-full"&gt;&lt;/textarea&gt;
  
      &lt;p class="mt-3"&gt;Nombre de mots : {{ wordCount }}&lt;/p&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  
  &lt;script setup&gt;
  import { ref, computed } from 'vue';
  
  const sentence = ref('');
  
  const wordCount = computed(() => {
    return sentence.value.trim() ? sentence.value.trim().split(/\s+/).length : 0;
  });
  &lt;/script&gt;
  </code></pre>
                    </div>
                    <div class="p-4 bg-base-200 rounded-box shadow-md">
                        <label class="form-control w-full">
                            <span class="label-text mb-1">Entrez une phrase :</span>
                            <textarea id="sentence-render" v-model="sentence" rows="3"
                                placeholder="Tapez votre texte ici..."
                                class="textarea textarea-bordered w-full"></textarea>
                        </label>
                        <p class="mt-3 text-base-content opacity-80">Nombre de mots : <span
                                class="badge badge-secondary">{{ wordCount }}</span></p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div class="text-center mt-8">
            <p class="text-sm opacity-75">
                Pour plus d'informations, consultez la
                <a href="https://vuejs.org/guide/essentials/computed.html" class="link link-hover link-primary"
                    target="_blank">
                    documentation officielle de Vue.js
                </a>.
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Exemple 1 : Nom Complet
const firstName = ref('');
const lastName = ref('');
const fullName = computed(() => `${firstName.value} ${lastName.value}`);

// Exemple 2 : Comptage Dynamique
const sentence = ref('');
const wordCount = computed(() => {
    return sentence.value.trim() ? sentence.value.trim().split(/\s+/).length : 0;
});
</script>

<style scoped lang="css">
/* Les styles sont gérés par DaisyUI et Tailwind, pas de CSS nécessaire ici. */
</style>
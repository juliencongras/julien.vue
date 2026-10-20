<template>
    <div class="container mx-auto p-6">
        <!-- Titre de la leçon -->
        <div class="text-center mb-8">
            <h1 class="text-4xl font-bold mb-2">List Rendering avec Vue.js</h1>
            <p class="text-lg text-gray-600">
                Découvrez comment utiliser <code>v-for</code> pour afficher dynamiquement des listes dans Vue.js.
            </p>
        </div>

        <!-- Section Théorie -->
        <section id="theory" class="mb-8">
            <h2 class="text-2xl font-semibold mb-3">Qu'est-ce que le List Rendering ?</h2>
            <p class="mb-3">
                Le <strong>List Rendering</strong> vous permet d'itérer sur des tableaux ou des objets et de rendre
                dynamiquement des éléments dans le DOM.
                La directive <code>v-for</code> est utilisée pour créer ces itérations.
            </p>
            <div class="alert alert-info shadow-lg">
                <div>
                    <span class="font-bold">Points Clés :</span>
                    <ul class="list-disc list-inside mt-2">
                        <li>Idéal pour afficher des listes d'éléments comme des produits, des utilisateurs, ou des
                            messages.</li>
                        <li>Assurez-vous d'utiliser une clé unique pour chaque élément (via l'attribut
                            <code>key</code>).</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Exemple : Utilisation de v-for -->
        <section id="example" class="mb-8">
            <h2 class="text-2xl font-semibold mb-3">Exemple : List Rendering avec <code>v-for</code></h2>
            <p class="mb-4">
                Cet exemple montre une liste dynamique de tâches, avec une condition pour afficher un message si la
                liste est vide :
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Code Exemple -->
                <div>
                    <pre class="bg-base-300 text-base-content p-4 rounded-lg overflow-x-auto">
  <code class="language-javascript">
  &lt;template&gt;
    &lt;div&gt;
      &lt;h3&gt;Liste de tâches :&lt;/h3&gt;
      &lt;ul&gt;
        &lt;li 
          v-for="(oneTask, index) in tasks" 
          :key="index" 
          class="badge badge-outline mb-2"&gt;
          {{ oneTask }}
        &lt;/li&gt;
      &lt;/ul&gt;
      &lt;p v-if="tasks.length === 0" class="alert alert-warning mt-3"&gt;
        Aucune tâche disponible.
      &lt;/p&gt;
      &lt;button class="btn btn-primary mt-3" @click="addTask"&gt;Ajouter une tâche&lt;/button&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  
  &lt;script setup&gt;
  import { ref } from 'vue';
  
  const tasks = ref([]);
  
  function addTask() {
    tasks.value.push(`Tâche ${tasks.value.length + 1}`);
  }
  &lt;/script&gt;
  </code>
            </pre>
                </div>

                <!-- Rendu Exemple -->
                <div class="card p-4 shadow-lg bg-base-100">
                    <h3 class="text-xl font-semibold mb-2">Liste de tâches :</h3>
                    <ul class="space-y-2">
                        <li v-for="(task, index) in tasks" :key="index"
                            class="badge badge-outline cursor-pointer hover:bg-primary hover:text-white transition-colors">
                            {{index}}-{{ task }}
                        </li>
                    </ul>
                    <p v-if="tasks.length === 0" class="alert alert-warning mt-3">
                        Aucune tâche disponible.
                    </p>
                    <button class="btn btn-primary mt-3" @click="addTask">Ajouter une tâche</button>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="text-center mt-8 text-gray-600">
            <p>
                Pour en savoir plus sur le List Rendering, consultez la
                <a href="https://vuejs.org/guide/essentials/list.html" class="link link-primary" target="_blank">
                    documentation officielle de Vue.js
                </a>.
            </p>
        </footer>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Données réactives
const tasks = ref([]);

// Ajouter une tâche
function addTask() {
    tasks.value.push(`Tâche ${tasks.value.length + 1}`);
}
</script>

<style scoped>
/* Quelques ajustements si nécessaire */
</style>
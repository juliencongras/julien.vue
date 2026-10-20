<template>
    <div class="container mx-auto p-4 md:p-8">
        <div class="text-center mb-8 md:mb-12">
            <h1 class="text-4xl md:text-5xl font-extrabold text-primary">
                Comprendre la Directive <code class="text-secondary">v-model</code>
            </h1>
            <p class="text-lg md:text-xl text-base-content opacity-75 mt-2 max-w-2xl mx-auto">
                La directive `v-model` crée une liaison bidirectionnelle entre les données et les entrées utilisateur.
            </p>
        </div>

        <!-- Section Théorie -->
        <div class="card bg-base-100 shadow-xl mb-6">
            <div class="card-body">
                <h2 class="card-title text-2xl font-bold mb-4">Concepts Théoriques</h2>
                <p>
                    Vue.js utilise un modèle **MVVM** (Model-View-ViewModel), où :
                </p>
                <ul class="list-inside list-disc">
                    <li>
                        <strong>Model</strong> : Les données de votre application.
                    </li>
                    <li>
                        <strong>View</strong> : L'interface utilisateur.
                    </li>
                    <li>
                        <strong>ViewModel</strong> : La couche intermédiaire qui lie les données au DOM.
                    </li>
                </ul>
                <p class="mt-4">
                    Contrairement au modèle **MVC**, **MVVM** se concentre sur des liaisons déclaratives.
                </p>
                <div class="alert alert-info mt-4">
                    <span class="font-bold">Two-Way Data Binding :</span> Les modifications dans un champ de formulaire mettent automatiquement à jour le modèle, et vice versa.
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Exemple de Base -->
            <div class="card bg-base-100 shadow-xl rounded-box">
                <div class="card-body">
                    <h2 class="card-title text-2xl font-bold">Exemple de Base</h2>
                    <p class="mb-4">
                        Synchroniser une valeur entre un champ de texte et une variable :
                    </p>
                    <div class="mockup-code mb-4">
                        <pre><code><span class="text-info">&lt;input</span> <span class="text-warning">v-model</span>="username" <span class="text-info">/&gt;</span></code></pre>
                        <pre><code><span class="text-info">&lt;p&gt;</span>Bonjour, {{ username }} !&lt;/p&gt;</code></pre>
                    </div>
                    <div class="form-control w-full">
                        <label class="label">
                            <span class="label-text">Nom d'utilisateur :</span>
                        </label>
                        <input type="text" v-model="username" class="input input-bordered w-full" placeholder="Tapez votre nom..." />
                        <p class="mt-3 text-lg font-semibold">Bonjour, <span class="text-primary">{{ username }}</span> !</p>
                    </div>
                </div>
            </div>

            <!-- Exemple Dynamique -->
            <div class="card bg-base-100 shadow-xl rounded-box">
                <div class="card-body">
                    <h2 class="card-title text-2xl font-bold">Exemple Dynamique</h2>
                    <p class="mb-4">
                        Interactions entre plusieurs champs :
                    </p>
                    <div class="mockup-code mb-4">
                        <pre><code>&lt;input type="number" v-model="age" /&gt;</code></pre>
                        <pre><code>&lt;input v-model="color" /&gt;</code></pre>
                        <pre><code>&lt;p&gt;Vous avez {{ age }} ans et votre couleur est {{ color }}.&lt;/p&gt;</code></pre>
                    </div>
                    <div class="form-control w-full">
                        <label class="label"><span class="label-text">Âge :</span></label>
                        <input type="number" v-model="age" class="input input-bordered w-full" />
                        <label class="label mt-3"><span class="label-text">Couleur préférée :</span></label>
                        <input type="text" v-model="color" class="input input-bordered w-full" />
                        <p class="mt-3 text-lg font-semibold">
                            Vous avez <span class="text-primary">{{ age }}</span> ans et votre couleur préférée est <span class="text-primary">{{ color }}</span>.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div class="text-center mt-8">
            <p class="text-sm md:text-base text-base-content opacity-50">
                Pour plus d'informations sur `v-model`, consultez la
                <a href="https://vuejs.org/guide/essentials/forms.html#v-model" class="link link-hover text-primary font-bold" target="_blank">
                    documentation officielle de Vue.js
                </a>.
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Exemple de Base
const username = ref('');

// Exemple Dynamique
const age = ref(9);
const color = ref('bleu');
</script>

<style scoped>
/* Les styles sont gérés par DaisyUI et Tailwind. */
</style>

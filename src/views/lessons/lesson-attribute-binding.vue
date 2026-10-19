<template>
    <div class="container mx-auto p-4 md:p-8">
        <div class="text-center mb-8 md:mb-12">
            <h1 class="text-4xl md:text-5xl font-extrabold text-primary">
                Apprendre la directive <code class="text-secondary">v-bind</code>
            </h1>
            <p class="text-lg md:text-xl text-base-content opacity-75 mt-2 max-w-2xl mx-auto">
                La directive `v-bind` permet de lier dynamiquement des attributs HTML à des données Vue.
            </p>
        </div>

        <!-- Section Définition -->
        <div class="card bg-base-100 shadow-xl mb-6">
            <div class="card-body">
                <h2 class="card-title text-2xl font-bold mb-4">Qu'est-ce que <code class="text-secondary">v-bind</code>
                    ?</h2>
                <p>
                    La directive `v-bind` est utilisée pour lier dynamiquement des données Vue à des attributs HTML.
                    Cela signifie que vous pouvez modifier ces attributs en fonction des données de votre composant.
                </p>
                <p>
                    La syntaxe abrégée pour `v-bind` est <code class="text-warning"><code>:</code></code>, ce qui
                    facilite son utilisation dans vos templates.
                </p>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Exemple 1 : Lien dynamique -->
            <div class="card bg-base-100 shadow-xl rounded-box">
                <div class="card-body">
                    <h2 class="card-title text-2xl font-bold">Exemple 1 : Lier un lien</h2>
                    <p class="mb-4">
                        <code class="text-secondary">v-bind</code> est utilisé pour lier une URL à l'attribut `href` :
                    </p>
                    <div class="mockup-code mb-4">
                        <pre><code><span class="text-info">&lt;a</span> <span class="text-warning">:href</span>="websiteUrl" <span class="text-info">class="btn btn-primary"&gt;</span>Visiter le site&lt;/a&gt;</code></pre>
                    </div>
                    <div class="card-actions justify-center mt-4">
                        <div class="p-4 w-full text-center">
                            <p class="text-sm text-base-content opacity-70">URL actuelle : <strong>{{ websiteUrl }}</strong></p>
                            <!-- Syntaxe v-bind -->
                            <a v-bind:href="websiteUrl" class="btn btn-primary mt-2 rounded-box">Visiter le site</a>
                            <!-- syntaxe raccourcies du v-bind juste :Attribut -->
                            <!-- <a :href="websiteUrl" class="btn btn-primary mt-2 rounded-box">Visiter le site</a> -->
                        </div>
                    </div>
                </div>
            </div>

            <!-- Exemple 2 : Attribut d'image -->
            <div class="card bg-base-100 shadow-xl rounded-box">
                <div class="card-body">
                    <h2 class="card-title text-2xl font-bold">Exemple 2 : Lier une image</h2>
                    <p class="mb-4">
                        Liez une source d'image à l'attribut `src` :
                    </p>
                    <div class="mockup-code mb-4">
                        <pre><code><span class="text-info">&lt;img</span> <span class="text-warning">v-bind:src</span>="imageUrl" <span class="text-info">alt="Exemple d'image"&gt;</span></code></pre>
                    </div>
                    <div class="card-actions justify-center flex-col w-full">
                        <div class="text-center w-full">
                            <img :src="imageUrl" alt="Exemple d'image"
                                class="w-full h-48 object-cover rounded-box mb-3 shadow-lg">
                            <button class="btn btn-secondary rounded-box" v-on:click="changeImage">Changer l'image</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div class="text-center mt-8">
            <p class="text-sm md:text-base text-base-content opacity-50">
                Consultez la
                <a href="https://vuejs.org/guide/essentials/template-syntax.html#v-bind"
                    class="link link-hover text-primary font-bold" target="_blank">
                    documentation officielle de Vue.js
                </a> pour plus d'informations.
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Exemple 1 : URL dynamique
const websiteUrl = ref('https://vuejs.org');

// Exemple 2 : Source d'image dynamique
const imageUrl = ref('https://picsum.photos/400/300');

// Méthode pour changer l'image
function changeImage() {
    imageUrl.value =
        imageUrl.value === 'https://picsum.photos/400/300'
            ? 'https://picsum.photos/400/300?random=1'
            : 'https://picsum.photos/400/300';
}
</script>

<style scoped>
/* Les styles sont gérés par DaisyUI et Tailwind, donc pas de CSS nécessaire ici. */
</style>

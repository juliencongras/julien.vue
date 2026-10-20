<template>
    <div class="container mx-auto p-4 md:p-8">
        <div class="card bg-base-100 shadow-xl rounded-box p-6">
            <h5 class="card-title text-2xl font-bold">Attribute Binding Mode : Composition</h5>

            <div class="mt-6 mb-4 card bg-base-200 shadow-lg rounded-box p-4">
                <h6 class="text-xl font-semibold mb-2">Lien dynamique</h6>
                <p class="text-sm opacity-75 mb-4">
                    Nous utilisons ici <code>v-bind:href</code> ou sa syntaxe abrégée <code>:href</code> pour lier
                    l'attribut `href` à une variable.
                </p>
                <div class="flex flex-col items-center space-y-4">
                    <!-- Notation complète -->
                    <a v-bind:href="leLien" class="btn btn-primary my-4">LIEN DYNAMIQUE (v-bind)</a>
                    <!-- Notation raccourcie -->
                    <a :href="leLien" class="btn btn-secondary">LIEN DYNAMIQUE (:)</a>
                </div>
            </div>

            <div class="mt-6 mb-4 card bg-base-200 shadow-lg rounded-box p-4">
                <h6 class="text-xl font-semibold mb-2">Liaison d'image</h6>
                <p class="text-sm opacity-75 mb-4">
                    La liaison d'attributs s'applique également aux balises <code>&lt;img&gt;</code> pour charger des
                    images dynamiquement.
                </p>
                <div class="flex justify-center">
                    <img :src="laImg" :alt="nomImage" class="rounded-box w-full max-w-xs shadow-md">
                </div>
            </div>

            <div class="mt-6 text-center">
                <p class="text-sm opacity-75">
                    Le lien et l'image sont tirés de la variable <code>ref</code> suivante :
                    <code class="text-primary-focus">leLien.value = '{{ leLien }}'</code>
                    <code class="text-secondary-focus">laImg.value = '{{ laImg }}'</code>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang='js'>
import { ref } from 'vue'

const leLien = ref('https://vuejs.org')
const laImg = ref('https://picsum.photos/400/300')
const nomImage = ref('Image aléatoire de Picsum')
</script>

<style scoped lang="css">
/* Les styles sont gérés par DaisyUI et Tailwind, pas de CSS nécessaire ici. */
</style>
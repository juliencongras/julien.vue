<template>
    <div class="mx-auto max-w-4xl p-4 md:p-8 bg-base-200 min-h-screen">

        <!-- En-tête de l'hommage -->
        <header class="text-center mb-10">
            <h1 class="text-5xl font-extrabold text-primary mb-2">
                Le Génie derrière Vue.js et Vite
            </h1>
            <p class="text-xl opacity-80">
                Un hommage passionné à Evan You, une source d'inspiration inépuisable.
            </p>
        </header>

        <!-- Carte principale (Vue.js Creator) -->
        <div class="card lg:card-side bg-base-100 shadow-2xl border border-secondary mb-10">
            <figure class="p-6 lg:p-10">
                <!-- Placeholder d'image pour Evan You -->
                <img src="https://placehold.co/250x250/374151/FFFFFF?text=Evan+You" alt="Portrait d'Evan You"
                    class="rounded-full shadow-xl border-4 border-secondary transition-transform duration-300 hover:scale-[1.02]" />
            </figure>
            <div class="card-body p-6 lg:p-10">
                <h2 class="card-title text-4xl text-accent font-bold">
                    Evan You
                </h2>
                <p class="text-xl opacity-80 mb-4">
                    Créateur de Vue.js et Vite.js
                </p>

                <!-- Section de déclaration d'amour -->
                <div
                    class="mockup-code bg-error text-error-content shadow-lg p-4 transition-transform duration-300 hover:scale-[1.01] hover:shadow-primary/50">
                    <pre data-prefix=">"><code class="text-lg">const admirationLevel = 'MAX_FLAME';</code></pre>
                    <pre
                        data-prefix=">"><code class="text-lg">const message = 'Merci pour Vue, Vite et tout le reste !';</code></pre>
                    <pre data-prefix=">"><code class="text-lg">const creatorStatus = 'LEGEND';</code></pre>
                </div>

                <p class="mt-6 text-base">
                    "Son travail a transformé la manière dont les développeurs abordent le développement front-end. La
                    simplicité, la performance et l'élégance de Vue.js et de Vite sont une preuve de son génie et de son
                    dévouement à rendre le développement web plus agréable et plus efficace."
                </p>

                <div class="card-actions justify-end mt-4">
                    <button class="btn btn-primary btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                        Je suis fan !
                    </button>
                </div>
            </div>
        </div>

        <!-- Section Détails Techniques (Vue & Vite) -->
        <h2 class="text-3xl font-bold text-center mt-12 mb-6 border-b pb-2">Ses Contributions Majeures</h2>

        <div class="grid md:grid-cols-2 gap-6">

            <!-- Carte pour Vue.js -->
            <div class="card bg-success text-success-content shadow-xl">
                <div class="card-body">
                    <h3 class="card-title text-3xl">Vue.js</h3>
                    <p>Un framework JavaScript progressif, axé sur l'accessibilité et la simplicité. Vue 3 a introduit
                        la Composition API, révolutionnant la manière de structurer la logique complexe.</p>
                    <ul class="list-disc list-inside mt-3 space-y-1 text-sm">
                        <li>Simplicité d'apprentissage</li>
                        <li>Performances exceptionnelles</li>
                        <li>Système de réactivité fiable</li>
                    </ul>
                </div>
            </div>

            <!-- Carte pour Vite.js -->
            <div class="card bg-info text-info-content shadow-xl">
                <div class="card-body">
                    <h3 class="card-title text-3xl">Vite.js</h3>
                    <p>Un outil de *build* nouvelle génération qui exploite les modules ES natifs du navigateur pour
                        offrir un démarrage de serveur ultra-rapide et un HMR instantané.</p>
                    <ul class="list-disc list-inside mt-3 space-y-1 text-sm">
                        <li>Démarrage quasi instantané</li>
                        <li>Hot Module Replacement (HMR) fulgurant</li>
                        <li>Support natif des technologies modernes</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Citation de fin -->
        <div class="alert shadow-lg mt-10 max-w-2xl mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                class="stroke-current shrink-0 w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>"Un développeur qui a véritablement rendu la vie meilleure à des millions de ses pairs. Respect
                éternel !"</span>
        </div>
    </div>
</template>

<script setup>
// Pas de logique spécifique ici, c'est purement un composant de présentation.
</script>

<style scoped>
/* Le CSS est minimal car nous comptons uniquement sur Tailwind et DaisyUI */
</style>
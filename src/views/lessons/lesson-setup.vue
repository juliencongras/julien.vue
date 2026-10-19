<template>
    <div class="container mx-auto px-4 py-10">
        <!-- Titre principal -->
        <h1 class="text-4xl font-bold text-center mb-8">
            🚀 Installation et Configuration de l’Environnement
        </h1>
        <p class="text-center text-lg mb-12">
            Dans cette leçon, nous allons voir comment installer et configurer votre environnement de développement pour
            Vue 3 ou Nuxt 4 avec Vite.
        </p>

        <!-- Section prérequis -->
        <div class="card bg-base-100 shadow-xl mb-10">
            <div class="card-body">
                <h2 class="card-title">📦 Prérequis</h2>
                <p>Avant de commencer, assurez-vous d’avoir installé :</p>
                <ul class="list-disc list-inside ml-4">
                    <li>Node.js ≥ 18.x (recommandé)</li>
                    <li>npm, pnpm ou yarn (gestionnaires de paquets)</li>
                    <li>Un éditeur de code comme VSCode</li>
                </ul>
            </div>
        </div>

        <!-- Section Installation Vue 3 -->
        <div class="card bg-base-100 shadow-xl mb-10">
            <div class="card-body">
                <h2 class="card-title">🌱 Créer une application Vue 3 avec Vite</h2>
                <p>Utilisez la commande suivante pour créer une application Vue 3 :</p>
                <div class="mockup-code mb-6">
                    <pre data-prefix="$"><code>npm create vite@latest mon-projet-vue3</code></pre>
                    <pre data-prefix="#" class="text-success"><code># ou avec pnpm</code></pre>
                    <pre data-prefix="$"><code>pnpm create vite mon-projet-vue3</code></pre>
                </div>
                <p>Choisissez <strong>Vue</strong> ou <strong>Vue + TypeScript</strong> dans le menu.</p>
                <p>Puis installez les dépendances :</p>
                <div class="mockup-code mb-6">
                    <pre data-prefix="$"><code>cd mon-projet-vue3</code></pre>
                    <pre data-prefix="$"><code>npm install</code></pre>
                    <pre data-prefix="$"><code>npm run dev</code></pre>
                </div>
            </div>
        </div>

        <!-- Section Installation Nuxt 4 -->
        <div class="card bg-base-100 shadow-xl mb-10">
            <div class="card-body">
                <h2 class="card-title">🔥 Créer une application Nuxt 4 avec Vite</h2>
                <p>Nuxt 4 utilise Vite par défaut. Utilisez la commande suivante :</p>
                <div class="mockup-code mb-6">
                    <pre data-prefix="$"><code>npx nuxi@latest init mon-projet-nuxt4</code></pre>
                    <pre data-prefix="#" class="text-success"><code># ou avec pnpm</code></pre>
                    <pre data-prefix="$"><code>pnpm dlx nuxi init mon-projet-nuxt4</code></pre>
                </div>
                <p>Puis installez les dépendances :</p>
                <div class="mockup-code mb-6">
                    <pre data-prefix="$"><code>cd mon-projet-nuxt4</code></pre>
                    <pre data-prefix="$"><code>npm install</code></pre>
                    <pre data-prefix="$"><code>npm run dev</code></pre>
                </div>
            </div>
        </div>

        <!-- Conseils supplémentaires -->
        <div class="alert alert-info">
            <span>💡 Astuce : Vous pouvez utiliser <strong>pnpm</strong> pour des installations plus rapides et plus
                économes en espace disque.</span>
        </div>
    </div>
</template>

<script setup>
// Ici, on peut ajouter de la logique si nécessaire plus tard
</script>
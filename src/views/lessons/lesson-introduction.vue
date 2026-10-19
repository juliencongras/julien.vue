<template>
    <div class="container mx-auto p-4 sm:p-8">
        <div class="text-center mb-8">
            <h1 class="text-4xl md:text-5xl font-extrabold text-primary">{{ themeTitle }}</h1>
            <p class="text-lg md:text-xl text-base-content opacity-75 mt-2">Découvrez les bases et les nouveautés de
                Vue.js 3</p>
        </div>

        <div class="flex flex-col lg:flex-row gap-6">
            <!-- Liste des sections (Tabs de DaisyUI) -->
            <div class="lg:w-1/3">
                <ul class="menu bg-base-100 p-2 rounded-box shadow-lg">
                    <li v-for="(section, index) in sections" :key="index" :class="{ 'bordered': activeIndex === index }"
                        @click="setActiveIndex(index)" class="rounded-box" style="cursor: pointer;">
                        <a>{{ section.title }}</a>
                    </li>
                </ul>
            </div>

            <!-- Contenu de la section active -->
            <div class="lg:w-2/3">
                <div class="card bg-base-100 shadow-xl rounded-box">
                    <div class="card-body">
                        <h5 class="card-title text-2xl font-bold text-primary">{{ sections[activeIndex].title }}</h5>
                        <p class="text-base-content opacity-80 mt-2 whitespace-pre-line">{{
                            sections[activeIndex].content }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang='js'>
import { ref } from 'vue'
// Contenu du thème
const themeTitle = "Introduction à Vue.js 3";
const sections = [
    {
        title: "Vue.js : qu'est-ce que c'est ?",
        content: "Vue.js est un framework JavaScript progressif pour la construction d'interfaces utilisateur. Il est conçu pour être facilement adoptable. Sa force réside dans sa simplicité, sa performance et sa flexibilité, ce qui le rend adapté aussi bien pour de petits projets que pour des applications de grande envergure.",
    },
    {
        title: "Les débuts de Vue.js",
        content: "Vue.js a été créé par Evan You, un ancien ingénieur chez Google, alors qu'il travaillait sur des applications pour le navigateur. Il a été officiellement lancé en février 2014, avec une vision de créer un framework plus léger et plus simple que les solutions existantes comme AngularJS.",
    },
    {
        title: "Vue 2 : l'explosion de popularité",
        content: "La version 2.0, sortie en 2016, a été un tournant majeur. Elle a introduit un Virtual DOM et des optimisations de rendu, ce qui a considérablement amélioré les performances. C'est à partir de là que Vue.js a gagné en popularité et a attiré une communauté de développeurs massive et dévouée.",
    },
    {
        title: "Nouveautés de Vue 3",
        content: "Vue 3, sorti en septembre 2020, est la version la plus récente et la plus performante. Les nouveautés les plus importantes incluent :\n\n- **La Composition API :** Une nouvelle manière d'organiser et de réutiliser la logique de votre code, idéale pour les applications complexes.\n- **Un moteur de rendu plus rapide :** Des optimisations internes qui rendent Vue 3 encore plus performant.\n- **Prise en charge de TypeScript :** Une intégration plus simple pour les développeurs utilisant TypeScript.",
    },
    {
        title: "L'écosystème Vue",
        content: "L'écosystème de Vue est riche et varié. Il inclut :\n\n- **Pinia :** La solution de gestion des états recommandée.\n- **Vue Router :** Le routeur officiel pour les applications monopages (SPA).\n- **Nuxt :** Le framework au-dessus de Vue qui offre le rendu côté serveur (SSR), la génération de sites statiques et de nombreuses autres fonctionnalités avancées.\n- **Vuetify & Quasar :** Des bibliothèques de composants d'interface utilisateur pour créer de beaux designs rapidement.",
    },
    {
        title: "Pourquoi choisir Vue ?",
        content: "Vue.js est souvent choisi pour sa courbe d'apprentissage douce, sa documentation exceptionnelle et son équilibre entre la simplicité et les fonctionnalités avancées. Sa communauté est connue pour être amicale et très active, ce qui est un atout pour les développeurs, qu'ils soient débutants ou expérimentés.",
    },
];

// Variable pour le contenu actif
const activeIndex = ref(0);

// Fonction pour changer la section affichée
const setActiveIndex = (index) => {
    activeIndex.value = index;
};

</script>

<style scoped lang="css">
/* DaisyUI s'occupe du style, pas de CSS nécessaire ici. */
</style>
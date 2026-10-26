<template>
    <div class="container mx-auto p-4 md:p-8">
        <div class="text-center mb-8">
            <h1 class="text-4xl md:text-5xl font-extrabold text-primary">Les Props en Vue.js</h1>
            <p class="text-lg md:text-xl text-base-content opacity-75 mt-2">
                Les <strong class="text-primary">props</strong> (propriétés) sont utilisées pour transmettre des données
                d'un composant parent à un composant enfant.
            </p>
        </div>

        <section id="definition" class="mb-8">
            <div class="card bg-base-100 shadow-xl rounded-box p-6">
                <h2 class="card-title text-2xl font-bold mb-3">Qu'est-ce qu'une prop ?</h2>
                <p class="text-base-content opacity-80">
                    Une prop est une donnée que le composant parent peut passer au composant enfant pour personnaliser
                    son comportement ou son affichage.
                    Les props sont déclarées dans le composant enfant et transmises via des attributs dans le parent.
                </p>
            </div>
        </section>

        <section id="example" class="mb-8">
            <h2 class="font-bold text-2xl mb-3 text-center">Exemple avec Props</h2>
            <p class="text-base-content opacity-80 mb-4 text-center">Voici un exemple simple d'utilisation des props
                dans un composant enfant :</p>
            <div class="flex flex-col lg:flex-row gap-4 justify-center">
                <div class="w-full lg:w-1/2">
                    <MessageCard title="Super MSG Important" content="Ceci est un message important pour l'utilisateur. on test des props"
                        type="important" />
                </div>
                <div class="w-full lg:w-1/2">
                    <MessageCard title="eoeoeo" content="Vous avez une nouvelle notification."
                         />
                </div>
            </div>
        </section>

        <div class="text-center mt-8">
            <p class="text-sm opacity-75">
                Pour en savoir plus, consultez la
                <a href="https://vuejs.org/guide/essentials/props.html" class="link link-hover link-primary"
                    target="_blank">
                    documentation officielle sur les props
                </a>.
            </p>
        </div>
    </div>
</template>


<script setup lang='js'>
import MessageCard from '../../components/MessageCard.vue';
</script>

<style scoped lang="css">
/* Les styles sont gérés par DaisyUI et Tailwind, pas de CSS nécessaire ici. */
</style>
<template>
    <div class="container mx-auto p-4 md:p-8">
        <div class="text-center mb-8 md:mb-12">
            <h1 class="text-4xl md:text-5xl font-extrabold text-primary">
                Comprendre la Directive <code class="text-secondary">v-on</code>
            </h1>
            <p class="text-lg md:text-xl text-base-content opacity-75 mt-2 max-w-2xl mx-auto">
                La directive `v-on` est utilisée pour écouter les événements utilisateur et y répondre de manière réactive.
            </p>
        </div>

        <!-- Section Définition -->
        <div class="card bg-base-100 shadow-xl mb-6">
            <div class="card-body">
                <h2 class="card-title text-2xl font-bold mb-4">Qu'est-ce que <code class="text-secondary">v-on</code> ?</h2>
                <p>
                    La directive `v-on` vous permet d'attacher des gestionnaires d'événements à des éléments du DOM. Elle est utilisée avec la syntaxe <code class="text-warning">v-on:event="handler"</code> ou sous sa forme abrégée <code class="text-warning">@event="handler"</code>.
                </p>
                <p>
                    Les événements couramment utilisés incluent : `click`, `submit`, `keyup`, et bien d'autres.
                </p>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Exemple de Base -->
            <div class="card bg-base-100 shadow-xl rounded-box">
                <div class="card-body">
                    <h2 class="card-title text-2xl font-bold">Exemple de Base</h2>
                    <p class="mb-4">
                        Un événement `click` est utilisé pour incrémenter un compteur :
                    </p>
                    <div class="mockup-code mb-4">
                        <pre><code><span class="text-info">&lt;button</span> <span class="text-warning">@click</span>="increment" <span class="text-info">class="btn btn-primary"&gt;</span>Cliquez-moi&lt;/button&gt;</code></pre>
                        <pre><code><span class="text-info">&lt;p&gt;</span>Compteur : {{ counter }}&lt;/p&gt;</code></pre>
                    </div>
                    <div class="card-actions justify-center mt-4">
                        <button v-on:click="increment" class="btn btn-primary mb-3">Cliquez-moi</button>
                        <!-- Ci dessous exemple d'un event modifiers au click droit de la souris -->
                        <!-- <button v-on:click.right="increment" class="btn btn-primary mb-3">Cliquez-moi</button> -->
                        <!-- <button @click="increment" class="btn btn-primary mb-3">Cliquez-moi</button> -->
                        <p class="text-xl">Compteur : {{ counter }}</p>
                    </div>
                </div>
            </div>

            <!-- Exemple Dynamique -->
            <div class="card bg-base-100 shadow-xl rounded-box">
                <div class="card-body">
                    <h2 class="card-title text-2xl font-bold">Exemple Dynamique avec Paramètres</h2>
                    <p class="mb-4">
                        Passons un paramètre pour afficher un message dynamique :
                    </p>
                    <div class="mockup-code mb-4">
                        <pre><code><span class="text-info">&lt;button</span> <span class="text-warning">@click</span>="showMessage('Bonjour!')" <span class="text-info">class="btn btn-success"&gt;</span>Afficher Message&lt;/button&gt;</code></pre>
                        <pre><code><span class="text-info">&lt;p&gt;</span>Message : {{ message }}&lt;/p&gt;</code></pre>
                    </div>
                    <div class="card-actions justify-center flex-col w-full">
                        <button v-on:click="showMessage('Bonjour!')" class="btn btn-success mb-3">Afficher Message</button>
                        <p class="text-xl">Message : {{ message }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Section Avancée -->
        <div class="card bg-base-100 shadow-xl rounded-box mt-6">
            <div class="card-body">
                <h2 class="card-title text-2xl font-bold">Exemple Avancé : Événements Clavier et Souris</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <!-- Clavier -->
                    <div>
                        <p class="mb-2">
                            Détecter la touche Entrée :
                        </p>
                        <input
                            @keydown.enter="submitForm"
                            class="input input-bordered w-full"
                            placeholder="Appuyez sur Entrée pour soumettre"
                        />
                        <div class="alert mt-3" :class="{'alert-success': submitted, 'alert-info': !submitted}">
                          <p>Formulaire soumis : {{ submitted ? 'Oui' : 'Non' }}</p>
                        </div>
                    </div>
                    <!-- Input -->
                    <div>
                        <p class="mb-2">
                            Capter la valeur d'un input :
                        </p>
                        <input
                          v-on:input="capterInput($event)"
                          type="text"
                          class="input input-bordered w-full"
                          placeholder="Tapez ici"
                        />
                        <p class="mt-3 text-lg font-semibold">Chaîne captée : <span class="text-primary">{{ uneString }}</span></p>
                    </div>
                    <!-- Clic -->
                    <div class="col-span-1 md:col-span-2">
                        <p class="mb-2">
                            Capter l'événement de clic :
                        </p>
                        <button v-on:click="capterClickEvent" class="btn btn-outline-primary w-full">Cliquer ici</button>
                        <div class="mt-3 text-sm">
                          <p>Position du clic :</p>
                          <p>X: {{ clickCoords.x }}</p>
                          <p>Y: {{ clickCoords.y }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div class="text-center mt-8">
            <p class="text-sm md:text-base text-base-content opacity-50">
                Consultez la
                <a href="https://vuejs.org/guide/essentials/event-handling.html" class="link link-hover text-primary font-bold" target="_blank">
                    documentation officielle de Vue.js
                </a> pour plus d'informations.
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Données pour la section de base
const counter = ref(0);
const message = ref('');

// Données pour la section avancée
const uneString = ref('Hello');
const submitted = ref(false);
const clickCoords = ref({ x: 0, y: 0 });

// Fonctions de la section de base
function increment() {
    counter.value++;
}
function showMessage(msg) {
    message.value = msg;
}

// Fonctions de la section avancée
function capterInput(event) {
    console.log('event');
    console.log(event);
    uneString.value = event.target.value;
}
function capterClickEvent(event) {
    console.log(event);
    
    clickCoords.value.x = event.clientX;
    clickCoords.value.y = event.clientY;
}
function submitForm() {
    submitted.value = true;
}
</script>

<style scoped>
/* Les styles sont gérés par DaisyUI et Tailwind. */
</style>

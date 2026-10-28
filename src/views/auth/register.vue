<template>
    <div class="mx-auto max-w-md p-4 md:p-8">

        <h1 class="text-3xl font-bold text-center mb-6 text-secondary">
            Créer un Compte
        </h1>

        <div class="card bg-base-100 shadow-2xl border border-primary/50">
            <div class="card-body">

                <form @submit.prevent="register" class="space-y-4">

                    <div class="form-control">
                        <label class="label" for="email">
                            <span class="label-text">Adresse Email</span>
                        </label>
                        <input type="email" v-model="email" id="email" class="input input-bordered w-full"
                            placeholder="votre@email.com" required />
                    </div>

                    <div class="form-control">
                        <label class="label" for="password">
                            <span class="label-text">Mot de passe</span>
                        </label>
                        <input type="password" v-model="password" id="password" class="input input-bordered w-full"
                            placeholder="Minimum 6 caractères" required />
                    </div>

                    <div class="form-control">
                        <label class="label" for="confirmPassword">
                            <span class="label-text">Confirmez le mot de passe</span>
                        </label>
                        <input type="password" v-model="confirmPassword" id="confirmPassword"
                            class="input input-bordered w-full" required />
                    </div>

                    <div class="card-actions justify-end pt-4">
                        <button type="submit" class="btn btn-primary w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.75a7.5 7.5 0 0110.605 10.605 7.5 7.5 0 01-10.605 0M9 10.5h.008v.008H9v-.008z" />
                            </svg>
                            S'inscrire
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <p class="text-center mt-6 text-sm opacity-80">
            Vous avez déjà un compte ?
            <router-link to="/auth/login" class="link link-hover link-primary font-semibold">
                Connectez-vous
            </router-link>.
        </p>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useRouter, RouterLink } from "vue-router"; // Importez RouterLink

const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const router = useRouter();

async function register() {
    if (password.value !== confirmPassword.value) {
        alert("Les mots de passe ne correspondent pas.");
        return;
    }

    try {
        // Si vous utilisez la route nommée 'Dashboard' :
        // Assurez-vous que cette route existe bien dans votre router/index.js
        await createUserWithEmailAndPassword(auth, email.value, password.value);
        alert("Inscription réussie !");
        router.push({ name: "home" });
    } catch (error) {
        // DaisyUI permettrait ici d'utiliser un composant Toast ou Modal plus élégant que alert()
        alert("Erreur lors de l'inscription : " + error.message);
    }
}
</script>
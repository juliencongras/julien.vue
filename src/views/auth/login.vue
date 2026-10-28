<template>
  <div class="mx-auto max-w-md p-4 md:p-8">

    <h1 class="text-3xl font-bold text-center mb-6 text-primary">
      Se Connecter
    </h1>

    <div class="card bg-base-100 shadow-2xl border border-secondary/50">
      <div class="card-body">

        <form @submit.prevent="login" class="space-y-4">

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
              placeholder="Entrez votre mot de passe" required />
          </div>

          <div class="card-actions justify-end pt-4">
            <button type="submit" class="btn btn-primary w-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3-3h-9m6 6l3-3m0 0l-3-3" />
              </svg>
              Se connecter
            </button>
          </div>
        </form>
      </div>
    </div>

    <p class="text-center mt-6 text-sm opacity-80">
      Vous n'avez pas encore de compte ?
      <router-link to="/auth/register" class="link link-hover link-secondary font-semibold">
        Inscrivez-vous
      </router-link>.
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useRouter, RouterLink } from "vue-router"; // Importez RouterLink

const email = ref("");
const password = ref("");
const router = useRouter();

async function login() {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    // Assurez-vous que la route 'home' existe
    router.push({ name: "home" });
  } catch (error) {
    // DaisyUI permettrait ici d'utiliser un composant Toast ou Modal plus élégant que alert()
    alert("Erreur de connexion : " + error.message);
  }
}
</script>
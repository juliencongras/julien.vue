<template>
  <div class="mx-auto max-w-xl p-4 md:p-8">
    
    <h1 class="text-3xl font-bold text-center mb-6 text-primary">Ajouter un Nouvel Article</h1>

    <div class="card bg-base-100 shadow-xl border border-base-200">
      <div class="card-body">
        
        <form @submit.prevent="addArticle" class="space-y-4">
          
          <div class="form-control">
            <label class="label" for="article-title">
              <span class="label-text">Titre de l'article</span>
            </label>
            <input
              type="text"
              id="article-title"
              v-model="title"
              class="input input-bordered w-full"
              placeholder="Ex: Les bases de Vue 3"
              required
            />
          </div>
          
          <div class="form-control">
            <label class="label" for="article-content">
              <span class="label-text">Contenu de l'article</span>
            </label>
            <textarea
              id="article-content"
              v-model="content"
              class="textarea textarea-bordered h-32 w-full"
              rows="5"
              placeholder="Rédigez le contenu ici..."
              required
            ></textarea>
          </div>
          
          <div class="card-actions justify-end pt-4">
            <button type="submit" class="btn btn-primary w-full md:w-auto">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Ajouter l'Article
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ArticleDataService from "../services/ArticleDataService"; 

// Champs du formulaire
const title = ref("");
const content = ref("");

// Fonction pour ajouter un article
const addArticle = async () => {
  try {
    const newArticle = {
      title: title.value,
      content: content.value,
      timestamp: Date.now(), // Utilisez Date.now() pour un timestamp numérique simple
      author: "'GONTRAND'",
    };

    await ArticleDataService.create(newArticle);

    // Utilisation d'un composant de notification DaisyUI (imaginons) ou l'alerte native
    // alert("Article ajouté avec succès !"); 
    title.value = "";
    content.value = "";
  } catch (error) {
    console.error("Erreur lors de l'ajout de l'article :", error);
    alert("Une erreur est survenue. Veuillez réessayer.");
  }
};
</script>

<style scoped>
/* Le CSS custom est géré par Tailwind : max-w-xl et mx-auto */
</style>
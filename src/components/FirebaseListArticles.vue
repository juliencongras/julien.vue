<template>
    <div class="mx-auto max-w-4xl p-4 md:p-8 bg-base-100 min-h-screen">
        <h1 class="text-4xl font-extrabold mb-6 text-center text-primary">
            Liste des Articles
        </h1>

        <div v-if="loading" class="text-center py-12">
            <span class="loading loading-spinner loading-lg text-primary"></span>
            <p class="mt-4 text-lg">Chargement des articles...</p>
        </div>

        <div v-else-if="articles.length === 0" class="text-center py-12">
            <div class="alert alert-warning shadow-lg max-w-md mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.394 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>Aucun article disponible pour le moment.</span>
            </div>
        </div>

        <div v-else class="space-y-6">
            <div v-for="(article, index) in articles" :key="article.id"
                class="card bg-base-200 shadow-xl border border-base-300 transition-shadow duration-300 hover:shadow-2xl">
                <div class="card-body p-6">

                    <div v-if="editArticleId === article.id">
                        <h3 class="card-title text-2xl mb-4">Modifier l'Article</h3>

                        <div class="form-control mb-3">
                            <label class="label"><span class="label-text">Titre</span></label>
                            <input v-model="editTitle" class="input input-bordered w-full"
                                placeholder="Titre de l'article" />
                        </div>

                        <div class="form-control mb-4">
                            <label class="label"><span class="label-text">Contenu</span></label>
                            <textarea v-model="editContent" class="textarea textarea-bordered h-24 w-full"
                                placeholder="Contenu de l'article"></textarea>
                        </div>

                        <div class="card-actions justify-end">
                            <button class="btn btn-success" @click="saveArticle(article.id)">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path
                                        d="M7.784 14.714L11.517 9.873l-1.352-1.352-3.733 4.841 1.352 1.352zM12 4a2 2 0 00-2 2v2H8a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 00-2-2h-2V6a2 2 0 00-2-2z" />
                                </svg>
                                Enregistrer
                            </button>
                            <button class="btn btn-ghost" @click="cancelEdit">
                                Annuler
                            </button>
                        </div>
                    </div>

                    <div v-else>
                        <h3 class="card-title text-2xl text-secondary mb-2">{{ article.title }}</h3>
                        <p class="text-base-content opacity-90 mb-4 whitespace-pre-line">{{ article.content }}</p>

                        <small class="text-xs opacity-70 block mb-4">
                            Publié le : {{ formatDate(article.timestamp) }}
                        </small>

                        <div class="card-actions justify-end">
                            <button class="btn btn-primary btn-sm" @click="startEditing(article)">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M16.862 4.487l1.493-1.493a1.5 1.5 0 012.122 0l1.248 1.248c.586.586.586 1.536 0 2.122l-1.493 1.493m-2.122-4.244l-8.587 8.587a1.5 1.5 0 00-.439.816l-.28 2.378a.75.75 0 00.916.916l2.378-.28a1.5 1.5 0 00.816-.439l8.587-8.587m-2.122-4.244l-4.244-4.244" />
                                </svg>
                                Modifier
                            </button>

                            <button class="btn btn-error btn-sm" @click="deleteArticle(article.id)">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.24 6.636m18.064 0l-12.012 0m-8.052 0l-12.012 0m20.104 0L6.75 4.5h.375c.342 0 .674.067.993.195M12 1.5a.75.75 0 00.75-.75h-1.5a.75.75 0 00.75.75zM12 1.5v21" />
                                </svg>
                                Supprimer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ArticleDataService from "../services/ArticleDataService";

// (Le script setup reste identique, car il contient la logique et non le style)
const articles = ref([]);
const loading = ref(true);
const editArticleId = ref(null);
const editTitle = ref("");
const editContent = ref("");

const loadArticles = () => {
    ArticleDataService.getAll((snapshot) => {
        if (snapshot.exists()) {
            //Snapshot .val () 
            const data = snapshot.val();
            // On transformes la totalité des articles de la base (en Json) vers des objets JS
            console.log('data', data);
            articles.value = Object.keys(data).map((id) => ({ id, ...data[id] }));
        } else {
            articles.value = [];
        }
        loading.value = false;
    });
};

const deleteArticle = async (id) => {
    // if (confirm("Êtes-vous sûr de vouloir supprimer cet article ?")) {
        try {
            await ArticleDataService.delete(id);
            // Pas besoin de refaire un GetAll car on a déjà les articles dans la variable articles
            // Cela nous esquive de faire un appel à la base de données pour récupérer les articles
            // Pas forcément besoin de nous meme remettre à jour la liste 
            // On a déjà la reactivité de VUE qui nous aide.
            // articles.value = articles.value.filter((article) => article.id !== id);
            // alert("Article supprimé avec succès !");
        } catch (error) {
            console.error("Erreur lors de la suppression :", error);
            alert("Une erreur est survenue lors de la suppression.");
        }
    // }
};

const startEditing = (article) => {
    editArticleId.value = article.id;
    editTitle.value = article.title;
    editContent.value = article.content;
};

const cancelEdit = () => {
    editArticleId.value = null;
    editTitle.value = "";
    editContent.value = "";
};

const saveArticle = async (id) => {
    if (editTitle.value.trim() && editContent.value.trim()) {
        try {
            
            await ArticleDataService.update(id, {
                title: editTitle.value,
                content: editContent.value,
                timestamp: Date.now(),
            });
            const articleIndex = articles.value.findIndex((article) => article.id === id);
            articles.value[articleIndex].title = editTitle.value;
            articles.value[articleIndex].content = editContent.value;
            editArticleId.value = null;
            editTitle.value = "";
            editContent.value = "";
            // alert("Article mis à jour avec succès !");
        } catch (error) {
            console.error("Erreur lors de la mise à jour :", error);
            // alert("Une erreur est survenue lors de la mise à jour.");
        }
    } else {
        alert("Les champs ne peuvent pas être vides.");
    }
};

const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString("fr-FR", {
        dateStyle: "medium",
        timeStyle: "short",
    });
};
// On charge tous les articles dans le tableau au début de la vie du composant
onMounted(loadArticles);

</script>

<style scoped>
/*
 * Les styles personnalisés ne sont plus nécessaires car tout est géré par Tailwind et DaisyUI.
 * J'ai ajouté `whitespace-pre-line` à <p> pour conserver les sauts de ligne tapés dans le textarea.
 */
</style>
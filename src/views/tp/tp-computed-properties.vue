<template>
    <h1 class="text-3xl font-bold mb-6 text-center">Dashboard de Support Technique</h1>
    <div class="flex flex-col items-center justify-center">

    </div>
</template>

<script setup lang='js'>
import { ref } from 'vue';

// 1° Données initiales (Mock de tickets)
const tickets = ref([
    { id: 1, titre: "Impossible de se connecter à la base de données", categorie: "Infrastructure", priorite: "Haute" },
    { id: 2, titre: "Erreur 500 lors de la validation du panier", categorie: "Backend", priorite: "Haute" },
    { id: 3, titre: "Le bouton de déconnexion est mal aligné sur mobile", categorie: "UI/UX", priorite: "Basse" },
    { id: 4, titre: "Lenteur excessive sur l'affichage du tableau de bord", categorie: "Performance", priorite: "Moyenne" },
    { id: 5, titre: "Le formulaire de contact n'envoie pas d'email", categorie: "Backend", priorite: "Moyenne" },
    { id: 6, titre: "Mettre à jour le logo dans le header", categorie: "UI/UX", priorite: "Basse" }
]);

</script>
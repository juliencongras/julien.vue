<template>
    <h1 class="text-3xl font-bold mb-6 text-center">Dashboard de Support Technique</h1>
    <div class="flex flex-col items-center justify-center">

        <div class="flex flex-row items-center justify-around text-center p-8">
            <div class="stats shadow-sm bg-base-200 border border-base-300 w-full">
              <div class="stat">
                <div class="stat-title font-medium text-base-content/70">Tickets affichés :</div>
                <div class="stat-value font-extrabold text-5xl my-1">{{ filteredTickets.length }}</div>
              </div>
            </div>
            <div class="stats shadow-sm bg-base-200 border border-base-300 w-full">
              <div class="stat">
                <div class="stat-title font-medium text-base-content/70">Part de tickets urgents :</div>
                <div class="stat-value text-error font-extrabold text-5xl my-1"> {{ highPriorityTicketsPercent }}%</div>
              </div>
            </div>
        </div>

        <div class="card bg-base-100 w-fit shadow-sm">
          <div class="card-body flex flex-row">
            <div class="p-1">
                <h2 class="card-title">Rechercher un ticket :</h2>
                <input type="text" class="input" placeholder="Ex: base de données" v-model="ticketSearch" />
            </div>
            <div class="p-1">
                <h2 class="card-title">Filtrer par priorité :</h2>
                <select class="select" v-model="priorityFilter">
                    <option selected>Toutes les priorités</option>
                    <option>Haute</option>
                    <option>Moyenne</option>
                    <option>Basse</option>
                </select>
            </div>
          </div>
        </div>

        <div>
            <p>Liste des incidents ()</p>
            <div class="card bg-base-100 w-fit shadow-sm w-full m-3" v-for="(ticket, index) in filteredTickets" :key="ticket.id">
              <div class="card-body flex flex-row justify-between">
                <div class="p-1">
                    <div class="badge badge-neutral">{{ ticket.categorie }}</div>
                    <p>{{ ticket.titre }}</p>
                </div>
                <div class="p-1">
                    <div class="badge badge-success" v-if="ticket.priorite == 'Basse'">Basse</div>
                    <div class="badge badge-warning" v-else-if="ticket.priorite == 'Moyenne'">Moyenne</div>
                    <div class="badge badge-error" v-else>Haute</div>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script setup lang='js'>
import { computed, ref } from 'vue';

// 1° Données initiales (Mock de tickets)
const tickets = ref([
    { id: 1, titre: "Impossible de se connecter à la base de données", categorie: "Infrastructure", priorite: "Haute" },
    { id: 2, titre: "Erreur 500 lors de la validation du panier", categorie: "Backend", priorite: "Haute" },
    { id: 3, titre: "Le bouton de déconnexion est mal aligné sur mobile", categorie: "UI/UX", priorite: "Basse" },
    { id: 4, titre: "Lenteur excessive sur l'affichage du tableau de bord", categorie: "Performance", priorite: "Moyenne" },
    { id: 5, titre: "Le formulaire de contact n'envoie pas d'email", categorie: "Backend", priorite: "Moyenne" },
    { id: 6, titre: "Mettre à jour le logo dans le header", categorie: "UI/UX", priorite: "Basse" }
]);

const ticketSearch = ref('');
const priorityFilter = ref('');
const highPriorityTicketsPercent = ref('')

const filteredTickets = computed(() => {
    console.log("Value of prioeity filter :",priorityFilter.value.type);
    
    let searchedArray = tickets.value;

    if(ticketSearch.value){
        searchedArray = searchedArray.filter((oneSearched) => oneSearched.titre == ticketSearch.value)
    }
    if(priorityFilter.value != ("Toutes les priorités" || false)){
        searchedArray = searchedArray.filter((oneSearched) => oneSearched.priorite == priorityFilter.value)
    }

    return searchedArray;
});
</script>
<script setup>
import { ref, computed } from 'vue'

// 1° Données initiales (Mock de tickets)
const tickets = ref([
  { id: 1, titre: "Impossible de se connecter à la base de données", categorie: "Infrastructure", priorite: "Haute" },
  { id: 2, titre: "Erreur 500 lors de la validation du panier", categorie: "Backend", priorite: "Haute" },
  { id: 3, titre: "Le bouton de déconnexion est mal aligné sur mobile", categorie: "UI/UX", priorite: "Basse" },
  { id: 4, titre: "Lenteur excessive sur l'affichage du tableau de bord", categorie: "Performance", priorite: "Moyenne" },
  { id: 5, titre: "Le formulaire de contact n'envoie pas d'email", categorie: "Backend", priorite: "Moyenne" },
  { id: 6, titre: "Mettre à jour le logo dans le header", categorie: "UI/UX", priorite: "Basse" }
]);

// 2° États réactifs pour le filtrage (v-model)
const searchQuery = ref('');
const selectedPriority = ref(''); // Chaîne vide = "Toutes les priorités"

// 3° LOGIQUE COMPUTED : Filtrage croisé
const filteredTickets = computed(() => {
  console.log('Filtrage appliqué');
  return tickets.value.filter(ticket => {
    // Filtrage par texte (insensible à la casse)
    const matchesText = ticket.titre
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase())

    // Filtrage par priorité (si aucune sélectionnée, on garde tout)
    const matchesPriority = selectedPriority.value === '' || ticket.priorite === selectedPriority.value

    return matchesText && matchesPriority
  })
});

// 4° LOGIQUE COMPUTED : Statistiques
const totalTickets = computed(() => {
  console.log('Calcul du total des tickets affichés');
  return filteredTickets.value.length;
})

const highPriorityPercentage = computed(() => {
  console.log('Calcul du pourcentage de tickets "Haute" priorité');
  if (totalTickets.value === 0) return 0
  
  // On compte les tickets "Haute" parmi ceux qui sont affichés
  const highPriorityCount = filteredTickets.value.filter(oneTicket => oneTicket.priorite === 'Haute').length
  
  // Calcul du pourcentage arrondi
  return Math.round((highPriorityCount / totalTickets.value) * 100)
})
</script>

<template>
  <div class="dashboard-container">
    <h1>Dashboard de Support Technique</h1>

    <!-- Section Statistiques (KPI) -->
    <div class="stats-grid">
      <div class="card">
        <h3>Tickets Affichés</h3>
        <p class="stat-number">{{ totalTickets }}</p>
      </div>
      <div class="card">
        <h3>Part de tickets "Urgent"</h3>
        <p class="stat-number text-danger">{{ highPriorityPercentage }}%</p>
      </div>
    </div>

    <!-- Section Formulaire de filtrage -->
    <div class="filter-bar">
      <div class="form-group">
        <label for="search">Rechercher un ticket :</label>
        <input 
          id="search"
          v-model="searchQuery" 
          type="text" 
          placeholder="Ex: base de données..."
        />
      </div>

      <div class="form-group">
        <label for="priority">Filtrer par priorité :</label>
        <select id="priority" v-model="selectedPriority">
          <option value="">-- Toutes les priorités --</option>
          <option value="Haute">🔴 Haute</option>
          <option value="Moyenne">🟡 Moyenne</option>
          <option value="Basse">🟢 Basse</option>
        </select>
      </div>
    </div>

    <!-- Liste des tickets -->
    <div class="tickets-section">
      <h2>Liste des incidents ({{ totalTickets }})</h2>
      
      <!-- Message si aucun ticket ne correspond aux filtres -->
      <div v-if="filteredTickets.length === 0" class="no-results">
        Aucun ticket ne correspond à vos critères de recherche.
      </div>

      <ul v-else class="ticket-list">
        <li 
          v-for="ticket in filteredTickets" 
          :key="ticket.id" 
          class="ticket-item"
          :class="`border-${ticket.priorite.toLowerCase()}`"
        >
          <div class="ticket-info">
            <span class="badge">{{ ticket.categorie }}</span>
            <h3>{{ ticket.titre }}</h3>
          </div>
          <span class="priority-tag" :class="ticket.priorite.toLowerCase()">
            {{ ticket.priorite }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* Un peu de style basique pour rendre le rendu propre lors de ta correction */
.dashboard-container {
  max-width: 900px;
  margin: 2rem auto;
  font-family: sans-serif;
  color: #333;
}
.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
}
.card {
  background: #f4f4f9;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
}
.text-danger { color: #dc3545; }
.filter-bar {
  display: flex;
  gap: 1rem;
  background: #e9ecef;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}
.form-group {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.form-group label {
  margin-bottom: 0.5rem;
  font-weight: bold;
}
.form-group input, .form-group select {
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
}
.ticket-list {
  list-style: none;
  padding: 0;
}
.ticket-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-bottom: 0.75rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}
/* Indicateurs visuels de priorité */
.border-haute { border-left: 6px solid #dc3545; }
.border-moyenne { border-left: 6px solid #ffc107; }
.border-basse { border-left: 6px solid #28a745; }
.badge {
  background: #6c757d;
  color: #fff;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
}
.priority-tag {
  font-weight: bold;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}
.priority-tag.haute { background: #f8d7da; color: #721c24; }
.priority-tag.moyenne { background: #fff3cd; color: #856404; }
.priority-tag.basse { background: #d4edda; color: #155724; }
.no-results {
  text-align: center;
  padding: 2rem;
  background: #f8d7da;
  color: #721c24;
  border-radius: 6px;
}
</style>
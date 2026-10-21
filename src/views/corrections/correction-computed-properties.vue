<template>
    <div class="container mx-auto p-4 md:p-8">
        <div class="card bg-base-100 shadow-xl rounded-box p-6">
            <h5 class="card-title text-2xl font-bold mb-4">Computed Bug Mode : Composition</h5>

            <div class="flex flex-col md:flex-row justify-center items-center gap-4 my-6">
                <button @click="reduire(10)" type="button" class="btn btn-error">-</button>
                <h3 class="text-3xl font-bold text-center">Le nombre : <span class="badge badge-lg badge-primary">
                    {{leNombre }}
                </span>
                </h3>
                <button @click="augmenter(20)" type="button" class="btn btn-success">+</button>
            </div>

            <div class="divider"></div>

            <div class="text-center mt-6">
                <p class="text-base-content opacity-80">
                    Résultat de la fonction <code>afficherNameUser()</code> :
                    <span class="badge badge-info">{{ afficherNameUser }}</span>
                    <!-- <span class="badge badge-info">{{ afficherNameUserClassic() }}</span> -->
                    <!-- <span class="badge badge-info">{{ 11==11?'coco':'lolo' }}</span> -->
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang='js'>
import { ref, computed } from 'vue';

// Déclarez vos variables réactives avec `ref`
const leNombre = ref(0);
const nameUser = ref('o');

const afficherNameUserClassic = () => {
    console.log('fonction qui gere le NAME exécutée');
    if (nameUser.value === '') {
        return 'User Connecté'
    }
    else {
        return 'User Offline';
    }
};

// Déclarez vos propriétés calculées avec `computed`
// avec computed, on peut utiliser la fonction directement dans le template
// Computed va relancer la fonction si la valeur de nameUser change
// La fonction se relance que si les dépendances de la fonction (ses variables qu'elle utilise) changent (nameUser)
const afficherNameUser = computed(() => {
  console.log('fonction qui gère le NAME exécutée');
  return nameUser.value === '' ? 'Connecté' : 'Offline';
});

// Déclarez vos méthodes
function augmenter(num) {
  leNombre.value += num;
}

function reduire(num) {
  leNombre.value -= num;
}
</script>

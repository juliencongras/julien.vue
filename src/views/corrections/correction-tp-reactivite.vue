<template>
    <div class="card bg-base-100 shadow-xl border border-base-300 max-w-xl mx-auto overflow-hidden">
      <header class="bg-primary text-primary-content p-6 text-center">
        <h1 class="text-2xl font-black tracking-tight uppercase">
          TP Reactivité:Le Numéro Gagnant
        </h1>
      </header>
  
      <div class="card-body items-center text-center p-8 space-y-6">
        
        <div class="stats shadow-sm bg-base-200 border border-base-300 w-full max-w-xs">
          <div class="stat">
            <div class="stat-title font-medium text-base-content/70">le nombre :</div>
            <div class="stat-value text-primary font-extrabold text-5xl my-1">
              {{ leNombre }}
            </div>
          </div>
        </div>
  
        <div class="min-h-[4rem] flex flex-col justify-center items-center w-full px-4">
          <h3 class="text-xl font-bold tracking-wide text-secondary">
            {{ indice }}
          </h3>
  
          <p v-if="msg" class="alert alert-error mt-3 shadow-md py-2 text-sm font-medium text-error-content">
            {{ msg }}
          </p>
        </div>
  
        <div class="card-actions justify-center w-full">
          <div class="join shadow-md">
            <button v-on:click="augmenter(1)" type="button" class="btn btn-success join-item font-bold px-6">+1</button>
            <button v-on:click="augmenter(5)" type="button" class="btn btn-danger join-item font-bold px-6 bg-error text-error-content border-error hover:bg-error/80">+5</button>
          </div>
        </div>
  
      </div>
    </div>
  </template>
  
  <script setup lang='js'>
  import { ref, computed, watch } from 'vue';
  
  // Variables réactives (Logique d'origine intacte)
  const leNombre = ref(0);
  const msg = ref('');
  
  // Propriété calculée (Logique d'origine intacte)
  const indice = computed(() => {
      if (leNombre.value < 7) {
          return 'ESSAIE ENCORE!';
      } else if (leNombre.value === 7) {
          return `${leNombre.value}...BINGO`;
      } else {
          return 'tu as dépassé le nombre';
      }
  });
  
  // Watcher pour `leNombre` (Logique d'origine intacte)
  watch(leNombre, (newValue) => {
      console.log('le watcher en action...');
      if (newValue > 30) {
          msg.value = 'BCP BCP mais alors bcp TROP';
          setTimeout(() => {
              leNombre.value = 0;
              msg.value = '';
          }, 7000);
      }
  });
  
  // Méthode pour augmenter le nombre (Logique d'origine intacte)
  function augmenter(num) {
      leNombre.value += num;
  }
  </script>
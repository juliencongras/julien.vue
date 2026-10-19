<template>
<!-- <AppHeader /> -->
<!-- <AppFooter /> -->
<!-- <app-header></app-header> -->
<!-- <app-footer></app-footer> -->
<!-- <AppHeader></AppHeader> -->
<!-- <AppFooter></AppFooter> -->

  <div class="min-h-screen flex flex-col bg-base-200 text-base-content">
    <!-- 👇 Ici cela afficher le composant de la navbar -->
    <AppHeader />
    <div class="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8">
        <!-- !Router view ca sera la ou va se faire le rendu des composants qui correspondent à la route courante -->
      <router-view></router-view>
    </div>
      <!-- 👇 Ici cela afficher le composant du Footer -->
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>
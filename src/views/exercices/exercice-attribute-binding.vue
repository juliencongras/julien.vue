<template>
  <div class="container mx-auto p-6">
    <div class="card bg-base-100 shadow-xl rounded-box">
      <div class="card-body">
        <h5 class="text-2xl font-bold">Attribute Binding Mode : Composition</h5>
        <p>Lien dynamique</p>
        <p>Nous utilisons ici v-bind:href ou sa syntaxe abrégée :href pour lier l'attribut 'href' à une variable.</p>
        <a class="btn btn-primary" v-bind:href="leLien">LIEN DYNAMIQUE (v-bind)</a>
        <a class="btn btn-secondary" :href="leLien">LIEN DYNAMIQUE (:)</a>
        <p>Liaison d'images</p>
        <p>La liaison d'attributs s'applique également aux balises img pour charger des images dynamiquement.</p>
        <img v-bind:src="laImg">
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const leLien = ref('https://vuejs.org');
  const laImg = ref('https://picsum.photos/400/300')
</script>
<template>
    <h1 class="text-3xl font-bold mb-6 text-center">Exemple de route dynamique (avec paramètres en props) :</h1>
    <div  class="p-2 rounded bg-base-100 shadow-sm" v-for="(unUser, index) in usersList" :key="unUser.userID">
        <p>{{ unUser.userName }}</p>
        <router-link class="btn btn-outline btn-info" to="/tp/router_and_props/"
        :to="{
          path: '/tp/router_and_props/',
          params: {id: unUser.userID}
        }">Voir les détails</router-link>
    </div>
</template>

<script setup lang='js'>
import { ref } from 'vue';

const usersList = ref([
    {userID: 0, userName: "Steven-Vandamme"},
    {userID: 1, userName: "Jean-Luc Godard"},
    {userID: 2, userName: "BicVeleda"},
    {userID: 3, userName: "Savage Henry"}
])

</script>
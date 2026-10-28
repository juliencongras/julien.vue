<template>
    <h1 class="text-3xl font-bold mb-6 text-center">Composant gestion de l'utilisateur</h1>
    <div class="flex flex-col items-center justify-center">
        <ActiveUserTp 
        v-bind:user-name="parentUserData.name"
        v-bind:user-age="parentUserData.age" />
        <UserDataTp v-on:user-data-emit-update="updateUser" />
    </div>
</template>

<script setup lang='js'>
import { ref } from 'vue';
import ActiveUserTp from '../../components/ActiveUserTp.vue';
import UserDataTp from '../../components/UserDataTp.vue';

const parentUserData = ref({
    name: "John",
    age: 43
})

function updateUser(emitedName, emitedAge){
    console.log("Recieved name and age :", emitedName, emitedAge, "ans");
    parentUserData.value.name = emitedName;
    parentUserData.value.age = emitedAge;
    console.log("Updated user data :", parentUserData.value);
}

</script>
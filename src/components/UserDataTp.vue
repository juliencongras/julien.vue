<template>
    <form @submit.prevent class="fieldset bg-neutral-200 border-base-300 rounded-box w-xs border p-4">
        <h2 class="text-2xl font-bold mb-6">Composant formulaire d'édition</h2>

        <label class="label">Votre nom</label>
        <input type="text" class="input" placeholder="Entrez votre nom" v-model="userName" />

        <label class="label">Votre âge</label>
        <input type="text" class="input" placeholder="Entrez votre âge" v-model="userAge" />

        <button class="btn btn-primary" @click="updateUserData()">Mettre à jour</button>
    </form>
</template>


<script setup lang="js">
import { ref } from 'vue';

const userName = ref('');
const userAge = ref('');

const emit = defineEmits({
    "userDataEmitUpdate": (emitName, emitAge)=>{
        if(!emitName){
            console.warn("L'événement userDataEmitUpdate a été émis sans nom.");
            return false;
        }

        if(!emitAge){
            console.warn("L'événement userDataEmitUpdate a été émis sans âge.");
            return false;
        }

        return true;
    },
})

function updateUserData(){
    emit("userDataEmitUpdate", userName.value, userAge.value);
    userName.value = '';
    userAge.value = '';
}

</script>

<template>
    <form @submit.prevent class="fieldset bg-green-200 border-base-300 rounded-box w-xs border p-4">

      <label class="label">Nom</label>
      <input type="text" class="input" placeholder="Votre nom" v-model="friendName" />

      <label class="label">Téléphone</label>
      <input type="text" class="input" placeholder="Votre tel." v-model="friendTel" />

      <label class="label">Email</label>
      <input type="text" class="input" placeholder="Votre EMAIL" v-model="friendEmail" />

      <button class="btn btn-primary" @click="addFriend()">Ajouter ami</button>
    </form>
</template>


<script setup lang="js">
import { ref } from 'vue';

const friendName = ref('');
const friendTel = ref('');
const friendEmail = ref('');

const emit = defineEmits({
    "add-friend": (emitName, emitTel, emitMail)=>{
        if(!emitName){
            console.warn("L'événement add-friend a été émis sans nom.");
            return false;
        }

        if(!emitTel){
            console.warn("L'événement add-friend a été émis sans téléphone.");
            return false;
        }

        if(!emitMail){
            console.warn("L'événement add-friend a été émis sans Email.");
            return false;
        }

        return true;
    },
})

function addFriend(){
    emit("add-friend", friendName.value, friendTel.value, friendEmail.value);
    friendName.value = '';
    friendTel.value = '';
    friendEmail.value = '';
}

</script>

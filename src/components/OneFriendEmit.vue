<template>
    <div class="card w-full max-w-md bg-blue-100 shadow-xl my-4">
        <h4 class="mx-3 card-title text-xl font-bold mb-4">Composant OneFriend.vue</h4>
        <div class="card-body">
            <h2 class="card-title text-primary">
                👤 {{ unAmiName }} - un ami : {{ unAmiPremium ? 'en Or' : 'En Plomb' }}
                <div class="badge" :class="unAmiPremium ? 'badge-success' : 'badge-ghost'">
                    {{ unAmiPremium ? 'Premium' : 'Standard' }}
                </div>
            </h2>

            <button class="btn btn-secondary" @click="updatePremium(unAmiId)">Update Premium</button>
            <button class="btn btn-info" @click="toggleDetails()">Afficher Details</button>
            <button class="btn btn-error" @click="deleteFriend(unAmiId)">Supprimer</button>

            <div class="space-y-2 text-base-content" v-if="displayDetails">
                <p class="flex items-center gap-2">
                    <span class="badge badge-outline badge-primary">ID</span>
                    {{ unAmiId }}
                </p>

                <p class="flex items-center gap-2">
                    <span class="badge badge-outline badge-secondary">📞</span>
                    {{ unAmiPhone }}
                </p>

                <p class="flex items-center gap-2">
                    <span class="badge badge-outline badge-accent">📧</span>
                    {{ unAmiMail }}
                </p>
                
            </div>
        </div>
    </div>
</template>


<script setup lang="js">
import { ref } from 'vue';

const displayDetails = ref(false);

const emit = defineEmits({
    "mon-event-premium-update": (friendID)=>{
        if(friendID){
            return true;
        } else {
            console.warn("L'événement mon-event-premium-update a été émis sans id.");
            return false;
        }
    },
    "delete-friend": (friendID)=>{
        if(friendID){
            return true;
        } else {
            console.warn("L'événement delete-friend a été émis sans id.");
            return false;
        }
    },
})

const props = defineProps({
    unAmiId: {
        type: String,
        required: true,
    },
    unAmiName: {
        type: String,
        required: true,
    },
    unAmiPhone: {
        type: String,
        required: true,
    },
    unAmiMail: {
        type: String,
        required: true,
    },
    unAmiPremium: {
        type: Boolean,
        required: false,
        default: true,
    },
})

const premiumData = ref(props.unAmiPremium)

function toggleDetails(){
    displayDetails.value = !displayDetails.value;
}

function updatePremium(friendID) {
    emit("mon-event-premium-update", friendID);
}

function deleteFriend(friendID) {
    emit("delete-friend", friendID);
}

</script>

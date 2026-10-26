<template>
    <div class="card w-full max-w-lg shadow-xl">
        <div class="card-body">
            <h5 class="card-title text-base-content">Composant OneFriend.vue</h5>
            <p class="text-base-content opacity-80">{{ friendName }}</p>
            <div class="badge"
            :class="{'badge-outline badge-primary': propsToDataPremiumType === 'Standard',
            'badge-success': propsToDataPremiumType === 'Premium'}">
                {{ friendPremium }}
            </div>
            <p class="text-base-content opacity-80">{{ friendID }}</p>
            <p class="text-base-content opacity-80">{{ friendPhone }}</p>
            <p class="text-base-content opacity-80">{{ friendEmail }}</p>
            <button @click="togglePremium" class="btn btn-primary">Modif Props Premium</button>
        </div>
    </div>
</template>

<script setup lang='js'>
import { defineProps, ref } from 'vue'

const props = defineProps({
    friendID: {
        type: String,
        required: true,
        // default:'base title',
        // validator: (value) => value == 'toto'
    },
    friendName: {
        type: String,
        required: true
    },
    friendPhone: {
        type: String,
        required: true
    },
    friendEmail: {
        type: String,
        required: true
    },
    friendPremium: {
        type: String,
        default: "Standard"
    }
});

const propsToDataPremiumType = ref(props.friendPremium);

const togglePremium = () => {
    if (propsToDataPremiumType.value === 'Standard') {
        propsToDataPremiumType.value = 'Premium';
    } else {
        propsToDataPremiumType.value = 'Standard';
    }
};

</script>

<style scoped lang="css">
/* Les styles sont gérés par DaisyUI et Tailwind, pas de CSS supplémentaire n'est nécessaire ici. */
</style>
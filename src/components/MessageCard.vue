<template>
    <div class="card w-full max-w-lg shadow-xl" 
    :class="{'card-bordered border-error bg-error/10': type === 'important',
            'card-bordered border-info bg-info/10': type === 'notification'}">
        <div class="card-body">
            <h5 class="card-title text-base-content">{{ title }}</h5>
            <p class="text-base-content opacity-80">{{ content }}</p>
            <div class="mt-4">
                <div v-if="type === 'important'" class="alert alert-error">
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="text-white">⚠️ Ce message est marqué comme important.</span>
                </div>
                <div v-else-if="type === 'notification'" class="alert alert-info">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        class="stroke-current shrink-0 w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span class="text-white">🔔 Ceci est une notification.</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang='js'>
// import { defineProps } from 'vue'
// Déclaration en mode tableau (flemme)
// const props = defineProps(['title', 'content', 'type']);

const props = defineProps({
    title: {
        type: String,
        required: true,
        // default:'base title',
        validator: (value) => value == 'toto'
    },
    content: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: "notification"
    }
});
</script>

<style scoped lang="css">
/* Les styles sont gérés par DaisyUI et Tailwind, pas de CSS supplémentaire n'est nécessaire ici. */
</style>
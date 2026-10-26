<template>
    <h1 class="text-3xl font-bold mb-6 text-center">EXO PROPS (ici c'est le parent)</h1>
</template>

<script setup lang='js'>
import OneFriend from '../../components/OneFriend.vue';

const dataFromParent = [
    {
        msgTitle: "Super MSG Important",
        msgContent: "Ceci est un message important pour l'utilisateur.",
        msgType: "important"
    },
    {
        msgTitle: "Message Moins important",
        msgContent: "Vous avez une nouvelle notification.",
        msgType: "notification"
    },
    {
        msgTitle: "3ème Message",
        msgContent: "azertyuiop",
        msgType: "notification"
    },
    {
        msgTitle: "4ème Message",
        msgContent: "Ceci est un autre message important.",
        msgType: "important"
    }
];
</script>
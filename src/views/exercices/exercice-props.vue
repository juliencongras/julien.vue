<template>
    <h1 class="text-3xl font-bold mb-6 text-center">EXO PROPS (ici c'est le parent)</h1>
    <OneFriend v-for="(oneData, index) in dataFromParent" :key="index"
                    v-bind:friendID="oneData.friendID" 
                    v-bind:friendName="oneData.friendName"
                    v-bind:friendPhone="oneData.friendPhone"
                    v-bind:friendEmail="oneData.friendEmail"
                    v-bind:friendPremium="oneData.friendPremium" />
</template>

<script setup lang='js'>
import OneFriend from '../../components/OneFriend.vue';

const dataFromParent = [
    {
        friendID: "lasticot",
        friendName: "Coco l'asticot - un ami en plomb",
        friendPhone: "01234 5678 991",
        friendEmail: "coco@lasticot.com",
        friendPremium: "Standard"
    },
    {
        friendID: "lasticot2",
        friendName: "Coco l'asticot - un ami en Or",
        friendPhone: "01234 5678 992",
        friendEmail: "coco@lasticot.fr",
        friendPremium: "Premium"
    },
    {
        friendID: "kimonoSurUnFrigo",
        friendName: "Steven Seagal - un ami en Or",
        friendPhone: "+338765477",
        friendEmail: "steven@seagal.com",
        friendPremium: "Premium"
    },
    {
        friendID: "yoyoyo",
        friendName: "JAROD - un ami en Or",
        friendPhone: "+338765477",
        friendEmail: "JAROD@seagal.com",
        friendPremium: "Premium"
    },
    {
        friendID: "yoyoyo",
        friendName: "JAROD - un ami en Or",
        friendPhone: "+338765477",
        friendEmail: "JAROD@seagal.com",
        friendPremium: "Premium"
    },
    {
        friendID: "ok",
        friendName: "JAROD - un ami en Or",
        friendPhone: "+338765477",
        friendEmail: "JAROD@seagal.com",
        friendPremium: "Premium"
    },
    {
        friendID: "GUS",
        friendName: "GussDX - un ami en Or",
        friendPhone: "+338765477",
        friendEmail: "JAROD@seagal.com",
        friendPremium: "Premium"
    },
];
</script>
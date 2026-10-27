<template>
    <OneFriend v-for="(oneData, index) in dataFromParent" :key="index"
                    v-bind:unAmiId="oneData.friendID" 
                    v-bind:unAmiName="oneData.friendName"
                    v-bind:unAmiPhone="oneData.friendPhone"
                    v-bind:unAmiMail="oneData.friendEmail"
                    v-bind:unAmiPremium="oneData.friendPremium" />
</template>

<script setup lang='js'>
import OneFriend from '../../components/OneFriendEmit.vue';
import { ref } from 'vue';

const dataFromParent = [
    {
        friendID: "lasticot",
        friendName: "Coco l'asticot",
        friendPhone: "01234 5678 991",
        friendEmail: "coco@lasticot.com",
        friendPremium: false
    },
    {
        friendID: "lasticot2",
        friendName: "Coco l'asticot",
        friendPhone: "01234 5678 992",
        friendEmail: "coco@lasticot.fr",
        friendPremium: true
    },
    {
        friendID: "kimonoSurUnFrigo",
        friendName: "Steven Seagal",
        friendPhone: "+338765477",
        friendEmail: "steven@seagal.com",
        friendPremium: true
    },
    {
        friendID: "yoyoyo",
        friendName: "JAROD",
        friendPhone: "+338765477",
        friendEmail: "JAROD@seagal.com",
        friendPremium: true
    },
    {
        friendID: "yoyoyo",
        friendName: "JAROD",
        friendPhone: "+338765477",
        friendEmail: "JAROD@seagal.com",
        friendPremium: true
    },
    {
        friendID: "ok",
        friendName: "JAROD",
        friendPhone: "+338765477",
        friendEmail: "JAROD@seagal.com",
        friendPremium: true
    },
    {
        friendID: "GUS",
        friendName: "GussDXr",
        friendPhone: "+338765477",
        friendEmail: "JAROD@seagal.com",
        friendPremium: true
    },
];
</script>
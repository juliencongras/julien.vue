<template>
    <NewFriend v-on:add-friend="addFriend" />
    <OneFriend v-on:delete-friend="deleteFriend" v-on:mon-event-premium-update="updatePremium"
    v-for="(oneData, index) in dataFromParent" :key="index"
                    v-bind:unAmiId="oneData.friendID" 
                    v-bind:unAmiName="oneData.friendName"
                    v-bind:unAmiPhone="oneData.friendPhone"
                    v-bind:unAmiMail="oneData.friendEmail"
                    v-bind:unAmiPremium="oneData.friendPremium" />
</template>

<script setup lang='js'>
import OneFriend from '../../components/OneFriendEmit.vue';
import NewFriend from '../../components/NewFriend.vue';
import { ref } from 'vue';

const dataFromParent = ref([
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
        friendID: "yoyoyo2",
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
]);

function deleteFriend(friendID){
    console.log("ID de l'ami à effacer : ", friendID);
    console.log(dataFromParent.value);
    
    for (const data in dataFromParent.value) {
        if(dataFromParent.value[data].friendID == friendID){
            console.log(dataFromParent.value[data].friendID);
            dataFromParent.value.splice(data, 1);
            return;
        }
    }
}

function updatePremium(friendID){
    console.log("Id de l'ami à passer en premium : ", friendID);
    
    for (const data in dataFromParent.value) {
        if(dataFromParent.value[data].friendID == friendID){
            console.log(dataFromParent.value[data].friendID);
            dataFromParent.value[data].friendPremium = !dataFromParent.value[data].friendPremium;
            console.log("Premium check : ", dataFromParent.value[data].friendPremium);
            return;
        }
    }
}

function addFriend(emitedName, emitedTel, emitedEmail){
    console.log(emitedName, emitedTel, emitedEmail);
    if(emitedName && emitedTel && emitedEmail){
        dataFromParent.value.push({
            friendID: Math.random(),
            friendName: emitedName,
            friendPhone: emitedTel,
            friendEmail: emitedEmail,
            friendPremium: false
        })
    }
}
</script>
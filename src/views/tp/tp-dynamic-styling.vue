<template>
    <div class="container mx-auto p-6">
        <div class="card bg-base-100 shadow-xl rounded-box">
            <div class="card-body">
                <h5 class="text-2xl font-bold text-center">TP:Dynamic Styling Mode : Composition</h5>

                <input type="text" placeholder="Class dynamique" class="input" v-model="inputClass" />
                <h2 class="text-2xl" :class="chosenClass" :style="{visibility:firstH2DisplayStatus}">Hello World (class dynamique)</h2>
                <input type="text" placeholder="Couleur dynamique" class="input" v-model="backgroundColor"/>
                <h2 class="text-2xl" :style="{backgroundColor:backgroundColor}">Hello World (style dynamique)</h2>

                <button @click="afficherPremierH2" class="btn btn-primary">Afficher 1er titre</button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    
    const inputClass = ref('');
    //N'est pas égale à maClasseWorld/Hello
    const chosenClass = ref('maClasse' + inputClass.value);
    const backgroundColor = ref('');
    const firstH2DisplayStatus = ref('visible');

    function afficherPremierH2(){
        firstH2DisplayStatus.value = firstH2DisplayStatus.value == 'visible'?'hidden':'visible';
        console.log(chosenClass.value);
        console.log(inputClass.value);
        //EST égale à maClasseWorld/hello (je vait péter les plombs)
        console.log('maClasse' + inputClass.value);
    }
</script>
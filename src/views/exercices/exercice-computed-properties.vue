<template>
    <div class="container mx-auto p-4 md:p-8">
        <div class="card bg-base-100 shadow-xl rounded-box">
            <div class="card-body">
                <h5 class="card-title text-2xl font-bold">Computed Bug Mode : Composition</h5>
                <div class="flex flex-col justify-center items-center my-4 p-8 bg-success-200 rounded-box">
                    <div class="join join-horizontal">
                        <button v-on:click.right="reduire(99)" type="button"
                            class="join-item btn btn-error text-2xl">-</button>
                        <h3 class="mx-3 text-2xl font-bold self-center">le nombre : {{ leNombre }}</h3>
                        <button @click.left="augmenter(1000000)" type="button"
                            class="join-item btn btn-success text-2xl">+</button>
                    </div>
                    <div class="divider"></div>
                    <p>Résultat de la fonction displayUserName() : <span class="badge badge-info">{{ displayUserName() }}</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang='js'>
import { ref } from 'vue'

const leNombre = ref(0);
const userName = ref('');

function reduire(val) {
    leNombre.value -= val;
}

function augmenter(val) {
    leNombre.value += val;
}

function displayUserName(){
    console.log("la fonction qui gère le name est déclenchée");
    if(userName.value == ''){
        return "Online";
    }
    else{
        return "Offline";
    }
}
</script>


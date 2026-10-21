<template>
    <div class="container mx-auto p-4 md:p-8">
        <div class="card bg-base-100 shadow-xl rounded-box">
            <div class="card-body">
                <h5 class="card-title text-2xl font-bold">Compteur avec Watcher</h5>
                <div class="flex flex-col justify-center items-center my-4 p-8 bg-success-200 rounded-box">
                    <div class="join join-horizontal">
                        <button v-on:click="augmenter()" type="button"
                            class="join-item btn btn-success text-2xl">+</button>
                        <h3 class="mx-3 text-2xl font-bold self-center">Valeur actuelle : <span class="badge badge-secondary">{{ leNombre }}</span></h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang='js'>
import { ref, watch } from 'vue';

const leNombre = ref(0);

watch(leNombre, (newVal)=> {
    console.log("ça surveille");
    if(newVal >= 7){
        console.log("Limite ateinte !");
        leNombre.value = 0;
    }
});

function augmenter() {
    leNombre.value ++;
}
</script>
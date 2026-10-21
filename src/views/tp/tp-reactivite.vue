<template>
    <div class="container mx-auto p-6">
        <div class="card bg-base-100 shadow-xl rounded-box">
            <div class="card-body">
                <h5 class="text-2xl font-bold text-center bg-primary text-primary-content">TP reactivité : Le numéro gagnant</h5>
                <div class="card-body bg-error">
                    <p class="text-center">Le nombre : </p>
                    <p class="text-2xl font-bold text-center text-primary">{{ leNombre }}</p>
                </div>
                <p class="ext-2xl font-bold text-center text-secondary">{{ indice }}</p>
                <div class="badge badge-error" v-if="msg">{{ msg }}</div>
                <div class="flex flex-col md:flex-row justify-center items-center my-6">
                    <button @click="augmenter(1)" type="button" class="btn btn-success">+1</button>
                    <button @click="augmenter(5)" type="button" class="btn btn-error">+5</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, watch, computed } from 'vue';

    const leNombre = ref(0);
    const msg = ref('');
    let bigNumberTimeOut;

    const indice = computed(() => {
        if(leNombre.value < 7){
            return "Essaie encore !";
        }
        else if(leNombre.value == 7){
            return "BINGO !";
        }
        else if(leNombre.value > 7){
            return "Tu as dépassé le nombre !";
        }
    });

    watch(leNombre, (newVal)=> {
        console.log("ça surveille");
        if(newVal > 30){
            clearTimeout(bigNumberTimeOut);
            console.log("Limite ateinte !");
            msg.value = "Nombre beaucoup trop haut, réinitialisation...";
            bigNumberTimeOut = setTimeout(() => {
                leNombre.value = 0;
                msg.value = "";
            }, 5000);
        }
    });

    function augmenter(num) {
      leNombre.value += num;
    }
</script>
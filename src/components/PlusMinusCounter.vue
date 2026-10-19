<template>
    <div>
        <button class="btn btn-error" v-on:click="removeSevenSeven">-</button>
        <p>Le nombre : {{ leNombre }}</p>
        <button class="btn btn-success" v-on:click="addThousand">+</button>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const leNombre = ref(0);

    function addThousand(){
        leNombre.value += 1000;
    }

    function removeSevenSeven(){
        leNombre.value -= 77;
    }
</script>
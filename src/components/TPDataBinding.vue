<template>
    <div class="avatar">
      <div class="w-24 rounded-full">
        <img v-bind:src="userImage"/>
      </div>
    </div>
    <p>{{ userName }}</p>
    <input type="text" v-bind:placeholder="userName" class="input" />
    <p>Age : {{ userAge }}</p>
    <p>Age + 10 : {{ agePlusTen() }}</p>
    <p>NB Fétiche : {{ nbFetiche() }}</p>
</template>

<script setup>
    import { ref } from 'vue';

    const userImage = ref("https://picsum.photos/50")
    const userName = ref("Julien");
    const userAge = ref(31);

    function agePlusTen(){
        return userAge.value + 10;
    }

    function nbFetiche(){
        return Math.random();
    }
</script>
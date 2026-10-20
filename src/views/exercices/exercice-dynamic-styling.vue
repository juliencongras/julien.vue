<template>
    <div class="container mx-auto p-6">
        <div class="card bg-base-100 shadow-xl rounded-box">
            <div class="card-body">
                <h5 class="text-2xl font-bold text-center">Dynamic styling class</h5>
                <button class="btn" v-on:click="buttonOneStyleChange()" :style="buttonOneStyle">Carte 1 via style</button>
                <button class="btn" @click="buttonTwoStyleChange" :style="buttonTwoStyle">Carte 2 via style</button>
                <button class="btn" v-on:click="buttonThreeClassChange()" :class="{buttonDynamicStylingClassOne: buttonThreeClassActive}">Carte 3 via class</button>
                <button class="btn" @click="buttonFourClassChange" :class="{buttonDynamicStylingClassTwo: buttonFourClassActive}">Carte 4 via class</button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const buttonOneStyle = ref("background-color:red");
    const buttonTwoStyle = ref("background-color:green");
    const buttonThreeClassActive = ref(false);
    const buttonFourClassActive = ref(false);

    function buttonOneStyleChange(){
        buttonOneStyle.value = buttonOneStyle.value == "background-color:red" ? "background-color:blue":"background-color:red";
    }

    function buttonTwoStyleChange(){
        buttonTwoStyle.value = buttonTwoStyle.value == "background-color:green" ? "background-color:yellow":"background-color:green";
    }

    function buttonThreeClassChange(){
        buttonThreeClassActive.value = !buttonThreeClassActive.value;
    }

    function buttonFourClassChange(){
        buttonFourClassActive.value = !buttonFourClassActive.value;
    }
</script>
<template>
    <div class="container mx-auto p-4 md:p-8 bg-base-200 rounded-box shadow-xl">
        <h3 class="text-2xl font-bold text-center mb-6">Dynamic Styling (Class)</h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
            <div class="col-span-1">
                <div class="card bg-base-100 shadow-xl cursor-pointer transition-all duration-300 transform hover:scale-105"
                    @click="selectionCard(1)" v-bind:style="{backgroundColor: selectCard1===true ? 'red':'aqua' }">
                    <div class="card-body">
                        <h5 class="card-title">Carte 1 via style</h5>
                    </div>
                </div>
            </div>
            <div class="col-span-1">
                <div class="card bg-base-100 shadow-xl cursor-pointer transition-all duration-300 transform hover:scale-105"
                    @click="selectionCard(2)" :style="{backgroundColor: selectCard2 ? 'green':'violet' }">
                    <div class="card-body">
                        <h5 class="card-title">Carte 2 via style</h5>
                    </div>
                </div>
            </div>
            <div class="col-span-1">
                <div class="card bg-base-100 shadow-xl cursor-pointer transition-all duration-300 transform hover:scale-105"
                    @click="selectionCard(3)" v-bind:class="{ class1: selectCard3 }">
                    <div class="card-body">
                        <h5 class="card-title">Carte 3 via class</h5>
                    </div>
                </div>
            </div>
            <div class="col-span-1">
                <div class="card bg-base-100 shadow-xl cursor-pointer transition-all duration-300 transform hover:scale-105"
                    @click="selectionCard(4)" :class="{ 'class2': selectCard4 }">
                    <div class="card-body">
                        <h5 class="card-title">Carte 4 via class</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang='js'>
import { ref } from 'vue'

const selectCard1 = ref(false);
const selectCard2 = ref(false);
const selectCard3 = ref(false);
const selectCard4 = ref(false);

function selectionCard(uneCard) {
    if (uneCard === 1) {
        selectCard1.value = !selectCard1.value;
    }
    if (uneCard === 2) {
        selectCard2.value = !selectCard2.value;
        // selectCard1.value = false;
    }
    if (uneCard === 3) {
    selectCard3.value = !selectCard3.value;
  }
  if (uneCard === 4) {
    selectCard4.value = !selectCard4.value;
  }
}

</script>

<style scoped lang="css">
/* Les styles sont gérés par DaisyUI et Tailwind, pas de CSS supplémentaire n'est nécessaire ici. */
.class1 {
  background-color: orange;
  font-style: italic;
}

.class2 {
  background-color: chartreuse;
  font-size: large;
}
</style>
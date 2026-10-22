<template>
    <div class="container mx-auto p-6">
        <div class="card bg-base-100 shadow-xl rounded-box">
            <div class="card-body">
                <h5 class="text-2xl font-bold text-center">TP : Conditional/List Rendering</h5>
                <h5 class="text-2xl font-bold">La liste des courses</h5>
                <input type="text" class="input" v-model="addedCourse" />
                <button class="btn btn-success" @click="addCourse">Ajouter à votre liste de courses</button>
                <div class="divider"></div>
                <div v-for="(course, index) in mesCourses":key="index" :style="{display: listVisible?'block':'none'}" @click="removeCourse(index)">
                    {{ index + 1 }} - {{ course }} - &#128465;
                </div>
                <button class="btn btn-info" @click="toggleList" v-if="listVisible">Masquer liste</button>
                <button class="btn btn-info" @click="toggleList" v-else-if="!listVisible">Afficher liste</button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const mesCourses = ref([]);
    const addedCourse = ref("");
    const listVisible = ref(true)

    function addCourse(){
        mesCourses.value.push(addedCourse.value);
    }

    function removeCourse(courseIndex){
        mesCourses.value.splice(courseIndex, 1);
    }

    function toggleList(){
        listVisible.value = !listVisible.value;
    }
</script>
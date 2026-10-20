<template>
    <div class="container mx-auto p-4 md:p-8">
        <div class="card bg-base-100 shadow-xl rounded-box p-6">
            <h5 class="text-xl font-semibold mb-4">Tp-Databinding : Profil utilisateur (interpolation + v-bind)</h5>
            <div class="flex flex-col justify-center items-center">
                <!-- v-bind de l'attribut src de l'image -->
                <div class="avatar online">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img v-bind:src="imageUser" :alt="nameUser" />
                    </div>
                </div>
                <!-- interpolation du nom -->
                <h3 class="text-2xl font-bold mt-4">{{ nameUser }}</h3>
                <!-- v-bind de l'attribut value d'un input -->
                <input type="text" v-bind:value="nameUser" class="input input-bordered w-full max-w-xs mt-4" />
                <div class="flex flex-row justify-center items-center gap-2 mt-4">
                    <!-- interpolation de l'age -->
                    <span class="text-lg">Âge : <span class="badge badge-lg badge-primary">{{ ageUser }} ans</span></span>
                </div>
                <div class="flex flex-row justify-center items-center mt-3">
                    <!-- interpolation fonction qui augmente l'age -->
                    <span class="text-lg">Âge + 10 :
                        <span class="badge badge-lg badge-secondary">{{ augmenterAge() }} ans</span>
                    </span>
                </div>
                <div class="mt-4">
                    <span class="text-lg">NB Fétiche :
                        <!-- interpolation de la fonction qui génère un nb random -->
                        <span class="badge badge-lg badge-accent">{{ nombreRandom() }}</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang='js'>
 import { ref } from 'vue'

// const consignesExo = ref({
//     id: 'tp-data-binding',
//     globalObjective: 'Afficher dynamiquement les données du profil utilisateur DR Mario',
//     stepGoals : [
//         {description : 'Afficher le nom de l\'utilisateur avec template strings',
//         isCompleted : false
//         },
//         {description : 'Afficher l\'âge de l\'utilisateur avec template strings', 
//         isCompleted : false
//         }
//         ,
//         {description : 'Afficher l\'image de l\'utilisateur avec v-bind', 
//         isCompleted : false
//         }
//     ]
// });

// const updateStepsCompleted = (index) => {
//     console.log(index);
//     consignesExo.value.stepGoals[index].isCompleted = true;
    
// }

const nameUser = ref('Dr Mario');
const ageUser = ref(30);
const imageUser = 'https://static.wikia.nocookie.net/superuniverse64/images/f/fc/MARIO_CURSE.png/revision/latest/scale-to-width-down/340?cb=20230422125040'

const augmenterAge = () => {
    // Avec les ref on peut accéder à leur value
    // Voyez ref comme une sorte de conteneur réactif de vue pour les variables
    return ageUser.value + 10;
}
//const nombreRandom = ref(Date.now()) // ou Math.floor(Math.random() * 100)
const nombreRandom = () => {
    // return new Date.now();
    return Math.random();
}
</script>



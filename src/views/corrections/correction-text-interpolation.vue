<template>
    <div class="container mx-auto p-4 md:p-8">
        <div class="card bg-base-100 shadow-xl rounded-box">
            <div class="card-body">
                <h5 class="card-title text-2xl font-bold">Exercice Text Interpolation</h5>
                <div class="prose max-w-none mt-4">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th>Variable</th>
                                <th>Valeur</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>unLivre</td>
                                <td><span class="badge badge-primary">{{ unLivre }}</span></td>
                            </tr>
                            <tr>
                                <td>isOnline</td>
                                <td><span class="badge" >{{ isOnline}}</span></td>
                            </tr>
                            <tr>
                                <td>unNombre</td>
                                <td><span class="badge badge-info">{{ unNombre }}</span></td>
                            </tr>
                            <tr>
                                <td>unTableau</td>
                                <td><span class="badge badge-warning">{{ unTableau }}</span></td>
                            </tr>
                            <tr>
                                <td>unTableau[0]</td>
                                <td><span class="badge badge-warning">{{ unTableau[0] }}</span></td>
                            </tr>
                            <tr>
                                <td>unObjet</td>
                                <td><span class="badge badge-accent">{{ unObjet }}</span></td>
                            </tr>
                            <tr>
                                <td>unObjet.name</td>
                                <td><span class="badge badge-accent">{{ unObjet.name }}</span></td>
                            </tr>
                            <tr>
                                <td>unObjet['name']</td>
                                <td><span class="badge badge-accent">{{ unObjet['name'] }}</span></td>
                            </tr>
                            <tr>
                                <td>unObjet.tel</td>
                                <td><span class="badge badge-accent">{{ unObjet.tel }}</span></td>
                            </tr>
                            <tr>
                                <td>fonctionTest()</td>
                                <td><span class="badge badge-secondary">{{ fonctionTest() }}</span></td>
                            </tr>
                            <tr>
                                <td>Une ternaire pour la route</td>
                                <td><span class="badge badge-secondary">{{ 1===1?'Cool':'Pas Cool' }}</span></td>
                            </tr>
                            <tr>
                                <td>On affiche du HTML ? </td>
                                <td><span class="badge badge-secondary">{{ duHTMLTemplate }}</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang='js'>

import { ref } from 'vue'

const unLivre = ref('Les mémoires de Steven Seagal');
const unTableau = ref(['du texte', 99]);
const unNombre = ref(1234567890);
// Avec les ref pour accéder on a une propriété value
unNombre.value = 8888;
const isOnline = ref(false);
isOnline.value = true;


const unObjet = ref({
    name: 'COOL',
    tel: '060503030',
});

const fonctionTest = () => {
    return 'Hello World';
}
// Mais le html sera pas interprété on verra ca avec la directive v-html
const duHTMLTemplate = ref('<h1>Du HTML</h1>');
</script>

<style scoped lang="css">
/* Les styles sont gérés par DaisyUI et Tailwind, donc pas de CSS nécessaire ici. */
</style>
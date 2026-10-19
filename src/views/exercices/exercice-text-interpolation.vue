<template>
    <div class="container mx-auto p-6">
        <div class="card bg-base-100 shadow-xl rounded-box">
            <div class="card-body">
                <h5 class="text-2xl font-bold text-center">Exercice text interpolation</h5>
                <div class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                  <table class="table">
                    <!-- head -->
                    <thead>
                      <tr>
                        <th>Variable</th>
                        <th>Valeur</th>
                      </tr>
                    </thead>
                    <tbody>
                        <TextInterpolation />
                    </tbody>
                  </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import TextInterpolation from '../../components/TextInterpolation.vue';
</script>
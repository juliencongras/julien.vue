<template>
  <div class="container mx-auto p-6">
    <div class="card bg-base-100 shadow-xl rounded-box">
      <div class="card-body">
        <h5 class="text-2xl font-bold">Tp-Databinding : Profil utilisateur (interpolation + v-bind)</h5>
        <UserInfo />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  import UserInfo from '../../components/TPDataBinding.vue';
</script>
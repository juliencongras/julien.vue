<template>
  <div class="container mx-auto p-6">
    <div class="card bg-base-100 shadow-xl rounded-box">
      <div class="card-body">
        <h5 class="text-2xl font-bold">Event Binding Mode : Composition</h5>
        <PlusMinusCounter />
      </div>
    </div>
  </div>
</template>

<script setup>
    import { ref } from 'vue';
    import PlusMinusCounter from '../../components/PlusMinusCounter.vue';
</script>
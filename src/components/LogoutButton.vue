<template>
  <button 
    type="button" 
    class="btn btn-outline btn-error btn-sm gap-1"
    :disabled="isLoggingOut"
    @click="handleLogout"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
    </svg>
    <span>Déconnexion</span>
  </button>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { logout } from '../services/AuthService';

const router = useRouter();
const isLoggingOut = ref(false);

async function handleLogout() {
  try {
    isLoggingOut.value = true;
    await logout();
    router.push('/auth/login'); // Le changement de route déclenchera le watch de AppHeader !
  } catch (error) {
    console.error('Erreur lors de la déconnexion :', error);
  } finally {
    isLoggingOut.value = false;
  }
}
</script>
// Dans main il faudra dire à notre Application 
// Qu'elle va importer et utiliser le router
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import './style.css'
import App from './App.vue'
import router from './router'

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)

createApp(App).use(router).use(pinia).mount('#app')
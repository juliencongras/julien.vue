// Dans ce fichier on va lister toutes les routes de notre application
import { createRouter, createWebHistory } from 'vue-router'
//! Cette route HOME (qui est un composant vue) on importe ici et on va l'utiliser dans notre routeur
import Home from '../views/Home.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // Cette route n'est pas en lazy loading, elle est directement importée en haut du fichier
        {
            path: '/home',
            alias: '/',
            component: Home
        },
        // ! Ces routes sont en lazy loading, elle sera chargée uniquement quand on ira sur la page /about
        {
            path: '/about',
            component: () => import('../views/About.vue')
        },
        {
            path: '/contact',
            component: () => import('../views/Contact.vue')
        },
        // Route spéciale pour gérer les pages non trouvées
        // Si la route sur laquelle on est ne Match pas nos autre routes (path)
        // On redirige vers une page avec un template style page 404
        {
            path: '/:pathMatch(.*)*',
            component: () => import('../views/not-found.vue'),
        },

        {
            path: '/lessons/attribute_binding',
            component: () => import('../views/lessons/lesson-attribute-binding.vue')
        },
        {
            path: '/lessons/event_binding',
            component: () => import('../views/lessons/lesson-event-binding.vue')
        },
        {
            path: '/lessons/introduction',
            component: () => import('../views/lessons/lesson-introduction.vue')
        },
        {
            path: '/lessons/setup',
            component: () => import('../views/lessons/lesson-setup.vue')
        },
        {
            path: '/lessons/syntax',
            component: () => import('../views/lessons/lesson-syntax.vue')
        },
        {
            path: '/lessons/text_interpolation',
            component: () => import('../views/lessons/lesson-text-interpolation.vue')
        },

        {
            path: '/exercices/text_interpolation',
            component: () => import('../views/exercices/exercice-text-interpolation.vue')
        },
        {
            path: '/exercices/attribute_binding',
            component: () => import('../views/exercices/exercice-attribute-binding.vue')
        },
        {
            path: '/exercices/event_binding',
            component: () => import('../views/exercices/exercice-event-binding.vue')
        },

        {
            path: '/corrections/text_interpolation',
            component: () => import('../views/corrections/correction-text-interpolation.vue')
        },
        {
            path: '/corrections/attribute_binding',
            component: () => import('../views/corrections/correction-attribute-binding.vue')
        },


        {
            path: '/tp/data_binding',
            component: () => import('../views/tp/tp-data-binding.vue')
        }

    ]
})
export default router
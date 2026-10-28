// Dans ce fichier on va lister toutes les routes de notre application
import { createRouter, createWebHistory } from 'vue-router'
//! Cette route HOME (qui est un composant vue) on importe ici et on va l'utiliser dans notre routeur
import Home from '../views/Home.vue';
import { auth } from '../firebase.js';

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

        //Lessons
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
            path: '/lessons/dynamic_styling',
            component: () => import('../views/lessons/lesson-dynamic-styling.vue')
        },
        {
            path: '/lessons/two_way_binding',
            component: () => import('../views/lessons/lesson-two-way-binding.vue')
        },
        {
            path: '/lessons/conditional_rendering',
            component: () => import('../views/lessons/lesson-conditional-rendering.vue')
        },
        {
            path: '/lessons/list_rendering',
            component: () => import('../views/lessons/lesson-list-rendering.vue')
        },
        {
            path: '/lessons/computed_properties',
            component: () => import('../views/lessons/lesson-computed-properties.vue')
        },
        {
            path: '/lessons/watchers',
            component: () => import('../views/lessons/lesson-watchers.vue')
        },
        {
            path: '/lessons/lifecycle',
            component: () => import('../views/lessons/lesson-lifecycle.vue')
        },
        {
            path: '/lessons/lib_chartjs',
            component: () => import('../views/lessons/lesson-lib-chartjs.vue')
        },
        {
            path: '/lessons/props',
            component: () => import('../views/lessons/lesson-props.vue')
        },
        {
            path: '/lessons/router',
            component: () => import('../views/lessons/lesson-router.vue')
        },
        {
            path: '/lessons/emit',
            component: () => import('../views/lessons/lesson-emit.vue')
        },

        //Exercices
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
            path: '/exercices/dynamic_styling',
            component: () => import('../views/exercices/exercice-dynamic-styling.vue')
        },
        {
            path: '/exercices/conditional_rendering',
            component: () => import('../views/exercices/exercice-conditional-rendering.vue')
        },
        {
            path: '/exercices/list_rendering',
            component: () => import('../views/exercices/exercice-list-rendering.vue')
        },
        {
            path: '/exercices/computed_properties',
            component: () => import('../views/exercices/exercice-computed-properties.vue')
        },
        {
            path: '/exercices/watchers',
            component: () => import('../views/exercices/exercice-watchers.vue')
        },
        {
            path: '/exercices/lifecycle_api',
            component: () => import('../views/exercices/exercice-lifecycle-api.vue')
        },
        {
            path: '/exercices/charte_js_dynamique',
            component: () => import('../views/exercices/exercice-charte-js-dynamique.vue')
        },
        {
            path: '/exercices/props',
            component: () => import('../views/exercices/exercice-props.vue')
        },

        //Corrections
        {
            path: '/corrections/text_interpolation',
            component: () => import('../views/corrections/correction-text-interpolation.vue')
        },
        {
            path: '/corrections/attribute_binding',
            component: () => import('../views/corrections/correction-attribute-binding.vue')
        },
        {
            path: '/corrections/event_binding',
            component: () => import('../views/corrections/correction-event-binding.vue')
        },
        {
            path: '/corrections/tp_data_binding',
            component: () => import('../views/corrections/correction-tp-data-binding.vue')
        },
        {
            path: '/corrections/dynamic_styling',
            component: () => import('../views/corrections/exercice-dynamic-styling.vue')
        },
        {
            path: '/corrections/tp_dynamic_styling',
            component: () => import('../views/corrections/tp-dynamic-styling.vue')
        },
        {
            path: '/corrections/conditional_rendering',
            component: () => import('../views/corrections/exercice-conditional-rendering.vue')
        },
        {
            path: '/corrections/list_rendering',
            component: () => import('../views/corrections/correction-list-rendering.vue')
        },
        {
            path: '/corrections/computed_properties',
            component: () => import('../views/corrections/correction-computed-properties.vue')
        },
        {
            path: '/corrections/watcher',
            component: () => import('../views/corrections/correction-watcher.vue')
        },
        {
            path: '/corrections/tp_reactivite',
            component: () => import('../views/corrections/correction-tp-reactivite.vue')
        },
        {
            path: '/corrections/lifecycle_api',
            component: () => import('../views/corrections/correction-lifecycle-api.vue')
        },
        {
            path: '/corrections/props',
            component: () => import('../views/corrections/correction-props.vue')
        },
        {
            path: '/corrections/details/:id/:itemName',
            name: 'Details',
            component: () => import('../components/DetailsPage.vue'),
            props: true,
        },

        //TP
        {
            path: '/tp/data_binding',
            component: () => import('../views/tp/tp-data-binding.vue')
        },
        {
            path: '/tp/dynamic_styling',
            component: () => import('../views/tp/tp-dynamic-styling.vue')
        },
        {
            path: '/tp/reactivite',
            component: () => import('../views/tp/tp-reactivite.vue')
        },
        {
            path: '/tp/conditional_list_rendering',
            component: () => import('../views/tp/tp-conditional-list-rendering.vue')
        },
        {
            path: '/tp/jeu_tour_par_tour',
            component: () => import('../views/tp/tp-jeu-tour-par-tour.vue')
        },
        {
            path: '/tp/router_and_props',
            component: () => import('../views/tp/tp-router-and-props.vue')
        },
        {
            path: '/tp/router_and_props/:id',
            component: () => import('../views/tp/tp-router-and-props-user-details.vue'),
            props: true
        },
        {
            path: '/tp/emit',
            component: () => import('../views/tp/tp-emit.vue'),
            props: true
        },
        {
            path: '/tp/component_communication',
            component: () => import('../views/tp/tp-component-communication.vue'),
            props: true
        }

    ]
})

router.beforeEach(async (to) => {
    //await auth.authStateReady
})

export default router
<template>
    <div class="navbar bg-base-100 shadow-sm z-1">
        <a class="btn btn-ghost text-xl">Julien.vue</a>
        <router-link to="/home" class="btn btn-ghost">Home</router-link>
        <router-link to="/about" class="btn btn-ghost">About</router-link>
        <router-link to="/contact" class="btn btn-ghost">Contact</router-link>
        <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Leçons</summary>
              <ul class="bg-base-100 rounded-t-none p-2 overflow-y-auto max-h-60">
                <li><router-link to="/lessons/introduction" class="btn btn-ghost">Introduction</router-link></li>
                <li><router-link to="/lessons/setup" class="btn btn-ghost">Setup</router-link></li>
                <li><router-link to="/lessons/syntax" class="btn btn-ghost">Syntax</router-link></li>
                <li><router-link to="/lessons/event_binding" class="btn btn-ghost">Event binding</router-link></li>
                <li><router-link to="/lessons/attribute_binding" class="btn btn-ghost">Attribute binding</router-link></li>
                <li><router-link to="/lessons/text_interpolation" class="btn btn-ghost">Text interpolation</router-link></li>
                <li><router-link to="/lessons/dynamic_styling" class="btn btn-ghost">Dynamic styling</router-link></li>
                <li><router-link to="/lessons/two_way_binding" class="btn btn-ghost">Two way binding</router-link></li>
                <li><router-link to="/lessons/conditional_rendering" class="btn btn-ghost">Conditional rendering</router-link></li>
                <li><router-link to="/lessons/list_rendering" class="btn btn-ghost">List rendering</router-link></li>
                <li><router-link to="/lessons/computed_properties" class="btn btn-ghost">Computed properties</router-link></li>
                <li><router-link to="/lessons/watchers" class="btn btn-ghost">Watchers</router-link></li>
                <li><router-link to="/lessons/lifecycle" class="btn btn-ghost">Lifecycle</router-link></li>
                <li><router-link to="/lessons/lib_chartjs" class="btn btn-ghost">Lib Chartjs</router-link></li>
                <li><router-link to="/lessons/props" class="btn btn-ghost">Props</router-link></li>
              </ul>
            </details>
          </li>
        </ul>
        <ul class="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Exercices</summary>
              <ul class="bg-base-100 rounded-t-none p-2 overflow-y-auto max-h-60">
                <li><router-link to="/exercices/text_interpolation" class="btn btn-ghost">Text interpolation</router-link></li>
                <li><router-link to="/exercices/attribute_binding" class="btn btn-ghost">Attribute binding</router-link></li>
                <li><router-link to="/exercices/event_binding" class="btn btn-ghost">Event binding</router-link></li>
                <li><router-link to="/exercices/dynamic_styling" class="btn btn-ghost">Dynamic styling</router-link></li>
                <li><router-link to="/exercices/conditional_rendering" class="btn btn-ghost">Conditional rendering</router-link></li>
                <li><router-link to="/exercices/list_rendering" class="btn btn-ghost">List rendering</router-link></li>
                <li><router-link to="/exercices/computed_properties" class="btn btn-ghost">Computed properties</router-link></li>
                <li><router-link to="/exercices/watchers" class="btn btn-ghost">Watchers</router-link></li>
                <li><router-link to="/exercices/lifecycle_api" class="btn btn-ghost">Lifecycle api</router-link></li>
                <li><router-link to="/exercices/charte_js_dynamique" class="btn btn-ghost">Charte JS dynamique</router-link></li>
                <li><router-link to="/exercices/props" class="btn btn-ghost">Props</router-link></li>
              </ul>
            </details>
          </li>
        </ul>
        <ul class="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Corrections</summary>
              <ul class="bg-base-100 rounded-t-none p-2 overflow-y-auto max-h-60">
                <li><router-link to="/corrections/text_interpolation" class="btn btn-ghost">Text interpolation</router-link></li>
                <li><router-link to="/corrections/attribute_binding" class="btn btn-ghost">Attribute binding</router-link></li>
                <li><router-link to="/corrections/event_binding" class="btn btn-ghost">Event binding</router-link></li>
                <li><router-link to="/corrections/tp_data_binding" class="btn btn-ghost">TP data binding</router-link></li>
                <li><router-link to="/corrections/dynamic_styling" class="btn btn-ghost">Dynamic styling</router-link></li>
                <li><router-link to="/corrections/tp_dynamic_styling" class="btn btn-ghost">TP dynamic styling</router-link></li>
                <li><router-link to="/corrections/conditional_rendering" class="btn btn-ghost">Conditional rendering</router-link></li>
                <li><router-link to="/corrections/list_rendering" class="btn btn-ghost">List rendering</router-link></li>
                <li><router-link to="/corrections/computed_properties" class="btn btn-ghost">Computed properties</router-link></li>
                <li><router-link to="/corrections/watcher" class="btn btn-ghost">Watcher</router-link></li>
                <li><router-link to="/corrections/tp_reactivite" class="btn btn-ghost">TP Reactivité</router-link></li>
                <li><router-link to="/corrections/lifecycle_api" class="btn btn-ghost">Lifecycle API</router-link></li>
              </ul>
            </details>
          </li>
        </ul>
        <ul class="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>TP</summary>
              <ul class="bg-base-100 rounded-t-none p-2 overflow-y-auto max-h-60">
                <li><router-link to="/tp/data_binding" class="btn btn-ghost">Data binding</router-link></li>
                <li><router-link to="/tp/dynamic_styling" class="btn btn-ghost">Dynamic styling</router-link></li>
                <li><router-link to="/tp/reactivite" class="btn btn-ghost">Reactivité</router-link></li>
                <li><router-link to="/tp/conditional_list_rendering" class="btn btn-ghost">Conditional Rendering/List Rendering</router-link></li>
                <li><router-link to="/tp/jeu_tour_par_tour" class="btn btn-ghost">Jeu tour par tour</router-link></li>
              </ul>
            </details>
          </li>
        </ul>
  </div>
    </div>
</template>

<script setup>
    import {RouterLink} from 'vue-router'
</script>
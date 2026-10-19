<template>
    <div class="navbar bg-base-100 shadow-sm">
        <a class="btn btn-ghost text-xl">Julien.vue</a>
        <router-link to="/home" class="btn btn-ghost">Home</router-link>
        <router-link to="/about" class="btn btn-ghost">About</router-link>
        <router-link to="/contact" class="btn btn-ghost">Contact</router-link>
        <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Leçons</summary>
              <ul class="bg-base-100 rounded-t-none p-2">
                <li><router-link to="/lessons/introduction" class="btn btn-ghost">Introduction</router-link></li>
                <li><router-link to="/lessons/setup" class="btn btn-ghost">Setup</router-link></li>
                <li><router-link to="/lessons/syntax" class="btn btn-ghost">Syntax</router-link></li>
                <li><router-link to="/lessons/event_binding" class="btn btn-ghost">Event binding</router-link></li>
                <li><router-link to="/lessons/attribute_binding" class="btn btn-ghost">Attribute binding</router-link></li>
                <li><router-link to="/lessons/text_interpolation" class="btn btn-ghost">Text interpolation</router-link></li>
              </ul>
            </details>
          </li>
        </ul>
        <ul class="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Exercices</summary>
              <ul class="bg-base-100 rounded-t-none p-2">
                <li><router-link to="/exercices/text_interpolation" class="btn btn-ghost">Text interpolation</router-link></li>
                <li><router-link to="/exercices/attribute_binding" class="btn btn-ghost">Attribute binding</router-link></li>
              </ul>
            </details>
          </li>
        </ul>
        <ul class="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>TP</summary>
              <ul class="bg-base-100 rounded-t-none p-2">
                <li><router-link to="/tp/data_binding" class="btn btn-ghost">Data binding</router-link></li>
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
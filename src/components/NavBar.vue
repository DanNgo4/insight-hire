<script setup>
import { RouterLink } from "vue-router";

import { BASE_URL } from "src/assets/baseUrl";
</script>

<template>
  <header class="d-flex flex-column">
    <section class="d-flex flex-row align-items-center justify-content-between px-5 py-2 bg-primary-subtle">
      <a
        class="fs-4 fw-bold bg-transparent cursor-pointer"
        :href="BASE_URL"
        @click.prevent="$router.push('/')"
      >
        Insight Hire
      </a>

      <nav class="d-flex gap-3 align-items-center">
        <RouterLink to="/">           Job Explorer   </RouterLink>
        <RouterLink to="/application">Job Application</RouterLink>
        <RouterLink to="/todo">       To Do List     </RouterLink>
      </nav>
    </section>

    <img src="../assets/sky.jpg"
         alt="Site banner"
         class="w-100"
         height="150"
         style="object-fit: cover;" />
  </header>
</template>

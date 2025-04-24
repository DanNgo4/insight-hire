<script setup>
import { RouterView } from "vue-router";

import NavBar from "src/components/NavBar.vue";
import Footer from "src/components/Footer.vue";
</script>

<template>
  <NavBar />

  <main>
    <RouterView />
  </main>

  <Footer />
</template>

<script setup>
import JobList from "src/components/JobList.vue";
</script>

<template>
  <h1 class="ms-4">Job Explorer</h1>
  <div class="d-flex">
    <aside class="border-end" style="width: 250px;">
      <JobList />
    </aside>

    <article class="flex-fill p-3 w-75">
      <router-view />
    </article>
  </div>
</template>

<style scoped>
aside {
  width: 250px;
  min-width: 200px;
}
</style>

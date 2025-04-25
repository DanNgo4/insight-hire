<template>
  <div class="d-flex">
    <aside class="border-end" style="width: 250px;">
      <JobList />
    </aside>

    <article class="flex-fill p-3">
      <router-view />
    </article>
  </div>
</template>

<script setup>
import JobList from "src/components/JobList.vue";
</script>

<style scoped>
aside {
  min-width: 200px;
}
</style>

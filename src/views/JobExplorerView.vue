<!-- src/components/JobExplorer.vue -->
<template>
  <div class="d-flex">
    <!-- left column: the list of jobs -->
    <aside class="border-end" style="width: 250px;">
      <JobList />
    </aside>

    <!-- right column: the routed content -->
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
  /* ensure the list never shrinks too small */
  min-width: 200px;
}
</style>

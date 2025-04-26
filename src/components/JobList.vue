<script setup>
import { JOBS } from "src/assets/jobs.js";
const jobs = JOBS;
</script>

<template>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
      <router-link
        to="/"
        class="text-decoration-none"
        active-class="fw-bold"
      >
        Overview
      </router-link>
    </li>

    <li
      v-for="job in jobs"
      :key="job.job_id"
      class="list-group-item"
    >
      <router-link
        :to="`/${job.job_id}`"
        class="text-decoration-none text-white"
        active-class="fw-bold"
      >
        {{ job.job_id }}
      </router-link>
    </li>
  </ul>
</template>

<style scoped>
.list-group-item .fw-bold {
  color: #0d6efd !important;
}

.list-group-item {
  background-color: var(--bs-bg)
}
</style>

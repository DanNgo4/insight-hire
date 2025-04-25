<script setup>
import { ref } from "vue";

const newTask = ref("");
const tasks   = ref([]);

function addTask() {
  const text = newTask.value.trim();

  if (!text) return;

  tasks.value.unshift({ text, highPriority: false });
  newTask.value = "";
}

function deleteTask(index) {
  tasks.value.splice(index, 1);
}

function togglePriority(task) {
  task.highPriority = !task.highPriority;
}
</script>

<template>
  <div class="container py-4">
    <h2 class="mb-3">To-Do List</h2>

    <form @submit.prevent="addTask()" class="d-flex mb-3">
      <input v-model="newTask"
             type="text"
             class="form-control me-2"
             placeholder="Enter a new task" />

      <button type="submit" class="btn btn-primary">Add</button>
    </form>

    <ul class="list-group">
      <li
        v-for="(task, id) in tasks"
        :key="id"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <div>
          {{ task.text }}

          <span v-if="task.highPriority" class="ms-2 text-danger fw-bold">
            (High Priority)
          </span>

          <span v-else class="ms-2 text-secondary">
            (Low Priority)
          </span>
        </div>

        <div>
          <button
            class="btn btn-warning btn-sm me-2"
            @click="togglePriority(task)"
          >
            {{ task.highPriority
              ? "Mark as Low Priority"
              : "Mark as High Priority" }}
          </button>

          <button class="btn btn-danger btn-sm" @click="deleteTask(id)">
            Delete
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>


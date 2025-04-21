<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

import TieredMenu from "primevue/tieredmenu";

import { BASE_URL } from "src/assets/baseUrl";

const menuRef = ref(null);

const pages = [
  { label: "Job Explorer",    route: "/"            },
  { label: "Job Application", route: "/application" },
  { label: "To Do List",      route: "/todo"        }
];
</script>

<template>
  <header class="d-flex flex-column">
    <section class="d-flex flex-row align-items-center justify-content-between px-5 py-2 bg-primary-subtle">
      <a
        class="fs-4 fw-bold bg-transparent cursor-pointer"
        :href="BASE_URL"
      >
        Insight Hire
      </a>

      <nav class="d-none d-lg-flex gap-3 align-items-center">
        <RouterLink to="/">           Job Explorer   </RouterLink>
        <RouterLink to="/application">Job Application</RouterLink>
        <RouterLink to="/todo">       To Do List     </RouterLink>
      </nav>

      <section class="d-flex d-lg-none align-items-center">
        <button class="btn btn-link p-0" @click="menuRef.toggle($event)">
          <i class="fas fa-bars fs-3"></i>
        </button>

        <TieredMenu
          :model="pages"
          popup
          ref="menuRef"
          class="custom-tiered-menu"
        >
          <template #item="{ item }">
            <RouterLink :to="item.route" custom>
              <a :href="`${BASE_URL}#${item.route}`">
                <span :class="item.icon"></span>
                <p>{{ item.label }}</p>
              </a>
            </RouterLink>
          </template>
        </TieredMenu>
      </section>
    </section>

    <img src="../assets/sky.jpg"
         alt="Site banner"
         class="w-100"
         height="150"
         style="object-fit: cover;" />
  </header>
</template>

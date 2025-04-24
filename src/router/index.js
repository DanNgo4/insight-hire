import { createRouter, createWebHistory } from "vue-router";
import JobExplorerView from "src/views/JobExplorerView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: JobExplorerView,
      meta: { title: "Job Explorer" },
      children: [
        { path: "",    component: import("src/components/JobOverview.vue") },
        { path: ":id", component: import("src/components/JobDetail.vue") }
      ]
    },

    {
      path: "/application",
      name: "application",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("src/views/JobApplicationView.vue"),
      meta: { title: "Job Application" }
    },

    {
      path: "/todo",
      name: "todo",
      component: () => import("src/views/ToDoListView.vue"),
      meta: { title: "To Do List" }
    },
  ],
});

export default router;

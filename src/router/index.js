import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomePage"),
    meta: {
      title: "Home Page",
    },
  },
  {
    path: "/show-todo",
    name: "show todo",
    component: () => import("@/views/showTodos.vue"),
    meta: {
      title: "Show Todos",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

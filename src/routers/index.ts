import { createRouter, createWebHistory } from "vue-router";
import { publicRoutes } from "./public";


export const routers = createRouter({
  routes: [...publicRoutes],
  history: createWebHistory(import.meta.env.BASE_URL)
})
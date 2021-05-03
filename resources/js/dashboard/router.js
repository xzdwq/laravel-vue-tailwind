import { createRouter, createWebHistory } from "vue-router";

import Index from "./views/Index";

const routes = [
  { path: '/dashboard', component: Index }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
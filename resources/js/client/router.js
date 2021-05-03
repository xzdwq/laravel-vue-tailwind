import { createRouter, createWebHistory } from "vue-router";

import Index from "./views/Index";

const routes = [
  { path: '/', component: Index }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
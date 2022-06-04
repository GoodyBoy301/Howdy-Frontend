import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Chat from "../views/Chat/index.vue";
import Explore from "../views/Explore.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/user/:contact",
    name: "Chat",
    component: Chat,
    props: true,
  },
  {
    path: "/explore",
    name: "Explore",
    component: Explore, 
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

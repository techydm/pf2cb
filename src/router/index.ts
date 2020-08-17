import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue")
  },
  {
    path: "/backgrounds",
    name: "background",
    component: () => import("../views/Background.vue")
  },
  {
    path: "/characters",
    name: "character",
    component: () => import("../views/Character.vue")
  },
  {
    path: "/classes",
    name: "classes",
    component: () => import("../views/Class.vue")
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import("../views/Setting.vue")
  },
  {
    path: "/feats",
    name: "feats",
    component: () => import("../views/Feats.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

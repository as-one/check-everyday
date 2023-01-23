import { createRouter, createWebHistory } from "vue-router";
import Html from "@/components/Html.vue";
import Css from "@/components/Css.vue";
import Js from "@/components/Js.vue";
import Ts from "@/components/Ts.vue";
import Vue from "@/components/Vue.vue";
import React from "@/components/React.vue";
import Root from "@/components/Root.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "root",
      component: Root,
    },
    {
      path: "/html",
      name: "html",
      component: Html,
    },
    {
      path: "/css",
      name: "css",
      component: Css,
    },
    {
      path: "/js",
      name: "js",
      component: Js,
    },
    {
      path: "/ts",
      name: "ts",
      component: Ts,
    },
    {
      path: "/vue",
      name: "vue",
      component: Vue,
    },
    {
      path: "/react",
      name: "react",
      component: React,
    },
  ],
});

export default router;

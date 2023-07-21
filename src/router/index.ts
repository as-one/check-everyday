import { createRouter, createWebHistory } from "vue-router";
import Root from "@/components/Root.vue";
import AppSec from "@/components/AppSec.vue";
import Architecture from "@/components/Architecture.vue";
import Css from "@/components/Css.vue";
import DevOps from "@/components/DevOps.vue";
import Go from "@/components/Go.vue";
import Html from "@/components/Html.vue";
import Js from "@/components/Js.vue";
import Php from "@/components/Php.vue"
import Python from "@/components/Python.vue"
import React from "@/components/React.vue";
import Sql from "@/components/Sql.vue";
import Theory from "@/components/Theory.vue";
import Ts from "@/components/Ts.vue";
import Vue from "@/components/Vue.vue";
import Java from "@/components/Java.vue";
import Angular from "@/components/Angular.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "root",
      component: Root,
    },
    {
      path: "/angular",
      name: "angular",
      component: Angular,
    },
    {
      path: "/appsec",
      name: "appsec",
      component: AppSec,
    },
    {
      path: "/architecture",
      name: "architecture",
      component: Architecture,
    },
    {
      path: "/css",
      name: "css",
      component: Css,
    },
    {
      path: "/devops",
      name: "devops",
      component: DevOps,
    },
    {
      path: "/go",
      name: "go",
      component: Go,
    },
    {
      path: "/html",
      name: "html",
      component: Html,
    },
    {
      path: "/java",
      name: "java",
      component: Java,
    },
    {
      path: "/js",
      name: "js",
      component: Js,
    },
    {
      path: "/php",
      name: "php",
      component: Php,
    },
    {
      path: "/python",
      name: "python",
      component: Python,
    },
    {
      path: "/react",
      name: "react",
      component: React,
    },
    {
      path: "/sql",
      name: "sql",
      component: Sql,
    },
    {
      path: "/theory",
      name: "theory",
      component: Theory,
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
  ],
});

export default router;

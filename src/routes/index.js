import Vue from "vue";
import Router from "vue-router";
import MainView from "../views";

Vue.use(Router);

export const router = new Router({
  routes: [{ path: "/", component: MainView }],
});

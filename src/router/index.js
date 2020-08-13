import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: (to, from, next) => {
      if (!store.state.authenticated) {
        next("/login");
      }

      next();
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

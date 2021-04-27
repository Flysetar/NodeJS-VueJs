import Vue from "vue";
import Router from "vue-router";
import Login from"./components/login.vue";
import Register from"./components/register.vue";
import Home from"./components/home.vue";
import Erreur from"./components/errorPage.vue";
import User from"./components/user.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/erreur",
      name: "erreur",
      component: Erreur
    },
    {
      path: "/user",
      name: "user",
      component: User
    },
  ]
});
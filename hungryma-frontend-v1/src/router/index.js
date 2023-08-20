import { createRouter, createWebHistory } from "vue-router";
import LoginUser from "../pages/Auth/LoginUser.vue";
import LoginVendor from "../pages/Auth/LoginVendor.vue";
import RegisterUser from "../pages/Auth/RegisterUser.vue";
import RegisterVendor from "../pages/Auth/RegisterVendor.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/home",
    //   name: "home",
    //   component: Home,
    // },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
    {
      path: "/login/user",
      name: "login-user",
      component: LoginUser,
    },
    {
      path: "/login/vendor",
      name: "login-vendor",
      component: LoginVendor,
    },
    {
      path: "/register/user",
      name: "register-user",
      component: RegisterUser,
    },
    {
      path: "/register/vendor",
      name: "register-vendor",
      component: RegisterVendor,
    },
  ],
});

export default router;

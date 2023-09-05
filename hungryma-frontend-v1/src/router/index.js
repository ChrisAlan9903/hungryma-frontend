import { createRouter, createWebHistory } from "vue-router";
import LoginUser from "../pages/Auth/LoginUser.vue";
import LoginVendor from "../pages/Auth/LoginVendor.vue";
import RegisterUser from "../pages/Auth/RegisterUser.vue";
import RegisterVendor from "../pages/Auth/RegisterVendor.vue";
import UserHome from "../pages/User/UserHome.vue";
import UserCart from "../pages/User/UserCart.vue";
import UserProfile from "../pages/User/UserProfile.vue";
import UserUpdate from "../pages/User/UserUpdate.vue";
import UserAllMenu from "../pages/User/UserAllMenu.vue";
import UserCheckout from "../pages/User/UserCheckout.vue";
import NavbarUser from "../components/NavbarUser.vue";
import NavbarVendor from "../components/NavbarVendor.vue";
import VendorCurrentOrder from "../pages/Vendor/VendorCurrentOrder.vue";
import VendorPastOrder from "../pages/Vendor/VendorPastOrder.vue";
import VendorMenus from "../pages/Vendor/VendorMenus.vue";
import VendorAddMenu from "../pages/Vendor/VendorAddMenu.vue";

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
    // {
    //   path: "/login/user",
    //   name: "login-user",
    //   component: LoginUser,
    // },
    {
      path: "/",
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
    {
      path: "/user/home",
      name: "user-home",
      components: {
        default: UserHome,
        // navigation: NavbarUser,
      },
    },
    {
      path: "/user/all-menu",
      name: "user-all-menu",
      components: {
        default: UserAllMenu,
        // navigation: NavbarUser,
      },
    },
    {
      path: "/user/cart",
      name: "user-cart",
      components: {
        default: UserCart,
        // navigation: NavbarUser,
      },
    },
    {
      path: "/user/profile",
      name: "user-profile",
      components: {
        default: UserProfile,
        // navigation: NavbarUser,
      },
    },
    {
      path: "/user/update",
      name: "user-update",
      components: {
        default: UserUpdate,
        // navigation: NavbarUser,
      },
    },
    {
      path: "/user/checkout",
      name: "user-checkout",
      components: {
        default: UserCheckout,
        // navigation: NavbarUser,
      },
    },
    {
      path: "/vendor/current-order",
      name: "vendor-current-order",
      components: {
        default: VendorCurrentOrder,
        // navigation: NavbarVendor,
      },
    },
    {
      path: "/vendor/past-order",
      name: "vendor-past-order",
      components: {
        default: VendorPastOrder,
        // navigation: NavbarVendor,
      },
    },
    {
      path: "/vendor/menus",
      name: "vendor-menus",
      components: {
        default: VendorMenus,
        // navigation: NavbarVendor,
      },
    },
    {
      path: "/vendor/add-menu",
      name: "vendor-add-menu",
      components: {
        default: VendorAddMenu,
        // navigation: NavbarVendor,
      },
    },
    // {
    //   path: "/user/home",
    //   name: "user-home",
    //   component: UserHome,
    // },
  ],
});

export default router;

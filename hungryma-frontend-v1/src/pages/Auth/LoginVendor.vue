<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import LoginVendorForm from "@/components/Auth/LoginVendorForm.vue";
// import LoginVendorForm from "../components/Auth/LoginVendorForm.vue";
import { useReloadPageStore } from "../../store/reloadPage";
import { storeToRefs } from "pinia";

const reloadPageStore = useReloadPageStore();
const { setReloadOnce } = reloadPageStore;
const { reloadOnce } = storeToRefs(reloadPageStore);

// function reloadPage() {
//   if (reloadOnce.value == false) {
//     console.log(`reloadOnce value:`);
//     window.location.reload();
//     console.log(`page reloaded`);
//     setReloadOnce(true);
//   }
// }
// // reloadPage();
</script>
<template>
  <div
    id="login-page"
    class="relative flex flex-col items-center w-full h-screen gap-4 overflow-hidden"
  >
    <!-- bg image for Auth -->
    <img
      class="absolute w-full -z-20"
      src="@/assets/chef-2.jpg"
      alt="bg-image"
    />

    <div class="absolute inset-0 -z-20 bg-gray-50 bg-opacity-10"></div>

    <!-- end of bg image for Auth -->

    <!-- navbar for Auth -->
    <nav
      :class="['w-full p-8 flex justify-between bg-gray-200 ', 'bg-opacity-30']"
    >
      <h1 class="logo">
        <span class="text-orange-500">H</span>ungryMa<span
          class="text-orange-500"
          >?</span
        >
      </h1>

      <div id="select-login" class="flex gap-12">
        <RouterLink
          :to="{ name: 'login-user' }"
          class="text-orange-300 hover:text-orange-500"
        >
          <p class="hover:underline">Login as a User</p>
        </RouterLink>
      </div>
    </nav>
    <!-- end of navbar for Auth -->
    <div
      id="render-login"
      class="flex items-center justify-center w-full h-full"
    >
      <LoginVendorForm />
      <!-- end of Login form -->
    </div>
  </div>
</template>

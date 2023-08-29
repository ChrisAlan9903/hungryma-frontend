<script setup>
// pass current page as prop here to get the cuurent page selected content.

import { ref } from "vue";
import { RouterLink } from "vue-router";
import { useRouter } from "vue-router";
// import { defineProps } from "vue";

// const userPage = ref("");

const { userPage } = defineProps(["userPage"]);
const router = useRouter();

// FEATURE: function for Log Out
function handleLogout() {
  localStorage.removeItem("accessToken");
  alert(`You have logged out !`);
  router.push({ name: "login-user" });
}

// const selectedContent = ref("current-order");
</script>
<template>
  <div>
    <!-- navbar for VendorView -->
    <nav class="flex justify-between w-full p-8 bg-gray-200 bg-opacity-30">
      <RouterLink :to="{ name: 'vendor-current-order' }">
        <h1 class="cursor-pointer logo">
          <span class="text-orange-500">H</span>ungryMa<span
            class="text-orange-500"
            >?</span
          >
        </h1>
      </RouterLink>
      <!-- Navigation links sections -->
      <div id="select-vendor-view" class="flex gap-12">
        <RouterLink
          :to="{ name: 'user-home' }"
          :class="[
            'border border-transparent rounded-xl px-3 py-1   transition-all delay-75 flex justify-center items-center',
            userPage === `user-home`
              ? 'bg-orange-500 text-white hover:bg-orange-600'
              : 'hover:border-orange-500 hover:text-orange-500',
          ]"
        >
          <p class="">Home</p>
        </RouterLink>
        <RouterLink
          :to="{ name: 'user-cart' }"
          :class="[
            'border border-transparent rounded-xl px-3 py-1   transition-all delay-75 flex justify-center items-center',
            userPage === `user-cart`
              ? 'bg-orange-500 text-white hover:bg-orange-600'
              : 'hover:border-orange-500 hover:text-orange-500',
          ]"
        >
          <p class="">Cart</p>
        </RouterLink>
        <RouterLink
          :to="{ name: 'user-profile' }"
          :class="[
            'border border-transparent rounded-xl px-3 py-1   transition-all delay-75 flex justify-center items-center',
            userPage === `user-profile`
              ? 'bg-orange-500 text-white hover:bg-orange-600'
              : 'hover:border-orange-500 hover:text-orange-500',
          ]"
        >
          <p class="">Profile</p>
        </RouterLink>

        <button
          @click="handleLogout"
          class="flex items-center gap-1 px-3 py-1 text-xs text-white transition-all delay-75 bg-orange-800 border border-transparent rounded-xl hover:bg-orange-500"
        >
          <i class="text-white material-icons"> logout </i>

          <p class="">Log Out</p>
        </button>
      </div>
    </nav>
    <!-- end of navbar for VendorView -->
  </div>
</template>

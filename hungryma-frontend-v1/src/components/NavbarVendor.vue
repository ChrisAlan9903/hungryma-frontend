<script setup>
// pass current page as prop here to get the cuurent page selected content.

import { ref } from "vue";
import { RouterLink } from "vue-router";
import { defineProps } from "vue";

// const vendorPage = ref("");

const { vendorPage } = defineProps(["vendorPage"]);

// const selectedContent = ref("current-order");
</script>
<template>
  <div>
    <!-- navbar for VendorView -->
    <nav class="w-full p-8 flex justify-between bg-gray-200 bg-opacity-30">
      <RouterLink :to="{ name: 'vendor-current-order' }">
        <h1 class="logo cursor-pointer">
          <span class="text-orange-500">H</span>ungryMa<span
            class="text-orange-500"
            >?</span
          >
        </h1>
      </RouterLink>

      <div id="select-vendor-view" class="flex gap-12">
        <RouterLink
          :to="{ name: 'vendor-current-order' }"
          :class="[
            'border border-transparent rounded-xl px-3 py-1   transition-all delay-75 flex justify-center items-center',
            vendorPage === `current-order`
              ? 'bg-orange-500 text-white hover:bg-orange-600'
              : 'hover:border-orange-500 hover:text-orange-500',
          ]"
        >
          <p class="">Ongoing Orders</p>
        </RouterLink>
        <RouterLink
          :to="{ name: 'vendor-past-order' }"
          :class="[
            'border border-transparent rounded-xl px-3 py-1   transition-all delay-75 flex justify-center items-center',
            vendorPage === `past-order`
              ? 'bg-orange-500 text-white hover:bg-orange-600'
              : 'hover:border-orange-500 hover:text-orange-500',
          ]"
        >
          <p class="">Past Orders</p>
        </RouterLink>
        <RouterLink
          :to="{ name: 'vendor-menus' }"
          :class="[
            'border border-transparent rounded-xl px-3 py-1   transition-all delay-75 flex justify-center items-center',
            vendorPage === `all-menus`
              ? 'bg-orange-500 text-white hover:bg-orange-600'
              : 'hover:border-orange-500 hover:text-orange-500',
          ]"
        >
          <p class="">All Menus</p>
        </RouterLink>

        <button
          @click="handleLogout"
          class="flex items-center gap-1 text-xs bg-orange-800 text-white border border-transparent rounded-xl px-3 py-1 transition-all delay-75 hover:bg-orange-500"
        >
          <i class="material-icons text-white"> logout </i>

          <p class="">Log Out</p>
        </button>
      </div>
    </nav>
    <!-- end of navbar for VendorView -->
  </div>
</template>

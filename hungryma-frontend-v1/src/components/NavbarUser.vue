<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <nav class="w-full p-8 flex justify-between bg-gray-200 bg-opacity-30">
    <!-- <RouterLink :to="{ name: 'home' }"> -->
    <h1 class="logo cursor-pointer">
      <span class="text-orange-500">H</span>ungryMa<span class="text-orange-500"
        >?</span
      >
    </h1>
    <!-- </RouterLink> -->

    <div id="select-vendor-view" class="flex gap-12">
      <RouterLink :to="{ path: '/cart' }">
        <button
          class="border border-transparent rounded-xl px-3 py-1 transition-all delay-75 hover:border-orange-500 hover:text-orange-500"
        >
          <p class="">Cart</p>
        </button></RouterLink
      >
      <RouterLink :to="{ path: '/profile' }">
        <button
          class="border border-transparent rounded-xl px-3 py-1 transition-all delay-75 hover:border-orange-500 hover:text-orange-500"
        >
          <p class="">Profile</p>
        </button></RouterLink
      >

      <button
        @click="handleLogout"
        class="bg-orange-800 text-white border border-transparent rounded-xl px-3 py-1 transition-all delay-75 hover:bg-orange-500"
      >
        <p class="">Log Out</p>
      </button>
    </div>
  </nav>
</template>

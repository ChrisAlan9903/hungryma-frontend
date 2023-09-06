<script setup>
import { RouterLink } from "vue-router";
import { useUserCartStore } from "../../store/userCart";
</script>
<template>
  <section
    class="flex items-center justify-center w-screen h-screen bg-gray-500 bg-opacity-20"
  >
    <div
      class="flex flex-col items-center justify-center w-2/5 px-20 py-10 bg-white shadow-xl bg-opacity-20 rounded-2xl"
    >
      <h1 class="mb-4 text-4xl font-medium text-center text-gray-500">
        Your Order is placed successfully !
      </h1>

      <RouterLink
        :to="{ name: 'user-all-menu' }"
        class="px-6 py-3 font-semibold text-center text-orange-600 transition-all border-2 border-orange-600 rounded-full w-fit hover:text-white hover:bg-orange-500"
      >
        <p class="">Back to All Menu</p>
      </RouterLink>
    </div>
  </section>
</template>

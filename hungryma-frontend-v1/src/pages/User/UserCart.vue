<script setup>
import { ref } from "vue";
import { useCurrentUserStore } from "../../store/currentUser.js";
import { useRouter } from "vue-router";
import NavbarUser from "../../components/NavbarUser.vue";
import CartItem from "../../components/User/CartItem.vue";

// TO EDIT: temporary variable to set how many times to render child components
const renderCount = 5;
</script>

<template>
  <NavbarUser userPage="user-cart" />
  <!-- Cart Item Sections -->
  <section class="flex w-full h-screen max-h-screen bg-red-100">
    <!-- Added item list  -->
    <div class="w-2/3 p-20 bg-yellow-100">
      <!-- inner container -->
      <div class="flex flex-col w-full h-full bg-green-200">
        <!-- title for each part -->
        <div
          class="flex items-center justify-between pt-6 pb-3 bg-pink-200 border-b-2 border-slate-400"
        >
          <h1 class="text-4xl font-bold">Title</h1>
          <h3 class="text-xl font-bold">3 Items</h3>
        </div>
        <!-- item list container -->
        <div class="flex-1 w-full bg-purple-100">
          <!-- column description -->
          <div class="flex justify-between w-full mt-6 mb-3">
            <p class="w-2/5 text-left text-gray-400">Product Details</p>
            <p class="w-1/5 text-center text-gray-400">Quantity</p>
            <p class="w-1/5 text-center text-gray-400">Price</p>
            <p class="w-1/5 text-center text-gray-400">Total</p>
          </div>

          <!-- item list wrapper -->
          <div
            class="w-full h-full overflow-auto xl:max-h-[420px] 2xl:max-h-[420px] mt-6"
          >
            <!-- item list -->
            <CartItem v-for="index in renderCount" :key="index" />
          </div>
        </div>
      </div>
    </div>

    <!-- Total amount  -->
    <div class="w-1/3 px-10 py-20 bg-orange-100">
      <!-- inner container -->
      <div class="w-full h-full bg-green-200">
        <!-- title for each part -->
        <div class="">
          <h2 class="text-center">Title</h2>
        </div>
        <div class="w-full bg-purple-500"></div>
      </div>
    </div>
  </section>
  <section class="flex items-center justify-center h-56">
    <h2 class="text-4xl">Footer</h2>
  </section>
</template>

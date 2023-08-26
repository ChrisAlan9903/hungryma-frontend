<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

import RegisterVendorForm from "@/components/Auth/RegisterVendorForm.vue";
</script>
<template>
  <div
    id="login-page"
    class="w-full h-screen flex flex-col gap-4 items-center relative overflow-hidden"
  >
    <!-- bg image for Auth -->
    <img
      class="w-full absolute -z-20"
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
          :to="{ name: 'register-user' }"
          class="text-orange-300 hover:text-orange-500"
        >
          <p class="hover:underline">Sign Up as a User</p>
        </RouterLink>
      </div>
    </nav>
    <!-- end of navbar for Auth -->
    <div
      id="render-login"
      class="w-full h-full flex items-center justify-center"
    >
      <!-- <UserLogin3 v-if="selectedLogin === 'user'" />
      <VendorLogin v-if="selectedLogin === 'vendor'" /> -->
      <RegisterVendorForm />
      <!-- end of Login form -->
    </div>
  </div>
</template>

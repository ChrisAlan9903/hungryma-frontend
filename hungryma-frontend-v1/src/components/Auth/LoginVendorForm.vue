<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import { useRouter } from "vue-router";

const visibility = ref(false);
</script>
<template>
  <!-- component -->
  <form @submit="handleLogin" class="flex justify-center items-center">
    <div class="py-12 px-12 bg-white bg-opacity-80 rounded-2xl shadow-xl z-20">
      <div>
        <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">
          Log In
        </h1>
        <p
          class="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer"
        >
          Log in and manage your sales seamlessly!
        </p>
      </div>
      <div class="space-y-4">
        <div
          class="flex gap-1 items-center text-sm py-3 px-4 rounded-lg w-full border border-orange-600 outline-none"
        >
          <i class="material-icons text-orange-700 mr-4"> email </i>
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            class="outline-none bg-transparent"
            required
          />
        </div>
        <div
          class="flex gap-1 items-center text-sm py-3 px-4 rounded-lg w-full border border-orange-600 outline-none"
        >
          <i class="material-icons text-orange-700 mr-4"> lock </i>
          <input
            v-model="password"
            :type="visibility ? 'text' : 'password'"
            placeholder="Password"
            class="outline-none bg-transparent mr-auto"
            required
          />
          <div
            id="visibility"
            @click="visibility = !visibility"
            class="cursor-pointer"
          >
            <i
              v-if="visibility === false"
              class="material-icons text-orange-700"
            >
              visibility_off
            </i>
            <i v-else class="material-icons text-orange-600"> visibility </i>
          </div>
        </div>
      </div>
      <div class="text-center mt-6 transition-all delay-300">
        <button
          type="submit"
          class="py-3 w-64 text-xl text-white bg-orange-700 rounded-2xl transition-all delay-75 hover:bg-orange-400"
        >
          Log In
        </button>
        <p class="mt-4 text-sm">
          Don't Have An Account?
          <RouterLink
            :to="{ name: 'register-vendor' }"
            class="text-orange-700 hover:underline duration-150 ease-linear"
            >Sign Up here</RouterLink
          >
        </p>
      </div>
    </div>
  </form>
</template>

<script setup>
import Footer from "../../components/Footer.vue";
import { RouterLink } from "vue-router";
import NavbarUser from "../../components/NavbarUser.vue";
import { useCurrentUserStore } from "../../store/currentUser";
const currentUserStore = useCurrentUserStore();
const { token, currentUser, setToken, getCurrentUser } = currentUserStore;
</script>
<template>
  <NavbarUser userPage="user-home" class="z-20" />
  <section>
    <div class="w-full bg-yellow-100 h-[650px] relative flex justify-center">
      <!-- hero bg image -->
      <img
        src="../../assets/cover-1.jpg"
        alt="hero section image"
        class="absolute z-0 object-cover w-full h-full"
      />

      <div class="z-0 flex flex-col items-center justify-center">
        <h1 class="mb-6 text-4xl font-bold">Your stomach is growling?</h1>
        <p class="mb-4 text-xl font-normal bg-white bg-opacity-10">
          Satisfy your cravings with all the food selections !
        </p>
        <RouterLink
          :to="{ name: 'user-all-menu' }"
          class="px-4 py-2 font-semibold text-orange-600 transition-all bg-white bg-opacity-50 border-2 border-orange-600 rounded-full hover:text-white hover:bg-orange-500"
        >
          <p>Start Ordering</p>
        </RouterLink>
      </div>
    </div>
  </section>
  <Footer />
</template>

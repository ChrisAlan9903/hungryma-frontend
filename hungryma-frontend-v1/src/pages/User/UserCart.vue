<script setup>
import { ref } from "vue";
import { useCurrentUserStore } from "../../store/currentUser.js";
import { useRouter } from "vue-router";
import NavbarUser from "../../components/NavbarUser.vue";
</script>

<template>
  <NavbarUser userPage="user-cart" />
  <div class="bg-blue-400">
    <h1>Content for user home</h1>
    <p>{{}}</p>
  </div>
</template>

<script setup>
import NavbarUser from "../../components/NavbarUser.vue";
import { useCurrentUserStore } from "../../store/currentUser";
const currentUserStore = useCurrentUserStore();
const { token, currentUser, setToken, getCurrentUser } = currentUserStore;
</script>
<template>
  <NavbarUser userPage="user-all-menu" />
  <div class="bg-blue-400">
    <h1>Content for all menu</h1>
    <p>{{ currentUser }}</p>
  </div>
</template>

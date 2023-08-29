<script setup>
import NavbarVendor from "../../components/NavbarVendor.vue";
import NavbarUser from "../../components/NavbarUser.vue";
import { RouterLink, useRouter } from "vue-router";
import { useCurrentUserStore } from "../../store/currentUser";

const router = useRouter();

// Set Up: pinia store for currentUser
const currentUserStore = useCurrentUserStore();
const { token, currentUser, setToken, getCurrentUser } = currentUserStore;

// Set up: get token from localStorage
const accessToken = localStorage.getItem("accessToken");
</script>
<template>
  <NavbarUser userPage="user-profile" />
  <section id="ongoing-order" class="flex justify-center max-h-screen p-3 m-24">
    <div class="w-1/2 overflow-hidden bg-white border rounded-lg shadow-xl">
      <div class="flex justify-between px-4 py-5 sm:px-6">
        <div class="">
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            User Profile
          </h3>
          <p class="max-w-2xl mt-1 text-sm text-gray-500">
            This is your user information.
          </p>
        </div>
        <div>
          <RouterLink
            :to="{ name: 'user-update' }"
            :class="[
              'border border-orange-500 rounded-xl px-3 py-1   transition-all delay-75 flex justify-center items-center',
              'text-orange-500 text-xs',

              'hover:border-orange-500 hover:text-white hover:bg-orange-500',
            ]"
            >Update Profile</RouterLink
          >
        </div>
      </div>
      <div class="px-4 py-5 border-t border-gray-200 sm:p-0">
        <dl class="sm:divide-y sm:divide-gray-200">
          <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Username</dt>
            <dd class="mt-1 ml-10 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ "Chris" }}
              <!-- {{ currentUserData.username }} -->
            </dd>
          </div>
          <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Email address</dt>
            <dd class="mt-1 ml-10 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ "chris@gmail.com" }}
              <!-- {{ currentUserData.email }} -->
            </dd>
          </div>
          <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Phone number</dt>

            <dd class="mt-1 ml-10 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              (123) 456-7890
            </dd>
          </div>
          <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Address</dt>
            <dd class="mt-1 ml-10 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ "-" }}
              <!-- {{ currentUserData.address || "-" }} -->
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

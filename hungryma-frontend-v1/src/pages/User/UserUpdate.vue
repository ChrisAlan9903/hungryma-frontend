<script setup>
import NavbarUser from "../../components/NavbarUser.vue";
</script>
<template>
  <NavbarUser userPage="user-profile" />
  <section class="w-full mt-20 bg-red-300">
    <form
      @submit="handleUpdateUser"
      class="flex items-center justify-center max-w-full"
    >
      <div
        class="z-20 w-full max-w-3xl px-12 py-12 bg-white shadow-xl bg-opacity-90 rounded-2xl"
      >
        <div>
          <p
            class="mb-8 text-sm font-semibold tracking-wide text-left text-gray-700 cursor-pointer w-96"
          >
            Fill in the information below to update your profile.
          </p>
        </div>
        <div class="space-y-4">
          <!-- username -->
          <div id="update-username" class="w-full">
            <label for="update-username" class="text-sm text-gray-500"
              >Username</label
            >
            <div
              class="flex items-center w-full gap-1 px-4 py-3 text-sm border rounded-lg outline-none focus-within:ring-orange-300 focus-within:ring-2"
            >
              <input
                v-model="nameInput"
                type="text"
                placeholder="Username"
                class="w-full mr-auto bg-transparent outline-none"
                required
              />
            </div>
          </div>
          <!-- email -->
          <div id="update-email">
            <label for="update-email" class="text-sm text-gray-500"
              >Email</label
            >
            <div
              class="flex items-center w-full gap-1 px-4 py-3 text-sm border rounded-lg outline-none focus-within:ring-orange-300 focus-within:ring-2"
            >
              <input
                v-model="emailInput"
                type="email"
                placeholder="user@gmail.com"
                class="w-full mr-auto bg-transparent outline-none"
                required
              />
            </div>
          </div>
          <!-- phone number -->
          <div id="update-phone-num">
            <label for="update-phone-num" class="text-sm text-gray-500"
              >Phone number</label
            >
            <div
              class="flex items-center w-full gap-1 px-4 py-3 text-sm border rounded-lg outline-none focus-within:ring-orange-300 focus-within:ring-2"
            >
              <input
                v-model="phoneNumInput"
                type="text"
                placeholder="012-3456789"
                class="w-full mr-auto bg-transparent outline-none"
                required
              />
            </div>
          </div>
          <!-- address -->
          <div id="update-address">
            <label for="update-address" class="text-sm text-gray-500"
              >Address</label
            >
            <div
              class="flex items-center w-full gap-1 px-4 py-3 text-sm border rounded-lg outline-none focus-within:ring-orange-300 focus-within:ring-2"
            >
              <input
                v-model="addressInput"
                type="text"
                placeholder="Street 1, Manhattan City, Malaysia"
                class="w-full mr-auto bg-transparent outline-none"
                required
              />
            </div>
          </div>
        </div>

        <div class="mt-6 text-center transition-all delay-300">
          <button
            type="submit"
            class="w-full py-3 text-xl text-white transition-all delay-75 bg-orange-400 rounded-2xl hover:bg-orange-600"
          >
            Update Details
          </button>
        </div>
      </div>
    </form>
  </section>
</template>

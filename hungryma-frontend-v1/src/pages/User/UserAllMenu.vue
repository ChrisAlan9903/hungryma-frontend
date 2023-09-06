<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import NavbarUser from "../../components/NavbarUser.vue";
import UserMenuCard from "../../components/User/UserMenuCard.vue";
import AddedToCartAlert from "../../components/User/AddedToCartAlert.vue";
import { useCurrentUserStore } from "../../store/currentUser";
import { useUserAllMenuStore } from "../../store/userAllMenu";

// Set Up: set up pinia stores
const userAllMenuStore = useUserAllMenuStore();
// const { allMenuList } = userAllMenuStore;
const { allMenuList } = storeToRefs(userAllMenuStore);

// console.log(`allMenuList:`, allMenuList.value);

const currentUserStore = useCurrentUserStore();
const { token, currentUser, setToken, getCurrentUser } = currentUserStore;

// Set Up: State and funciton to show or hide added to cart alert
const cartAlert = ref(false);

const handleOnAlert = () => {
  cartAlert.value = true;

  setTimeout(() => {
    cartAlert.value = false;
  }, 1000);
};
const handleCloseAlert = () => {
  cartAlert.value = false;
};
</script>
<template>
  <div class="relative w-full">
    <AddedToCartAlert v-if="cartAlert" @close-alert="handleCloseAlert" />
    <NavbarUser userPage="user-all-menu" />
    <!-- menu page -->
    <section class="flex w-full h-screen">
      <!-- filter section -->
      <div class="w-1/5 h-full px-8 pt-10 bg-slate-200">
        <div class="py-5">
          <h4 class="mb-3 text-xl font-medium">Categories</h4>
          <p :class="['underline-offset-2 underline hover:text-orange-600 ']">
            item 1
          </p>
          <p :class="['underline-offset-2 underline hover:text-orange-600 ']">
            item 1
          </p>
          <p :class="['underline-offset-2 underline hover:text-orange-600 ']">
            item 1
          </p>
        </div>
        <div class="py-5">
          <h4 class="mb-3 text-xl font-medium">Vendors</h4>
          <p :class="['underline-offset-2 underline hover:text-orange-600 ']">
            item 1
          </p>
          <p :class="['underline-offset-2 underline hover:text-orange-600 ']">
            item 1
          </p>
          <p :class="['underline-offset-2 underline hover:text-orange-600 ']">
            item 1
          </p>
        </div>
        <div class="py-5">
          <h4 class="mb-3 text-xl font-medium">Price</h4>
          <p :class="['underline-offset-2 underline hover:text-orange-600 ']">
            item 1
          </p>
          <p :class="['underline-offset-2 underline hover:text-orange-600 ']">
            item 1
          </p>
          <p :class="['underline-offset-2 underline hover:text-orange-600 ']">
            item 1
          </p>
        </div>
      </div>

      <!-- menu list section -->
      <div class="flex flex-col items-center w-4/5 gap-10 py-8">
        <!-- menu searchbar section -->
        <div
          id="search-bar"
          class="mt-5 flex items-center h-12 gap-2 px-5 border-2 border-orange-300 rounded-full w-[450px] focus-within:ring-2 focus-within:ring-yellow-200"
        >
          <input
            type="text"
            placeholder="Chicken Burger"
            class="flex-1 px-3 text-gray-500 outline-none"
          />
          <i class="text-orange-300 material-icons-sharp"> search </i>
        </div>

        <!-- menu list container -->
        <div class="grid grid-cols-3 gap-10 overflow-auto">
          <UserMenuCard
            v-for="food in allMenuList"
            :key="food.id"
            :foodItem="food"
            @on-alert="handleOnAlert"
          />
          <!-- <UserMenuCard /> -->
        </div>
      </div>
    </section>

    <!--footer section -->
    <section class="flex items-center justify-center h-56 bg-slate-100">
      <h2 class="text-4xl">Footer</h2>
    </section>
  </div>
</template>

<!-- 
  TODO: 
  1. Need to add v-model binding based on the filter links. 
  2. Display logic is not set yet.

  
 -->

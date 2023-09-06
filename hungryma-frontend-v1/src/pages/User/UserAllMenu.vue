<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import NavbarUser from "../../components/NavbarUser.vue";
import UserMenuCard from "../../components/User/UserMenuCard.vue";
import AddedToCartAlert from "../../components/User/AddedToCartAlert.vue";
import MenuSearchBar from "../../components/User/MenuSearchBar.vue";
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

// Set Up: setting up filter state and function
const filteredArr = ref(allMenuList.value);

const categoriesArr = ref([
  "Western",
  "Asian",
  "Fast Foods",
  "Beverages",
  "Desserts",
  "Local Delicacies",
]);

// TODO: get from pinia or API calls
const vendorArr = ref([
  {
    id: 3,
    username: "Vendor 3",
  },
  {
    id: 4,
    username: "Vendor 4",
  },
  {
    id: 5,
    username: "Vendor 5",
  },
  {
    id: 6,
    username: "Vendor 6",
  },
  {
    id: 7,
    username: "Vendor 7",
  },
  {
    id: 8,
    username: "Vendor 8",
  },
]);

const setFilterAllMenu = () => {
  console.log(`filter: all Menu`);
  filteredArr.value = allMenuList.value;
  console.log(`filteredArr:`, filteredArr);
  // TODO: filter all menu below
};

const setFilterCategory = (filter) => {
  const index = categoriesArr.value.indexOf(filter);
  const foodIndex = index + 1;
  console.log(`index:`, foodIndex, `category:`, filter);

  // TODO: filter menu card below
  const filteredItem = allMenuList.value.filter(
    (item) => item.categoriesId === foodIndex
  );

  console.log(`filteredItem:`, filteredItem);
  filteredArr.value = filteredItem;
};

const setFilterVendor = (filter) => {
  console.log(`filter: vendor`, `vendorId:`, filter);
  // TODO: filter all menu below
  const filteredItem = allMenuList.value.filter(
    (vendor) => vendor.vendorId === filter
  );

  console.log(`filteredItem:`, filteredItem);
  filteredArr.value = filteredItem;
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
          <h4
            class="mb-3 text-xl font-medium duration-200 cursor-pointer hover:text-orange-600"
            @click="setFilterAllMenu"
          >
            All Menu
          </h4>
        </div>
        <div class="py-5">
          <h4
            class="mb-3 text-xl font-medium duration-200 cursor-pointer hover:text-orange-600"
          >
            Categories
          </h4>
          <button
            @click="setFilterCategory(category)"
            :class="[' hover:text-orange-600 block']"
            v-for="category in categoriesArr"
            :key="category"
          >
            {{ category }}
          </button>
        </div>
        <div class="py-5">
          <h4
            class="mb-3 text-xl font-medium duration-200 cursor-pointer hover:text-orange-600"
          >
            Vendors
          </h4>
          <button
            @click="setFilterVendor(vendor.id)"
            :class="[' hover:text-orange-600 block']"
            v-for="vendor in vendorArr"
            :key="vendor"
          >
            {{ vendor.username }}
          </button>
        </div>
        <!-- <div class="py-5">
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
        </div> -->
      </div>

      <!-- menu list section -->
      <div class="flex flex-col items-center w-4/5 gap-10 py-8">
        <!-- menu searchbar section (disabled for now)-->
        <!-- <MenuSearchBar /> -->

        <!-- menu list container -->
        <div class="grid grid-cols-3 gap-10 overflow-auto">
          <UserMenuCard
            v-for="food in filteredArr"
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

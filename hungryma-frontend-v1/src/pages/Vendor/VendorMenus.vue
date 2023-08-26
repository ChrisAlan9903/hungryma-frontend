<script setup>
import { ref, onMounted } from "vue";
import NavbarVendor from "@/components/NavbarVendor.vue";
import { RouterLink } from "vue-router";
import MenuCard from "@/components/Vendor/MenuCard.vue";
import { useVendorMenusStore } from "../../store/vendorMenus";
import { useCurrentUserStore } from "../../store/currentUser";

// Set Up: pinia store for currentUser
const currentUserStore = useCurrentUserStore();
const { token } = currentUserStore;

// Set Up: get token from localStorage
const accessToken = localStorage.getItem("accessToken");

// Set Up: pinia store for VendorMenuStore
const vendorMenusStore = useVendorMenusStore();
const { vendorMenuList, setMenuList } = vendorMenusStore;

// Set Up: creating an array to hold all menu from pinia
const menuItems = ref();

// get all menu for vendor from backend and store to pinia
async function getMenus() {
  const options = {
    method: "GET",
    headers: {
      Authorization: accessToken,
    },
  };

  try {
    const response = await fetch("http://localhost:3000/foodItems/", options);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    return err;
  }
}

onMounted(async () => {
  menuItems.value = await getMenus();
  console.log(`menuItems:`, menuItems.value);
  setMenuList(menuItems.value);
});
</script>
<template>
  <NavbarVendor vendorPage="all-menus" />
  <section
    id="ongoing-order"
    class="bg-red-400 max-h-screen h-screen flex flex-col m-10 shadow-lg rounded-3xl overflow-hidden border-2 border-gray-800"
  >
    <!-- Page title -->
    <div
      class="w-full h-24 flex justify-between items-center py-5 px-6 bg-gray-200"
    >
      <h1 class="text-xl font-semibold flex items-center">Past Orders</h1>

      <RouterLink
        :to="{ name: 'vendor-add-menu' }"
        :class="[
          'border-2 border-orange-500 rounded-xl px-3 py-3 transition-all delay-75 flex justify-center items-center text-orange-500 font-semibold',
          'hover:bg-orange-400 hover:text-white',
        ]"
      >
        <p class="">+ Add New Menu</p>
      </RouterLink>
    </div>
    <!-- Page content  -->
    <div
      class="flex-1 bg-orange-300 py-10 flex px-10 gap-5 max-w-full flex-wrap overflow-auto"
    >
      <!-- TODO: will change to v-for later -->
      <MenuCard />
      <MenuCard />
      <MenuCard />
      <MenuCard />
      <MenuCard />
      <MenuCard />
      <MenuCard />
      <MenuCard />
    </div>
  </section>
</template>

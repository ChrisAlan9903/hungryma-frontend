<script setup>
import { ref, onMounted } from "vue";
import NavbarVendor from "@/components/NavbarVendor.vue";
import { RouterLink, useRouter } from "vue-router";
import MenuCard from "@/components/Vendor/MenuCard.vue";
import { useVendorMenusStore } from "../../store/vendorMenus";
import { useCurrentUserStore } from "../../store/currentUser";

const router = useRouter();

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
// async function getMenus() {
//   const options = {
//     method: "GET",
//     headers: {
//       Authorization: accessToken,
//     },
//   };

//   try {
//     const response = await fetch("http://localhost:3000/foodItems/", options);
//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch (err) {
//     console.error(err);
//     return err;
//   }
// }

// delete request API for backend
async function deleteFoodItem(foodId) {
  console.log(`DELETE foodId:`, foodId);
  const options = {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  };

  try {
    const response = await fetch(
      `http://localhost:3000/foodItems/${foodId}`,
      options
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    return err;
  }
}

// Set Up: function to delete single Menu Item
async function handleDelete(itemId) {
  const deleteStatus = await deleteFoodItem(itemId);
  console.log(`deleteStatus:`, deleteStatus);

  if (deleteStatus == 1) {
    alert(`Menu deleted !`);
    // router.push("/vendor/menus");
    mountPage();
  } else {
    alert(`Error in deleting !`);
  }
}

// Set Up: mounting current data
// const mountPage = async () => {
//   menuItems.value = await getMenus();
//   console.log(`menuItems:`, menuItems.value);
//   setMenuList(menuItems.value);
// };

// onMounted(() => {
//   mountPage();
// });
</script>
<template>
  <NavbarVendor vendorPage="all-menus" />
  <section
    id="ongoing-order"
    class="flex flex-col h-screen max-h-screen m-10 overflow-hidden bg-red-400 border-2 border-gray-800 shadow-lg rounded-3xl"
  >
    <!-- Page title -->
    <div
      class="flex items-center justify-between w-full h-24 px-6 py-5 bg-gray-200"
    >
      <h1 class="flex items-center text-xl font-semibold">Past Orders</h1>

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
      class="flex flex-wrap flex-1 max-w-full gap-5 px-10 py-10 overflow-auto bg-orange-300"
    >
      <!-- TODO: will change to v-for later -->
      <div
        id="menu-list-wrapper"
        v-for="item in vendorMenuList"
        :key="item.id"
        class="flex flex-wrap w-fulls gap-9"
      >
        <MenuCard :foodItem="item" @delete="handleDelete(item.id)" />
      </div>
    </div>
  </section>
</template>

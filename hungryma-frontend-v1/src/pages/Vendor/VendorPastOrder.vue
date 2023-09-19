<script setup>
import NavbarVendor from "../../components/NavbarVendor.vue";
import { useVendorMenus2Store } from "../../store/vendorMenus2";
import { storeToRefs } from "pinia";

// Set Up: pinia store for currentUser
// const currentUserStore = useCurrentUserStore();
// const { token, currentUser, setToken, getCurrentUser } = currentUserStore;

// Set Up: pinia store for vendorMenu
const vendorMenu2Store = useVendorMenus2Store();
const {
  getVendorMenus,
  setVendorMenuIds,
  getVendorOrderItems,
  setVendorOrderList,
  getOrderName,
  setVendorOrderList3,
  getOrderStatus,
} = vendorMenu2Store;

const { vendorMenuIds, vendorOrderList, vendorOrderList3, vendorOrderList4 } =
  storeToRefs(vendorMenu2Store);

const statusClass = (orderStatus) => {
  switch (orderStatus) {
    case "pending":
      return "bg-yellow-500 "; // Background color for 'pending'
    case "completed":
      return "bg-green-500 "; // Background color for 'completed'
    case "cancelled":
      return "bg-red-500 "; // Background color for 'cancelled'
    default:
      return "bg-gray-300 "; // Default background color
  }
};
</script>
<template>
  <NavbarVendor vendorPage="past-order" />
  <section
    id="ongoing-order"
    class="flex flex-col h-screen max-h-screen m-10 overflow-hidden bg-red-400 border-2 border-gray-800 shadow-lg rounded-3xl"
  >
    <div
      class="flex items-center justify-start w-full h-24 px-6 py-5 bg-gray-200"
    >
      <h1 class="flex items-center w-full text-xl font-semibold">
        Current Orders
      </h1>
    </div>
    <div class="flex justify-center flex-1 py-10 bg-orange-300">
      <!-- table components start-->
      <div
        class="shadow-lg rounded-lg overflow-auto max-h-[550px] mx-4 md:mx-10 bg-white w-2/3"
      >
        <table class="w-full overflow-auto table-fixed">
          <thead class="sticky top-0">
            <tr class="bg-gray-100">
              <th
                class="w-1/4 px-6 py-4 font-bold text-center text-gray-600 uppercase"
              >
                Order Id
              </th>
              <th
                class="w-2/4 px-6 py-4 font-bold text-center text-gray-600 uppercase"
              >
                Items
              </th>
              <th
                class="w-1/4 px-6 py-4 font-bold text-center text-gray-600 uppercase"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr v-for="item in vendorOrderList4" :key="item.orderId">
              <td
                v-if="item.orderStatus !== 'pending'"
                class="px-6 py-4 text-center border-b border-gray-200"
              >
                {{ item.orderId }}
              </td>
              <td
                v-if="item.orderStatus !== 'pending'"
                class="px-6 py-4 text-center truncate border-b border-gray-200"
              >
                <div v-for="foodItem in item.orders">
                  {{ foodItem.foodName }}
                </div>
              </td>
              <td
                v-if="item.orderStatus !== 'pending'"
                class="px-6 py-4 text-center border-b border-gray-200"
              >
                <span
                  :class="[
                    'px-2 py-1 text-xs text-white rounded-full cursor-pointer',
                    statusClass(item.orderStatus),
                  ]"
                  >{{ item.orderStatus }}</span
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

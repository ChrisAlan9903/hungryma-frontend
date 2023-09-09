<script setup>
import { ref, onMounted } from "vue";
import NavbarVendor from "../../components/NavbarVendor.vue";
import { useCurrentUserStore } from "../../store/currentUser";
import { useVendorMenusStore } from "../../store/vendorMenus";
import { storeToRefs } from "pinia";

// Set Up: pinia store for currentUser
const currentUserStore = useCurrentUserStore();
const { token, currentUser, setToken, getCurrentUser } = currentUserStore;

// Set Up: pinia store for vendorMenu
const vendorMenuStore = useVendorMenusStore();
const {
  vendorMenuList,
  // vendorOrderItems,
  setVendorMenuIds,
  getVendorOrderItems,
  getOrderFoodName,
} = vendorMenuStore;

const { vendorOrderItems } = storeToRefs(vendorMenuStore);

const { vendorMenuIds } = storeToRefs(vendorMenuStore);

// Set Up: get all vendor Food Ids
const foodIds = ref([]);
for (const food of vendorMenuList) {
  foodIds.value.push(food.id);
}
console.log(`Extracted foodIds:`, foodIds.value);
setVendorMenuIds(foodIds.value);

// // get all orderItem from the vendorMenuIds
// getVendorOrderItems(token, vendorMenuIds.value);

// set up the final food Order object

async function foodOrderFinalSetup() {
  const finalFoodOrderArr = [];
  for (const foodItem of vendorOrderItems) {
    const foodName = await getOrderFoodName(token, foodItem.foodItemId);
    const foodObject = {
      ...foodItem,
      foodName: foodName.name,
    };
    finalFoodOrderArr.push(foodObject);
  }

  return finalFoodOrderArr;
}

// Set Up: get Token from localStorage
const accessToken = localStorage.getItem("accessToken");

// Set Up: Creating function to get userInfo based on the token
async function getUserInfo() {
  // get current vendor Information to store in Pinia
  const accessToken = localStorage.getItem("access_token");
  console.log(`accessToken from localStorage:`, accessToken);
  console.log(`CP: does it pass here?`);
  setToken(accessToken);
  console.log(`CP: does it pass here too?`);
  console.log(`token from pinia:`, token);
  await getCurrentUser();
  console.log(`currentUser from pinia: `, currentUser);
}

// Set Up: Run get User info when page is Mounted
onMounted(async () => {
  await getUserInfo();
  console.log(`getUserInfo has completed. Check pinia store for changes`);

  // get all orderItem from the vendorMenuIds
  getVendorOrderItems(token, vendorMenuIds.value);

  // setting up all FoodOrder object
  const orderData = await foodOrderFinalSetup();
  console.log(`ORDER DATA:`, orderData);
});
</script>
<template>
  <div class="pb-20">
    <NavbarVendor vendorPage="current-order" />
    <!-- test pinia section -->
    <!-- <section class="w-full h-56 bg-slate-300">
      <div class="flex flex-col p-20">
        <h2 class="flex-wrap">
          token: <span>{{ token }}</span>
        </h2>
        <p>currentUser:{{ currentUser }}</p>
      </div>
    </section> -->

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
      <div class="flex-1 py-10 bg-orange-300">
        <!-- table components start-->
        <div
          class="shadow-lg rounded-lg overflow-auto max-h-[550px] mx-4 md:mx-10 bg-white"
        >
          <table class="w-full overflow-auto table-fixed">
            <thead class="sticky top-0">
              <tr class="bg-gray-100">
                <th
                  class="w-1/4 px-6 py-4 font-bold text-left text-gray-600 uppercase"
                >
                  Order Id
                </th>
                <th
                  class="w-1/4 px-6 py-4 font-bold text-left text-gray-600 uppercase"
                >
                  Items
                </th>
                <th
                  class="w-1/4 px-6 py-4 font-bold text-left text-gray-600 uppercase"
                >
                  Status
                </th>
                <th
                  class="w-1/4 px-6 py-4 font-bold text-left text-gray-600 uppercase"
                >
                  Phone
                </th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <!-------------- Example to loop for : START  ----------------------------->
              <tr>
                <td class="px-6 py-4 border-b border-gray-200">John Doe</td>
                <td class="px-6 py-4 truncate border-b border-gray-200">
                  <div>Chicken Burger</div>
                  <div>Hawaiian Pizza</div>
                  <div>Lamb Steak</div>
                </td>
                <td class="px-6 py-4 border-b border-gray-200">
                  <span
                    class="px-2 py-1 text-xs text-white bg-yellow-500 rounded-full"
                    >Pending</span
                  >
                </td>
                <td class="px-6 py-4 border-b border-gray-200">555-555-5555</td>
              </tr>
              <!-------------- Example to loop for : END  ----------------------------->
              <tr>
                <td class="px-6 py-4 border-b border-gray-200">Jane Doe</td>
                <td class="px-6 py-4 truncate border-b border-gray-200">
                  janedoe@gmail.com
                </td>
                <td class="px-6 py-4 border-b border-gray-200">555-555-5555</td>
                <td class="px-6 py-4 border-b border-gray-200">
                  <span
                    class="px-2 py-1 text-xs text-white bg-red-500 rounded-full"
                    >Inactive</span
                  >
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 border-b border-gray-200">Jane Doe</td>
                <td class="px-6 py-4 truncate border-b border-gray-200">
                  janedoe@gmail.com
                </td>
                <td class="px-6 py-4 border-b border-gray-200">555-555-5555</td>
                <td class="px-6 py-4 border-b border-gray-200">
                  <span
                    class="px-2 py-1 text-xs text-white bg-red-500 rounded-full"
                    >Inactive</span
                  >
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 border-b border-gray-200">Jane Doe</td>
                <td class="px-6 py-4 truncate border-b border-gray-200">
                  janedoe@gmail.com
                </td>
                <td class="px-6 py-4 border-b border-gray-200">555-555-5555</td>
                <td class="px-6 py-4 border-b border-gray-200">
                  <span
                    class="px-2 py-1 text-xs text-white bg-red-500 rounded-full"
                    >Inactive</span
                  >
                </td>
              </tr>

              <!-- Add more rows here -->
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

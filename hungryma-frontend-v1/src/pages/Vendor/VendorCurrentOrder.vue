<script setup>
import { ref, onMounted } from "vue";
import NavbarVendor from "../../components/NavbarVendor.vue";
import { useCurrentUserStore } from "../../store/currentUser";

// Set Up: pinia store for currentUser
const currentUserStore = useCurrentUserStore();
const { token, currentUser, setToken, getCurrentUser } = currentUserStore;

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
});
</script>
<template>
  <div class="pb-20">
    <NavbarVendor vendorPage="current-order" />
    <!-- test pinia section -->
    <section class="w-full h-56 bg-slate-300">
      <div class="p-20 flex flex-col">
        <h2 class="flex-wrap">
          token: <span>{{ token }}</span>
        </h2>
        <p>currentUser:{{ currentUser }}</p>
      </div>
    </section>

    <section
      id="ongoing-order"
      class="bg-red-400 max-h-screen h-screen flex flex-col m-10 shadow-lg rounded-3xl overflow-hidden border-2 border-gray-800"
    >
      <div
        class="w-full h-24 flex justify-start items-center py-5 px-6 bg-gray-200"
      >
        <h1 class="w-full text-xl font-semibold flex items-center">
          Current Orders
        </h1>
      </div>
      <div class="flex-1 bg-orange-300 py-10">
        <!-- table components start-->
        <div
          class="shadow-lg rounded-lg overflow-auto max-h-[550px] mx-4 md:mx-10 bg-white"
        >
          <table class="w-full table-fixed overflow-auto">
            <thead class="sticky top-0">
              <tr class="bg-gray-100">
                <th
                  class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase"
                >
                  Order Id
                </th>
                <th
                  class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase"
                >
                  Items
                </th>
                <th
                  class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase"
                >
                  Status
                </th>
                <th
                  class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase"
                >
                  Phone
                </th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <!-------------- Example to loop for : START  ----------------------------->
              <tr>
                <td class="py-4 px-6 border-b border-gray-200">John Doe</td>
                <td class="py-4 px-6 border-b border-gray-200 truncate">
                  <div>Chicken Burger</div>
                  <div>Hawaiian Pizza</div>
                  <div>Lamb Steak</div>
                </td>
                <td class="py-4 px-6 border-b border-gray-200">
                  <span
                    class="bg-yellow-500 text-white py-1 px-2 rounded-full text-xs"
                    >Pending</span
                  >
                </td>
                <td class="py-4 px-6 border-b border-gray-200">555-555-5555</td>
              </tr>
              <!-------------- Example to loop for : END  ----------------------------->
              <tr>
                <td class="py-4 px-6 border-b border-gray-200">Jane Doe</td>
                <td class="py-4 px-6 border-b border-gray-200 truncate">
                  janedoe@gmail.com
                </td>
                <td class="py-4 px-6 border-b border-gray-200">555-555-5555</td>
                <td class="py-4 px-6 border-b border-gray-200">
                  <span
                    class="bg-red-500 text-white py-1 px-2 rounded-full text-xs"
                    >Inactive</span
                  >
                </td>
              </tr>
              <tr>
                <td class="py-4 px-6 border-b border-gray-200">Jane Doe</td>
                <td class="py-4 px-6 border-b border-gray-200 truncate">
                  janedoe@gmail.com
                </td>
                <td class="py-4 px-6 border-b border-gray-200">555-555-5555</td>
                <td class="py-4 px-6 border-b border-gray-200">
                  <span
                    class="bg-red-500 text-white py-1 px-2 rounded-full text-xs"
                    >Inactive</span
                  >
                </td>
              </tr>
              <tr>
                <td class="py-4 px-6 border-b border-gray-200">Jane Doe</td>
                <td class="py-4 px-6 border-b border-gray-200 truncate">
                  janedoe@gmail.com
                </td>
                <td class="py-4 px-6 border-b border-gray-200">555-555-5555</td>
                <td class="py-4 px-6 border-b border-gray-200">
                  <span
                    class="bg-red-500 text-white py-1 px-2 rounded-full text-xs"
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

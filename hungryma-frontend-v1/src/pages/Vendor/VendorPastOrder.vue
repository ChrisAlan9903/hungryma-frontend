<script setup>
import NavbarVendor from "../../components/NavbarVendor.vue";
</script>
<template>
  <NavbarVendor vendorPage="past-order" />
  <section
    id="ongoing-order"
    class="bg-red-400 max-h-screen h-screen flex flex-col m-10 shadow-lg rounded-3xl overflow-hidden border-2 border-gray-800"
  >
    <div
      class="w-full h-24 flex justify-start items-center py-5 px-6 bg-gray-200"
    >
      <h1 class="w-full text-xl font-semibold flex items-center">
        Past Orders
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
                  class="bg-green-500 text-white py-1 px-2 rounded-full text-xs"
                  >Completed</span
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

            <!-- Add more rows here -->
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

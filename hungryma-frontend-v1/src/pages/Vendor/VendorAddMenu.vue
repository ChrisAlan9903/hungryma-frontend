<script setup>
import { ref } from "vue";
import { useRouter, RouterLink } from "vue-router";
import { useCurrentUserStore } from "../../store/currentUser";
import NavbarVendor from "../../components/NavbarVendor.vue";

const router = useRouter();
const currentUserStore = useCurrentUserStore();
const { token, currentUser } = currentUserStore;

// Set Up: Capture all input value into variable
const foodName = ref("");
const foodDescription = ref("");
const foodPrice = ref("");
const foodImage = ref("");
const foodCategory = ref("");
const foodVendor = ref(currentUser.id);

// Set Up: handling the food Category from string to Id
const categoriesArr = [
  "Western",
  "Asian",
  "Fast Foods",
  "Beverages",
  "Desserts",
  "Local Delicacies",
];
// getting the category id
function getCategory() {
  const compareItem = foodCategory.value;
  console.log(compareItem);

  // Find the index of the element that matches compareItem
  const index = categoriesArr.indexOf(compareItem);
  const categoryId = index + 1;
  return categoryId;
}

// Set up: function for create new Menu request API to backend
async function createFoodItem(name, desc, price, image, category) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({
      name: name,
      description: desc,
      price: price,
      vendorId: foodVendor.value,
      imageLink: image,
      categoriesId: category,
    }),
  };

  try {
    const response = await fetch("http://localhost:3000/foodItems/", options);
    const data = await response.json();
    console.log(`data:`, data);
    return data;
  } catch (err) {
    console.error(err);
    return err;
  }
}

// Role: Main function to handle add menu action
async function handleAddMenu(e) {
  e.preventDefault();

  const categoryId = getCategory();

  const name = foodName.value;
  const desc = foodDescription.value;
  const price = foodPrice.value;
  const image = foodImage.value;
  const category = categoryId;

  const addMenuStatus = await createFoodItem(
    name,
    desc,
    price,
    image,
    category
  );
  console.log(`addMenuStatus:`, addMenuStatus);

  if (addMenuStatus.success) {
    alert(`Menu added successfully !`);
    router.push("/vendor/menus");
  } else if (addMenuStatus.error) {
    alert(`Add menu failed! Error:`, addMenuStatus.error);
  } else return;
}
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
        :to="{ name: 'vendor-menus' }"
        :class="[
          'border-2 border-orange-500 rounded-xl px-3 py-3 transition-all delay-75 flex justify-center items-center text-orange-500 font-semibold',
          'hover:bg-orange-400 hover:text-white',
        ]"
      >
        <p class="">Back to All Menus ></p>
      </RouterLink>
    </div>
    <!-- Page content  -->
    <div class="flex-1 bg-orange-300 py-10 px-10 gap-5 max-w-full">
      <form
        @submit="handleAddMenu"
        class="flex justify-center items-center max-w-full"
      >
        <div
          class="py-12 px-12 bg-white bg-opacity-90 rounded-2xl shadow-xl z-20 max-w-3xl w-full"
        >
          <div>
            <p
              class="w-96 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer"
            >
              Fill in the information of the food below
            </p>
          </div>
          <div class="space-y-4">
            <!-- row 1 input -->
            <div id="row-1" class="flex gap-5">
              <div id="new-menu-name" class="w-2/3">
                <!-- food name -->
                <label for="" class="text-sm text-gray-500">Food Name</label>
                <div
                  class="flex gap-1 items-center text-sm py-3 px-4 rounded-lg w-full border outline-none focus-within:ring-orange-300 focus-within:ring-2"
                >
                  <input
                    v-model="foodName"
                    type="text"
                    placeholder="Food name"
                    class="outline-none w-full bg-transparent mr-auto"
                    required
                  />
                </div>
              </div>
              <div id="new-menu-price">
                <!-- price -->
                <label for="" class="text-sm text-gray-500">Price (RM)</label>
                <div
                  class="flex gap-1 items-center text-sm py-3 px-4 rounded-lg w-full border outline-none focus-within:ring-orange-300 focus-within:ring-2"
                >
                  <input
                    v-model="foodPrice"
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="price"
                    class="outline-none w-full bg-transparent mr-auto"
                    required
                  />
                </div>
              </div>
            </div>

            <div id="new-menu-desc">
              <!-- description -->
              <label for="" class="text-sm text-gray-500">Description</label>
              <div
                class="flex gap-1 items-center text-sm py-3 px-4 rounded-lg w-full border outline-none focus-within:ring-orange-300 focus-within:ring-2"
              >
                <textarea
                  v-model="foodDescription"
                  name="food-description"
                  cols="30"
                  rows="5"
                  class="outline-none w-full bg-transparent mr-auto"
                  placeholder="Description"
                ></textarea>
              </div>
            </div>

            <div id="row-3" class="flex gap-5">
              <div id="new-menu-img" class="w-2/3">
                <!-- image_link -->
                <label for="" class="text-sm text-gray-500"
                  >Food Image url</label
                >
                <div
                  class="flex gap-1 items-center text-sm py-3 px-4 rounded-lg w-full border outline-non focus-within:ring-orange-300 focus-within:ring-2"
                >
                  <input
                    v-model="foodImage"
                    type="text"
                    placeholder="Image url"
                    class="outline-none bg-transparent w-full mr-auto"
                  />
                </div>
              </div>
              <div id="new-menu-category">
                <!-- categories -->
                <label for="categoryInput" class="text-sm text-gray-500"
                  >Food Category</label
                >
                <div
                  class="flex gap-1 items-center text-sm py-3 px-4 rounded-lg w-full border outline-none focus-within:ring-orange-300 focus-within:ring-2"
                >
                  <input
                    v-model="foodCategory"
                    list="food-category"
                    id="categoryInput"
                    name="categoryInput"
                    placeholder="Select category"
                    class="outline-none bg-transparent w-full mr-auto"
                  />
                  <datalist id="food-category">
                    <option value="Western">Western</option>
                    <option value="Asian">Asian</option>
                    <option value="Fast Foods">Fast Foods</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Desserts">Desserts</option>
                    <option value="Local Delicacies">Local Delicacies</option>
                  </datalist>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center mt-6 transition-all delay-300">
            <button
              type="submit"
              class="py-3 w-full text-xl text-white bg-orange-400 rounded-2xl transition-all delay-75 hover:bg-orange-600"
            >
              Add Food Item
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

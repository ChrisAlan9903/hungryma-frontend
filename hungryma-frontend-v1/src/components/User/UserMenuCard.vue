<script setup>
import { ref } from "vue";
import { useUserCartStore } from "../../store/userCart";
import { storeToRefs } from "pinia";

// Set Up: Receive Props from parent for food data
const { foodItem } = defineProps(["foodItem"]);
console.log(`foodItem in each all menu:`, foodItem);

// Set Up: set up pinia store that is used
const userCartStore = useUserCartStore();
const { cartItems, addItemToCart } = userCartStore;
// const { cartItems, addItemToCart } = storeToRefs(userCartStore);

const imageFood = ref("");

const categoriesArr = [
  "Western",
  "Asian",
  "Fast Foods",
  "Beverages",
  "Desserts",
  "Local Delicacies",
];

const foodCategory = categoriesArr[foodItem.categoriesId - 1];

// Set Up: Function to handle add to cart button
const handleAddToCart = () => {
  // code here
  addItemToCart(foodItem);
};
</script>
<template>
  <div class="card">
    <!-- menu image -->
    <div
      id="menu-image"
      class="w-full overflow-hidden rounded-lg shadow-lg h-1/2"
    >
      <img
        :src="
          imageFood !== ''
            ? imageFood
            : 'https://previews.123rf.com/images/danilsneg/danilsneg1706/danilsneg170600158/81077084-pepperoni-pizza-italian-pizza-on-white-background.jpg'
        "
        :alt="imageFood"
        class="object-cover w-full h-full"
      />
    </div>
    <div id="menu-info" class="flex items-center justify-between mt-5">
      <h3 class="text-lg font-semibold">{{ foodItem.name }}</h3>
      <p class="text-xs font-medium">RM {{ foodItem.price.toFixed(2) }}</p>
    </div>
    <div
      id="card-bottom"
      class="flex items-center justify-between gap-1 px-3 mt-6"
    >
      <p class="category-badge">{{ foodCategory || "western " }}</p>

      <button
        @click="handleAddToCart"
        class="flex items-center h-8 gap-2 px-2 py-1 text-xs text-white bg-orange-500 rounded-lg cursor-pointer hover:bg-orange-600"
      >
        Add to Cart <i class="material-icons-sharp"> shopping_cart </i>
      </button>
    </div>
  </div>
</template>

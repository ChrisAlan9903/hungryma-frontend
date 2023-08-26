<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// Set Up: defining the prop passed from parent
const { foodItem } = defineProps({
  foodItem: Object,
});

// Set Up: setting the food categories
const categoriesArr = [
  "Western",
  "Asian",
  "Fast Foods",
  "Beverages",
  "Desserts",
  "Local Delicacies",
];

const foodCategory = categoriesArr[foodItem.categoriesId - 1];

console.log(`foodItem:`, foodItem);
const imageFood = ref("");
</script>

<template>
  <div class="card">
    <!-- menu image -->
    <div
      id="menu-image"
      class="h-1/2 w-full shadow-lg rounded-lg overflow-hidden"
    >
      <img
        :src="
          imageFood !== ''
            ? imageFood
            : 'https://previews.123rf.com/images/danilsneg/danilsneg1706/danilsneg170600158/81077084-pepperoni-pizza-italian-pizza-on-white-background.jpg'
        "
        :alt="imageFood"
        class="h-full w-full object-cover"
      />
    </div>
    <div id="menu-info" class="flex justify-between mt-5 items-center">
      <h3 class="font-semibold text-lg">{{ foodItem.name }}</h3>
      <p class="font-medium text-xs">RM {{ foodItem.price }}</p>
    </div>
    <div
      id="card-bottom"
      class="flex gap-1 justify-between px-3 mt-6 items-center"
    >
      <p class="category-badge">{{ foodCategory || "western " }}</p>

      <button
        @click="handleDeleteFood"
        class="bg-orange-500 flex gap-2 items-center text-white text-xs h-8 px-2 py-1 rounded-lg cursor-pointer hover:bg-orange-600"
      >
        Delete Item <i class="material-icons-sharp"> delete </i>
      </button>
    </div>
  </div>
</template>

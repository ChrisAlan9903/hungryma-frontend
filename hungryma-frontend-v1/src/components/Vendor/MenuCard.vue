<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const emit = defineEmits(["delete"]);

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

// Set Up: function to emit delete function when delete button is pressed

const deleteItem = () => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this Menu item?"
  );

  if (confirmDelete) {
    console.log("delete action CONFIRMED");
    emit("delete", foodItem.id);
  } else return;
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
      <p class="text-xs font-medium">RM {{ foodItem.price }}</p>
    </div>
    <div
      id="card-bottom"
      class="flex items-center justify-between gap-1 px-3 mt-6"
    >
      <p class="category-badge">{{ foodCategory || "western " }}</p>

      <button
        @click="deleteItem"
        class="flex items-center h-8 gap-2 px-2 py-1 text-xs text-white bg-orange-500 rounded-lg cursor-pointer hover:bg-orange-600"
      >
        Delete Item <i class="material-icons-sharp"> delete </i>
      </button>
    </div>
  </div>
</template>

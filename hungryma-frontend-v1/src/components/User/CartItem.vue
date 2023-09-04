<script setup>
import { ref, computed } from "vue";

const { cartItem } = defineProps(["cartItem"]);
console.log(`cartItem:`, cartItem);

// Set Up: handling item quantity
const quantity = ref(1);

const totalPrice = computed(() => {
  // This function will be re-evaluated whenever originalValue changes

  return quantity.value * cartItem.price;
});

console.log(`price:`, cartItem.price);
function increaseQuantity() {
  quantity.value++;
  console.log(`add quantity`);
}
function decreaseQuantity() {
  if (quantity.value > 1) {
    quantity.value--;
    console.log(`reduce quantity`);
  }
}
</script>
<template>
  <div
    id="item-1"
    class="flex justify-between w-full mb-6 border-2 h-28 border-slate-400"
  >
    <div class="flex justify-between w-2/5 h-full">
      <img src="../../assets/chef-1.jpg" alt="" class="object-cover w-1/2" />
      <div class="flex items-center w-1/2 h-full pl-3 overflow-hidden">
        <h3 class="cursor-pointer line-clamp-2" :title="cartItem.name">
          {{ cartItem.name }}
        </h3>
      </div>
    </div>
    <div class="flex items-center justify-center w-1/5 gap-5">
      <button @click="decreaseQuantity" class="font-semibold">-</button>
      <p
        class="flex items-center justify-center w-12 h-12 px-4 py-2 border border-slate-400"
      >
        {{ quantity }}
      </p>
      <button @click="increaseQuantity" class="font-semibold">+</button>
    </div>
    <div class="flex items-center justify-center w-1/5">
      <p>RM {{ cartItem.price.toFixed(2) }}</p>
    </div>
    <div class="flex items-center justify-center w-1/5">
      <p>RM {{ totalPrice.toFixed(2) }}</p>
    </div>
  </div>
</template>

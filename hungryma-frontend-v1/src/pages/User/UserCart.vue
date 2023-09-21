<script setup>
import { ref, computed, watchEffect } from "vue";
import { useCurrentUserStore } from "../../store/currentUser.js";
import { useUserCartStore } from "../../store/userCart";
import { useRouter } from "vue-router";
import NavbarUser from "../../components/NavbarUser.vue";
import CartItem from "../../components/User/CartItem.vue";
import { storeToRefs } from "pinia";
import Footer from "../../components/Footer.vue";

// TO EDIT: temporary variable to set how many times to render child components

// Set Up: Basic set up
const router = useRouter();

//Set Up: pinia store to get current user Id
const currentUserStore = useCurrentUserStore();
const { token, currentUser } = currentUserStore;

// SET UP: pinia store for added cartItems
const userCartStore = useUserCartStore();
const { cartItems, clearCart, createOrder, createOrderItem } = userCartStore;

// Set Up: set up pinia to sync with the page state for realtime update
const { sumQuantity, sumTotalPrice } = storeToRefs(userCartStore);

// Set Up: variables to hold state
const salesDiscount = ref(0);

const salesTax = computed(() => {
  const tax = sumTotalPrice.value * 0.1;
  console.log(`sumTotalPrice:`, sumTotalPrice.value);
  console.log(`tax:`, tax);
  return tax;
});

const salesNetTotal = computed(() => {
  return sumTotalPrice.value + salesTax.value - salesDiscount.value;
});

// Set Up: handle submit order (POST req to backend)
const handleSubmitOrder = async () => {
  // TODO: post request here. might need to make several POST req for Order.js and OrderItem.js
  const userId = currentUser.id;
  const orderAmount = parseFloat(salesNetTotal.value.toFixed(2));
  console.log(`userId:`, userId);
  console.log(`orderAmount:`, orderAmount);

  const createdOrder = await createOrder(token, userId, orderAmount);
  console.log(`createdOrder:`, createdOrder);

  if (createdOrder.error) {
    alert(`Error in submiting Order !`);
  } else {
    alert(`Order placed !`);

    console.log(`createdOrder.id:`, createdOrder.id);

    for (const item of cartItems) {
      try {
        const createdOrderItem = await createOrderItem(
          token,
          item,
          createdOrder.id
        );
        console.log(`createdOrderItem:`, createdOrderItem);
      } catch (error) {
        console.error(error);
      }
    }

    // redirect to successfull submit order page
    clearCart();
    router.push({ name: "user-checkout" });
  }
};
</script>

<template>
  <NavbarUser userPage="user-cart" />
  <!-- Cart Item Sections -->
  <section class="flex w-full h-screen max-h-screen">
    <!-- Added item list  -->
    <div class="w-2/3 px-20 pt-5 pb-20">
      <!-- inner container -->
      <div class="flex flex-col w-full h-full">
        <!-- title for each part -->
        <div
          class="flex items-center justify-between pt-6 pb-3 border-b-2 border-slate-400"
        >
          <h1 class="text-4xl font-bold">Shopping Cart</h1>
          <!-- <h3 class="text-xl font-bold">{{ cartItems.length }} Items</h3> -->
          <h3 class="text-xl font-bold">{{ sumQuantity }} Items</h3>
        </div>
        <!-- item list container -->
        <div class="flex-1 w-full">
          <!-- column description -->
          <div class="flex justify-between w-full mt-6 mb-3">
            <p class="w-2/5 text-left text-gray-400">Product Details</p>
            <p class="w-1/5 text-center text-gray-400">Quantity</p>
            <p class="w-1/5 text-center text-gray-400">Price</p>
            <p class="w-1/5 text-center text-gray-400">Total</p>
          </div>

          <!-- item list wrapper -->
          <div
            class="w-full h-full overflow-auto xl:max-h-[420px] 2xl:max-h-[420px] mt-6"
          >
            <div
              v-if="cartItems.length === 0"
              class="w-full p-20 text-3xl text-center text-gray-400"
            >
              No item in carts
            </div>
            <!-- item list -->
            <CartItem
              v-else
              v-for="order in cartItems"
              :key="order"
              :cartItem="order"
              @currentQuantity="handleQuantity"
              @currentTotalPrice="handleTotalPrice"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Total amount  -->
    <div class="w-1/3 px-10 pt-5 pb-20 bg-orange-50">
      <!-- inner container -->
      <div class="w-full h-full">
        <!-- title for each part -->
        <div
          class="flex items-center justify-between pt-6 pb-3 border-b-2 border-slate-400"
        >
          <h2 class="text-3xl font-bold">Order Summary</h2>
        </div>
        <!-- total amount wrapper -->
        <div class="w-full">
          <!-- total item section -->
          <div class="px-8 py-5 h-1/2">
            <div id="subtotal-item-1" class="flex items-center justify-between">
              <h5 class="text-base font-bold">Total Items</h5>
              <!-- <h5 class="font-medium">{{ cartItems.length }}</h5> -->
              <!-- <h5 class="font-medium">{{ quantitySum }}</h5> -->
              <h5 class="font-medium">{{ sumQuantity }}</h5>
            </div>
          </div>
          <!-- subtotal section -->
          <div
            id="subtotal"
            class="px-8 pt-5 border-b-2 border-gray-200 border-dashed h-1/2"
          >
            <div
              id="subtotal-item-1"
              class="flex items-center justify-between mb-10"
            >
              <h5 class="text-gray-500">Subtotal</h5>
              <!-- <h5 class="font-medium">RM {{ totalPriceSum }}</h5> -->
              <h5 class="font-medium">RM {{ sumTotalPrice.toFixed(2) }}</h5>
            </div>
            <div
              id="subtotal-item-2"
              class="flex items-center justify-between mb-10"
            >
              <h5 class="text-gray-500">Sales Discounts</h5>
              <h5 class="font-medium">- RM {{ salesDiscount.toFixed(2) }}</h5>
            </div>
            <div
              id="subtotal-item-3"
              class="flex items-center justify-between mb-10"
            >
              <h5 class="text-gray-500">Total Sales tax (10%)</h5>
              <h5 class="font-medium">RM {{ salesTax.toFixed(2) }}</h5>
            </div>
          </div>
          <!-- Total section -->
          <div id="total" class="flex flex-col items-center h-1/2">
            <div
              id="total-item"
              class="flex justify-between w-full px-8 pt-3 my-3"
            >
              <h4 class="text-xl font-semibold">Total</h4>
              <h4 class="text-xl font-semibold">
                RM {{ salesNetTotal.toFixed(2) }}
              </h4>
            </div>
            <div id="checkout" class="w-full px-8 pt-3">
              <button
                @click="handleSubmitOrder"
                id="checkout-btn"
                class="w-full h-12 text-white transition-all delay-75 bg-orange-500 rounded-lg hover:bg-orange-600"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

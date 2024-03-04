<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useCurrentUserStore } from "../../store/currentUser";
import { useVendorMenusStore } from "../../store/vendorMenus";
import { useVendorMenus2Store } from "../../store/vendorMenus2";
import { storeToRefs } from "pinia";

const currentUserStore = useCurrentUserStore();
const { token, currentUser, setToken, getCurrentUser } = currentUserStore;

// Set Up: Set Up vendorMenu to set all vendor menu to pinia
const vendorMenusStore = useVendorMenusStore();
const { vendorMenuList, setVendorMenuList, getMenus } = vendorMenusStore;

const router = useRouter();
const visibility = ref(false);

const email = ref("");
const password = ref("");

// Set Up: Setting Up Vendor All Orders
// Part 1: Setting up pinia store
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

// Set Up: get all vendor Food Ids
async function getVendorFoodIds(token) {
  const allVendorFood = await getVendorMenus(token);
  console.log(`allVendorFood:`, allVendorFood);

  const menuIds = [];
  for (const food of allVendorFood) {
    menuIds.push(food.id);
  }
  // console.log(`menuIds:`, menuIds);
  setVendorMenuIds(menuIds);
}

// get all orderItem from the vendorMenuIds
async function getVendorOrders(token) {
  const allVendorOrderItems = await getVendorOrderItems(
    token,
    vendorMenuIds.value
  );
  // console.log(allVendorOrderItems);
  setVendorOrderList(allVendorOrderItems);
}

// get all orderItem + foodname
async function getVendorOrderName(token) {
  await getOrderName(token);
}

// set up the final food Order object by grouping

// Set Up: get Token from localStorage
const accessToken = localStorage.getItem("accessToken");

// Set Up: Creating function to get userInfo based on the token
async function getUserInfo() {
  // get current vendor Information to store in Pinia
  const accessToken = localStorage.getItem("access_token");
  // console.log(`accessToken from localStorage:`, accessToken);
  // console.log(`CP: does it pass here?`);
  setToken(accessToken);
  // console.log(`CP: does it pass here too?`);
  // console.log(`token from pinia:`, token);
  await getCurrentUser();
  // console.log(`currentUser from pinia: `, currentUser);
}

const handleLogin = async (e) => {
  e.preventDefault();
  const loginResponse = await loginVendor();

  console.log(`loginResponse:`, loginResponse);

  const loginSuccess = loginResponse.message;
  const loginFail = loginResponse.error;
  const accessToken = loginResponse.accessToken;

  if (!accessToken) {
    alert(loginFail);
  } else if (loginResponse.role === "customer") {
    alert(
      "You logging in as a customer. You will be directed to vendor login page."
    );
    router.push({ name: "login-user" });
  } else {
    alert(loginSuccess);
    localStorage.setItem("accessToken", accessToken);

    // setting currentUser in Pinia
    setToken(accessToken);
    await getCurrentUser();
    const vendorAllMenu = await getMenus(accessToken);
    // console.log(`getMenus output:`, vendorAllMenu);
    setVendorMenuList(vendorAllMenu);

    await getUserInfo();
    // console.log(`getUserInfo has completed. Check pinia store for changes`);

    // get all orderItem from the vendorMenuIds
    await getVendorFoodIds(accessToken);
    await getVendorOrders(accessToken);
    await getVendorOrderName(accessToken);
    setVendorOrderList3();
    await getOrderStatus(accessToken);
    console.log(`Im being runPAGE`);

    router.push({ name: "vendor-current-order" });
  }
};

async function loginVendor() {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  };

  try {
    const response = await fetch("http://localhost:3000/auth/login", options);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    return err;
  }
}
</script>
<template>
  <!-- component -->
  <form @submit="handleLogin" class="flex items-center justify-center">
    <div class="z-20 px-12 py-12 bg-white shadow-xl bg-opacity-80 rounded-2xl">
      <div>
        <h1 class="mb-4 text-3xl font-bold text-center cursor-pointer">
          Log In
        </h1>
        <p
          class="mb-8 text-sm font-semibold tracking-wide text-center text-gray-700 cursor-pointer w-80"
        >
          Log in and manage your sales seamlessly!
        </p>

        <!-- demo account info -->
        <p class="text-xs font-medium text-orange-800">
          Demo email: vendor-18@gmail.com
        </p>
        <p class="mb-5 text-xs font-medium text-orange-800">
          Demo password: 123456
        </p>
        <!-- end of demo account info -->
      </div>
      <div class="space-y-4">
        <div
          class="flex items-center w-full gap-1 px-4 py-3 text-sm border border-orange-600 rounded-lg outline-none"
        >
          <i class="mr-4 text-orange-700 material-icons"> email </i>
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            class="bg-transparent outline-none"
            required
          />
        </div>
        <div
          class="flex items-center w-full gap-1 px-4 py-3 text-sm border border-orange-600 rounded-lg outline-none"
        >
          <i class="mr-4 text-orange-700 material-icons"> lock </i>
          <input
            v-model="password"
            :type="visibility ? 'text' : 'password'"
            placeholder="Password"
            class="mr-auto bg-transparent outline-none"
            required
          />
          <div
            id="visibility"
            @click="visibility = !visibility"
            class="cursor-pointer"
          >
            <i
              v-if="visibility === false"
              class="text-orange-700 material-icons"
            >
              visibility_off
            </i>
            <i v-else class="text-orange-600 material-icons"> visibility </i>
          </div>
        </div>
      </div>
      <div class="mt-6 text-center transition-all delay-300">
        <button
          type="submit"
          class="w-64 py-3 text-xl text-white transition-all delay-75 bg-orange-700 rounded-2xl hover:bg-orange-400"
        >
          Log In
        </button>
        <p class="mt-4 text-sm">
          Don't Have An Account?
          <RouterLink
            :to="{ name: 'register-vendor' }"
            class="text-orange-700 duration-150 ease-linear hover:underline"
            >Sign Up here</RouterLink
          >
        </p>
      </div>
    </div>
  </form>
</template>

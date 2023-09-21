<script setup>
// import NavbarVendor from "../../components/NavbarVendor.vue";
import NavbarUser from "../../components/NavbarUser.vue";
import Footer from "../../components/Footer.vue";
import { RouterLink, useRouter } from "vue-router";
import { useCurrentUserStore } from "../../store/currentUser";
import { ref, onMounted, watch, onBeforeMount } from "vue";

const router = useRouter();

// Set Up: pinia store for currentUser
const currentUserStore = useCurrentUserStore();
const { token, currentUser, setToken, setCurrentUser, getCurrentUser } =
  currentUserStore;

// Set up: get token from localStorage
const accessToken = localStorage.getItem("accessToken");

// Set Up: variable(s) to hold user information after fetch req
const currentUserInfo = ref();
console.log(`currentUserInfo: `, currentUserInfo.value);

// Set Up: function to get user info from DB
async function getUserData(token) {
  console.log(`token for fetching:`, token);
  const options = {
    method: "GET",
    headers: {
      Authorization: token,
    },
  };

  try {
    const response = await fetch(
      "http://localhost:3000/users/user/current",
      options
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    return err;
  }
}

onBeforeMount(async () => {
  setToken(accessToken);
  console.log(`token in pinia after set:`, token);

  try {
    console.log(`CP 1`);
    // currentUserInfo.value = await getUserData(token);
    currentUserInfo.value = await getCurrentUser();
    console.log(`CP 2`);
    console.log(`currentUserInfo after fetching:`, currentUserInfo.value);
    setCurrentUser(currentUserInfo.value);
  } catch (error) {
    console.log({ error: error });
  }
});
</script>
<template>
  <NavbarUser userPage="user-profile" />
  <section
    id="ongoing-order"
    class="flex justify-center max-h-screen p-3 mt-24 mb-32"
  >
    <div
      v-if="currentUserInfo"
      class="w-1/2 overflow-hidden bg-white border-2 border-black rounded-lg shadow-xl"
    >
      <div class="flex justify-between px-4 py-5 sm:px-6">
        <div class="">
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            User Profile
          </h3>
          <p class="max-w-2xl mt-1 text-sm text-gray-500">
            This is your user information.
          </p>
        </div>
        <div>
          <RouterLink
            :to="{ name: 'user-update' }"
            :class="[
              'border border-orange-500 rounded-xl px-3 py-1   transition-all delay-75 flex justify-center items-center',
              'text-orange-500 text-xs',

              'hover:border-orange-500 hover:text-white hover:bg-orange-500',
            ]"
            >Update Profile</RouterLink
          >
        </div>
      </div>
      <div class="px-4 py-5 border-t border-gray-200 sm:p-0">
        <dl class="sm:divide-y sm:divide-gray-200">
          <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Username</dt>
            <dd class="mt-1 ml-10 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <!-- {{ "Chris" }} -->
              {{ currentUserInfo.username }}
              <!-- {{ currentUserData.username }} -->
            </dd>
          </div>
          <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Email address</dt>
            <dd class="mt-1 ml-10 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <!-- {{ "chris@gmail.com" }} -->
              {{ currentUserInfo.email }}

              <!-- {{ currentUserData.email }} -->
            </dd>
          </div>
          <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Phone number</dt>

            <dd class="mt-1 ml-10 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <!-- (123) 456-7890 -->
              {{ currentUserInfo.phoneNumber || "-" }}
            </dd>
          </div>
          <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Address</dt>
            <dd class="mt-1 ml-10 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <!-- {{ "-" }} -->
              {{ currentUserInfo.address }}

              <!-- {{ currentUserData.address || "-" }} -->
            </dd>
          </div>
        </dl>
      </div>
    </div>
    <div v-else>
      <p>Loading user Info..</p>
    </div>
  </section>
  <Footer class="" />
</template>

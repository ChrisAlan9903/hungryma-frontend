<script setup>
import NavbarUser from "../../components/NavbarUser.vue";
import { ref } from "vue";
import { useRouter, RouterLink } from "vue-router";
import { useCurrentUserStore } from "../../store/currentUser";

const router = useRouter();

const currentUserStore = useCurrentUserStore();
const { token, setToken, currentUser, setCurrentUser, getCurrentUser } =
  currentUserStore;

// Set Up: creating variables to hold input state
const nameInput = ref(currentUser.username);
const emailInput = ref(currentUser.email);
const phoneNumInput = ref(currentUser.phoneNumber);
const addressInput = ref(currentUser.address);

// Set Up: Update user request function
async function updateUser(id) {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({
      username: nameInput.value,
      email: emailInput.value,
      phoneNumber: phoneNumInput.value,
      address: addressInput.value,
    }),
  };

  try {
    console.log(`currentid: `, id);
    const response = await fetch(`http://localhost:3000/users/${id}`, options);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    return err;
  }
}

// Set Up: function to handle Update user
async function handleUpdateUser(e) {
  e.preventDefault();
  const updateStatus = await updateUser(currentUser.id);
  console.log(`updateStatus: `, updateStatus);

  if (updateStatus.error) {
    alert(`Error in updating:`, updateStatus.error);
  } else if (updateStatus.length > 0) {
    alert(`Update successful !`);
    console.log(`updateStatus messages: `, updateStatus);
    await getCurrentUser();
    router.push({ name: "user-profile" });
  }
}
</script>
<template>
  <NavbarUser userPage="user-profile" />
  <section class="w-full mt-10">
    <form
      @submit="handleUpdateUser"
      class="flex items-center justify-center max-w-full"
    >
      <div
        class="z-20 w-full max-w-3xl px-12 py-12 bg-white border-2 border-black shadow-xl bg-opacity-90 rounded-2xl"
      >
        <div class="flex justify-between">
          <p
            class="mb-8 text-sm font-semibold tracking-wide text-left text-gray-700 cursor-pointer w-96"
          >
            Fill in the information below to update your profile.
          </p>
          <div>
            <RouterLink
              :to="{ name: 'user-profile' }"
              :class="[
                'border border-orange-500 rounded-xl px-3 py-1   transition-all delay-75 flex justify-center items-center',
                'text-orange-500 text-xs',

                'hover:border-orange-500 hover:text-white hover:bg-orange-500',
              ]"
              >Back to profile ></RouterLink
            >
          </div>
        </div>
        <div class="space-y-4">
          <!-- username -->
          <div id="update-username" class="w-full">
            <label for="update-username" class="text-sm text-gray-500"
              >Username</label
            >
            <div
              class="flex items-center w-full gap-1 px-4 py-3 text-sm border rounded-lg outline-none focus-within:ring-orange-300 focus-within:ring-2"
            >
              <input
                v-model="nameInput"
                type="text"
                placeholder="Username"
                class="w-full mr-auto bg-transparent outline-none"
                required
              />
            </div>
          </div>
          <!-- email -->
          <div id="update-email">
            <label for="update-email" class="text-sm text-gray-500"
              >Email</label
            >
            <div
              class="flex items-center w-full gap-1 px-4 py-3 text-sm border rounded-lg outline-none focus-within:ring-orange-300 focus-within:ring-2"
            >
              <input
                v-model="emailInput"
                type="email"
                placeholder="user@gmail.com"
                class="w-full mr-auto bg-transparent outline-none"
                required
              />
            </div>
          </div>
          <!-- phone number -->
          <div id="update-phone-num">
            <label for="update-phone-num" class="text-sm text-gray-500"
              >Phone number</label
            >
            <div
              class="flex items-center w-full gap-1 px-4 py-3 text-sm border rounded-lg outline-none focus-within:ring-orange-300 focus-within:ring-2"
            >
              <input
                v-model="phoneNumInput"
                type="text"
                placeholder="012-3456789"
                class="w-full mr-auto bg-transparent outline-none"
                required
              />
            </div>
          </div>
          <!-- address -->
          <div id="update-address">
            <label for="update-address" class="text-sm text-gray-500"
              >Address</label
            >
            <div
              class="flex items-center w-full gap-1 px-4 py-3 text-sm border rounded-lg outline-none focus-within:ring-orange-300 focus-within:ring-2"
            >
              <input
                v-model="addressInput"
                type="text"
                placeholder="Street 1, Manhattan City, Malaysia"
                class="w-full mr-auto bg-transparent outline-none"
                required
              />
            </div>
          </div>
        </div>

        <div class="mt-6 text-center transition-all delay-300">
          <button
            type="submit"
            class="w-full py-3 text-xl text-white transition-all delay-75 bg-orange-400 rounded-2xl hover:bg-orange-600"
          >
            Update Details
          </button>
        </div>
      </div>
    </form>
  </section>
</template>

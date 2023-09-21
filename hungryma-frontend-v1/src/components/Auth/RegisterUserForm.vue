<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import { useRouter } from "vue-router";

const visibility = ref(false);
const router = useRouter();

const username = ref("");
const email = ref("");
const password = ref("");

const handleSubmit = async (e) => {
  e.preventDefault();
  const registerResponse = await registerVendor();
  console.log(`registerResponse:`, registerResponse);

  const registerSuccess = registerResponse.message;
  const registerFail = registerResponse.error;

  if (registerSuccess) {
    alert(registerSuccess);
    router.push("/");
  } else if (registerFail) {
    alert(registerFail);

    password.value = "";
  }
};

// function to post API
async function registerVendor() {
  console.log(
    `name:`,
    username.value,
    `email:`,
    email.value,
    `password:`,
    password.value
  );
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username.value,
      email: email.value,
      password: password.value,
      role: "customer",
    }),
  };

  try {
    const response = await fetch(
      "http://localhost:3000/auth/register",
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
</script>
<template>
  <!-- component -->
  <div class="flex items-center justify-center">
    <form
      @submit="handleSubmit"
      class="z-20 px-12 py-12 bg-white shadow-xl bg-opacity-90 rounded-2xl"
    >
      <div>
        <h1 class="mb-4 text-3xl font-bold text-center cursor-pointer">
          Create An Account
        </h1>
        <p
          class="mb-8 text-sm font-semibold tracking-wide text-center text-gray-700 cursor-pointer w-80"
        >
          Create an account and enjoy all the selection of cuisine available!
        </p>
      </div>
      <div class="space-y-4">
        <div
          class="flex items-center w-full gap-1 px-4 py-3 text-sm border rounded-lg outline-none"
        >
          <i class="mr-4 text-orange-400 material-icons"> person </i>
          <input
            v-model="username"
            type="text"
            placeholder="Username"
            class="bg-transparent outline-none"
            required
          />
        </div>
        <div
          class="flex items-center w-full gap-1 px-4 py-3 text-sm border rounded-lg outline-none"
        >
          <i class="mr-4 text-orange-400 material-icons"> email </i>
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            class="bg-transparent outline-none"
            required
          />
        </div>
        <div
          class="flex items-center w-full gap-1 px-4 py-3 text-sm border rounded-lg outline-none"
        >
          <i class="mr-4 text-orange-400 material-icons"> lock </i>
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
              class="text-orange-400 material-icons"
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
          class="w-64 py-3 text-xl text-white transition-all delay-75 bg-orange-400 rounded-2xl hover:bg-orange-600"
        >
          Create Account
        </button>
        <p class="mt-4 text-sm">
          Already Have An Account?
          <RouterLink
            :to="{ name: 'login-user' }"
            class="text-orange-700 duration-150 ease-linear hover:underline"
            >Log In here</RouterLink
          >
        </p>
      </div>
    </form>
  </div>
</template>

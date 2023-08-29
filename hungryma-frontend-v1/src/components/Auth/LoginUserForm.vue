<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useCurrentUserStore } from "../../store/currentUser";

const visibility = ref(false);
const router = useRouter();

const email = ref("");
const password = ref("");

const currentUserStore = useCurrentUserStore();
const { token, setToken, getCurrentUser } = currentUserStore;

const handleLogin = async (e) => {
  e.preventDefault();
  const loginResponse = await loginUser();

  console.log(`loginResponse:`, loginResponse);

  const loginSuccess = loginResponse.message;
  const loginFail = loginResponse.error;
  const accessToken = loginResponse.accessToken;

  if (!accessToken) {
    alert(loginFail);
  } else {
    alert(loginSuccess);
    localStorage.setItem("accessToken", accessToken);
    setToken(accessToken);
    await getCurrentUser();
    console.log(`accessToken after logni:`, accessToken);
    console.log(`pinia token after login:`, token);
    router.push({ name: "user-home" });
  }
};

async function loginUser() {
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
  <div>
    <!-- component -->
    <form @submit="handleLogin" class="flex items-center justify-center">
      <div
        class="z-20 px-12 py-12 bg-white shadow-xl bg-opacity-90 rounded-2xl"
      >
        <div>
          <h1 class="mb-4 text-3xl font-bold text-center cursor-pointer">
            Log In
          </h1>
          <p
            class="mb-4 text-sm font-semibold tracking-wide text-center text-gray-700 cursor-pointer w-80"
          >
            Log in and enjoy all the selection of cuisine available!
          </p>
          <!-- demo account info -->
          <p class="text-xs font-medium text-purple-800">
            Demo email: user-19@gmail.com
          </p>
          <p class="mb-5 text-xs font-medium text-purple-800">
            Demo password: 123456
          </p>
          <!-- end of demo account info -->
        </div>
        <div class="space-y-4">
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
            Log In
          </button>
          <p class="mt-4 text-sm">
            Don't Have An Account?
            <RouterLink
              :to="{ name: 'register-user' }"
              class="text-orange-700 duration-150 ease-linear hover:underline"
              >Sign Up here</RouterLink
            >
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

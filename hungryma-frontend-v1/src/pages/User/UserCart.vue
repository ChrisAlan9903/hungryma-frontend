<script setup>
import { ref } from "vue";
import { useCurrentUserStore } from "../../store/currentUser.js";
import { useRouter } from "vue-router";
import NavbarUser from "../../components/NavbarUser.vue";
</script>

<template>
  <NavbarUser userPage="user-cart" />
  <!-- Cart Item Sections -->
  <section class="flex w-full h-screen max-h-screen bg-red-100">
    <!-- Added item list  -->
    <div class="w-2/3 p-20 bg-yellow-100">
      <!-- inner container -->
      <div class="flex flex-col w-full h-full bg-green-200">
        <!-- title for each part -->
        <div
          class="flex items-center justify-between pt-6 pb-3 bg-pink-200 border-b-2 border-slate-400"
        >
          <h1 class="text-4xl font-bold">Title</h1>
          <h3 class="text-xl font-bold">3 Items</h3>
        </div>
        <!-- item list container -->
        <div class="flex-1 w-full bg-purple-100">
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
            <!-- item list -->
            <div
              id="item-1"
              class="flex justify-between w-full mb-6 border-2 h-28 border-slate-400"
            >
              <div class="flex justify-between w-2/5 h-full">
                <img
                  src="../../assets/chef-1.jpg"
                  alt=""
                  class="object-cover w-1/2"
                />
                <div class="flex items-center h-full ml-2 overflow-hidden">
                  <h3
                    class="cursor-pointer line-clamp-2"
                    title="Cheese Potato with Tomato Puree Lorem ipsum dolor sit amet.
            "
                  >
                    Cheese Potato with Tomato Puree Lorem ipsum dolor sit amet.
                  </h3>
                </div>
              </div>
              <div class="flex items-center justify-center w-1/5 gap-5">
                <button class="font-semibold">-</button>
                <p class="px-4 py-2 border border-slate-400">2</p>
                <button class="font-semibold">+</button>
              </div>
              <div class="flex items-center justify-center w-1/5">
                <p>RM 20</p>
              </div>
              <div class="flex items-center justify-center w-1/5">
                <p>RM 20</p>
              </div>
            </div>
            <div
              id="item-1"
              class="flex justify-between w-full my-3 border-2 h-28 border-slate-400"
            >
              <div class="flex justify-between w-2/5 h-full">
                <img src="../../assets/chef-1.jpg" alt="" class="w-1/2" />
                <div class="flex items-center h-full ml-2 overflow-hidden">
                  <h3
                    class="cursor-pointer line-clamp-2"
                    title="Cheese Potato with Tomato Puree Lorem ipsum dolor sit amet.
            "
                  >
                    Cheese Potato with Tomato Puree Lorem ipsum dolor sit amet.
                  </h3>
                </div>
              </div>
              <div class="flex items-center justify-center w-1/5 gap-5">
                <button class="font-semibold">-</button>
                <p class="px-4 py-2 border border-slate-400">2</p>
                <button class="font-semibold">+</button>
              </div>
              <div class="flex items-center justify-center w-1/5">
                <p>RM 20</p>
              </div>
              <div class="flex items-center justify-center w-1/5">
                <p>RM 20</p>
              </div>
            </div>
            <div
              id="item-1"
              class="flex justify-between w-full my-3 border-2 h-28 border-slate-400"
            >
              <div class="flex justify-between w-2/5 h-full">
                <img src="../../assets/chef-1.jpg" alt="" class="w-1/2" />
                <div class="flex items-center h-full ml-2 overflow-hidden">
                  <h3
                    class="cursor-pointer line-clamp-2"
                    title="Cheese Potato with Tomato Puree Lorem ipsum dolor sit amet.
            "
                  >
                    Cheese Potato with Tomato Puree Lorem ipsum dolor sit amet.
                  </h3>
                </div>
              </div>
              <div class="flex items-center justify-center w-1/5 gap-5">
                <button class="font-semibold">-</button>
                <p class="px-4 py-2 border border-slate-400">2</p>
                <button class="font-semibold">+</button>
              </div>
              <div class="flex items-center justify-center w-1/5">
                <p>RM 20</p>
              </div>
              <div class="flex items-center justify-center w-1/5">
                <p>RM 20</p>
              </div>
            </div>
            <div
              id="item-1"
              class="flex justify-between w-full my-3 border-2 h-28 border-slate-400"
            >
              <div class="flex justify-between w-2/5 h-full">
                <img src="../../assets/chef-1.jpg" alt="" class="w-1/2" />
                <div class="flex items-center h-full ml-2 overflow-hidden">
                  <h3
                    class="cursor-pointer line-clamp-2"
                    title="Cheese Potato with Tomato Puree Lorem ipsum dolor sit amet.
            "
                  >
                    Cheese Potato with Tomato Puree Lorem ipsum dolor sit amet.
                  </h3>
                </div>
              </div>
              <div class="flex items-center justify-center w-1/5 gap-5">
                <button class="font-semibold">-</button>
                <p class="px-4 py-2 border border-slate-400">2</p>
                <button class="font-semibold">+</button>
              </div>
              <div class="flex items-center justify-center w-1/5">
                <p>RM 20</p>
              </div>
              <div class="flex items-center justify-center w-1/5">
                <p>RM 20</p>
              </div>
            </div>
            <div
              id="item-1"
              class="flex justify-between w-full my-3 border-2 h-28 border-slate-400"
            >
              <div class="flex justify-between w-2/5 h-full">
                <img src="../../assets/chef-1.jpg" alt="" class="w-1/2" />
                <div class="flex items-center h-full ml-2 overflow-hidden">
                  <h3
                    class="cursor-pointer line-clamp-2"
                    title="Cheese Potato with Tomato Puree Lorem ipsum dolor sit amet.
            "
                  >
                    Cheese Potato with Tomato Puree Lorem ipsum dolor sit amet.
                  </h3>
                </div>
              </div>
              <div class="flex items-center justify-center w-1/5 gap-5">
                <button class="font-semibold">-</button>
                <p class="px-4 py-2 border border-slate-400">2</p>
                <button class="font-semibold">+</button>
              </div>
              <div class="flex items-center justify-center w-1/5">
                <p>RM 20</p>
              </div>
              <div class="flex items-center justify-center w-1/5">
                <p>RM 20</p>
              </div>
            </div>
            <div
              id="item-1"
              class="flex justify-between w-full my-3 border-2 h-28 border-slate-400"
            >
              <div class="flex justify-between w-2/5 h-full">
                <img src="../../assets/chef-1.jpg" alt="" class="w-1/2" />
                <div class="flex items-center h-full ml-2 overflow-hidden">
                  <h3
                    class="cursor-pointer line-clamp-2"
                    title="Cheese Potato with Tomato Puree Lorem ipsum dolor sit amet.
            "
                  >
                    Cheese Potato with Tomato Puree Lorem ipsum dolor sit amet.
                  </h3>
                </div>
              </div>
              <div class="flex items-center justify-center w-1/5 gap-5">
                <button class="font-semibold">-</button>
                <p class="px-4 py-2 border border-slate-400">2</p>
                <button class="font-semibold">+</button>
              </div>
              <div class="flex items-center justify-center w-1/5">
                <p>RM 20</p>
              </div>
              <div class="flex items-center justify-center w-1/5">
                <p>RM 20</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Total amount  -->
    <div class="w-1/3 px-10 py-20 bg-orange-100">
      <!-- inner container -->
      <div class="w-full h-full bg-green-200">
        <!-- title for each part -->
        <div class="">
          <h2 class="text-center">Title</h2>
        </div>
        <div class="w-full bg-purple-500"></div>
      </div>
    </div>
  </section>
  <section class="flex items-center justify-center h-56">
    <h2 class="text-4xl">Footer</h2>
  </section>
</template>

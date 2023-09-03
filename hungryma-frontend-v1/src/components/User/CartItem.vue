<script setup></script>
<template>
  <div
    id="item-1"
    class="flex justify-between w-full mb-6 border-2 h-28 border-slate-400"
  >
    <div class="flex justify-between w-2/5 h-full">
      <img src="../../assets/chef-1.jpg" alt="" class="object-cover w-1/2" />
      <div class="flex items-center h-full ml-2 overflow-hidden">
        <h3
          class="cursor-pointer line-clamp-2"
          title="Cheese Potato with Tomato Puree Lorem ipsum dolor sit amet.
            "
        >
          Grilled Chicken with Tomato Puree Lorem ipsum dolor sit amet.
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
</template>

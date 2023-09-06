<script setup>
const emit = defineEmits(["close-alert"]);

const handleCloseAlert = () => {
  emit("close-alert");
};
</script>

<template>
  <div
    class="absolute z-10 flex justify-center w-full transition-all duration-300 ease-in"
  >
    <div
      class="flex items-center gap-10 px-4 py-3 mx-auto mt-5 text-center text-green-700 bg-green-100 border border-green-400 rounded"
      role="alert"
    >
      <strong class="font-bold">Item added to cart !</strong>
      <button class="flex items-center" @click="handleCloseAlert">
        <i class="text-green-700 material-icons"> close </i>
      </button>
    </div>
  </div>
</template>

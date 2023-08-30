import { defineStore } from "pinia";

export const useOrderStore = defineStore("Order", {
  state: () => ({
    userOrderIds: null,
    vendorOrderIds: null,
  }),
});

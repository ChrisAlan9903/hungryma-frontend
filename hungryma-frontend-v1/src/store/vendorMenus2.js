import { defineStore } from "pinia";

export const useVendorMenus2Store = defineStore("vendorMenus2", {
  state: () => ({
    vendorMenuIds: null, // list of vendor food ids
    vendorOrderList: null, // list of all vendor orders based on matching food ids
    vendorOrderList2: null, // list of vendor orders + food name
    vendorOrderList3: null, // list of GROUPED vendor orders
  }),
  actions: {},
});

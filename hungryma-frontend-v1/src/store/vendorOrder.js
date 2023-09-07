import { defineStore } from "pinia";

export const useVendorOrderStore = defineStore("vendorOrder", {
  state: () => ({
    vendorOrderList: null,
  }),
  actions: {
    setVendorOrderList(menuObject) {
      if (!menuObject) return;

      console.log(`passed menuObject:`, menuObject);
      this.vendorMenuList = menuObject;
    },
  },
});

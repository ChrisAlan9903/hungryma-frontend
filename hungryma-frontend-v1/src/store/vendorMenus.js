import { defineStore } from "pinia";

export const useVendorMenusStore = defineStore("vendorMenus", {
  state: () => ({
    vendorMenuList: null,
  }),
  actions: {
    setMenuList(menuObject) {
      if (!menuObject) return;

      console.log(`passed menuObject:`, menuObject);
      this.vendorMenuList = menuObject;
    },
  },
});

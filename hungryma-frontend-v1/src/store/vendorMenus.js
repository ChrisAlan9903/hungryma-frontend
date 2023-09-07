import { defineStore } from "pinia";

export const useVendorMenusStore = defineStore("vendorMenus", {
  state: () => ({
    vendorMenuList: null,
  }),
  actions: {
    setVendorMenuList(menuObject) {
      if (!menuObject) return;

      console.log(`passed menuObject:`, menuObject);
      this.vendorMenuList = menuObject;
    },
    async getMenus(token) {
      const options = {
        method: "GET",
        headers: {
          Authorization: token,
        },
      };

      try {
        const response = await fetch(
          "http://localhost:3000/foodItems/",
          options
        );
        const data = await response.json();
        console.log(`all Vendor Menus:`, data);
        return data;
      } catch (err) {
        console.error(err);
        return err;
      }
    },
  },
});

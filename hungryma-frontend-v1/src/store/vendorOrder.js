import { defineStore } from "pinia";

export const useVendorOrderStore = defineStore("vendorOrder", {
  state: () => ({
    vendorOrderList: [
      {
        orderId: 1,
        orderItems: [
          {
            foodItemId: 23,
          },
        ],
      },
    ],
  }),
  actions: {
    setVendorOrderList(menuObject) {
      if (!menuObject) return;

      console.log(`passed menuObject:`, menuObject);
      this.vendorMenuList = menuObject;
    },
    async getAllOrderItem() {},
  },
});

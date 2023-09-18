import { defineStore } from "pinia";

export const useVendorMenus2Store = defineStore("vendorMenus2", {
  state: () => ({
    vendorMenuIds: null, // list of vendor food ids
    vendorOrderList: null, // list of all vendor orders based on matching food ids
    vendorOrderList2: [], // list of vendor orders + food name
    vendorOrderList3: null, // list of GROUPED vendor orders
  }),
  actions: {
    async getVendorMenus(token) {
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
        console.log(`Vendor Menu List:`, data);
        return data;
      } catch (err) {
        console.error(err);
      }
    },
    setVendorMenuIds(menuIds) {
      if (!menuIds) return;

      this.vendorMenuIds = menuIds;
    },
    async getVendorOrderItems(token, foodIdsArr) {
      const options = {
        method: "GET",
        headers: {
          Authorization: token,
        },
      };

      const foodItemIds = foodIdsArr.join(",");

      try {
        // Use template literals to insert the foodItemIds into the URL
        const response = await fetch(
          `http://localhost:3000/orderItems/?foodItemIds=${foodItemIds}`,
          options
        );
        const data = await response.json();
        console.log(`Vendor Order Items:`, data);
        return data;
      } catch (err) {
        console.error(err);
      }
    },
    setVendorOrderList(orderItems) {
      if (!orderItems) return;

      this.vendorOrderList = orderItems;
    },
    async getOrderName(token) {
      const options = {
        method: "GET",
        headers: {
          Authorization: token,
        },
      };

      // const idsArray = [24, 25, 26]; // Replace with your array of IDs

      for (const id of this.vendorOrderList) {
        try {
          const response = await fetch(
            `http://localhost:3000/foodItems/${id.foodItemId}`,
            options
          );
          const data = await response.json();
          //   console.log(`Data for ID ${id}:`, data);
          this.vendorOrderList2.push({ ...id, foodName: data.name });
        } catch (err) {
          console.error(`Error for ID ${id}:`, err);
        }
      }
    },
  },
});

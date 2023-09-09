import { defineStore } from "pinia";

export const useVendorMenusStore = defineStore("vendorMenus", {
  state: () => ({
    vendorMenuList: null,
    vendorOrderItems: null,
    vendorMenuIds: null,
    vendorCompleteOrder: null,
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
    setVendorMenuIds(array) {
      console.log(`food Array:`, array);
      this.vendorMenuIds = array;
      console.log(`vendorMenuIds updated`);
    },

    async getVendorOrderItems(token, ids) {
      console.log(`ids in pinia:`, ids);
      const options = {
        method: "GET",
        headers: {
          Authorization: token,
        },
      };
      const idsJoined = ids.join(",");
      console.log(idsJoined);

      try {
        const response = await fetch(
          `http://localhost:3000/orderItems/?foodItemIds=${idsJoined}`,
          options
        );
        const data = await response.json();
        console.log(`vendorOrderItems:`, data);
        this.vendorOrderItems = [...data];
        console.log(`added VendorOrderITems to pinia already`);
      } catch (err) {
        console.error(err);
      }
    },

    async getOrderFoodName(token, foodId) {
      const options = {
        method: "GET",
        headers: {
          Authorization: token,
        },
      };

      try {
        const response = await fetch(
          `http://localhost:3000/foodItems/${foodId}`,
          options
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        // console.log(data);
        return data;
      } catch (error) {
        console.error(error);
      }
    },
  },
});

// const array = {
//   orderId: 19,
//   foodItemId: [
//     /*ids of food item with same orderiD*/
//   ],
// };

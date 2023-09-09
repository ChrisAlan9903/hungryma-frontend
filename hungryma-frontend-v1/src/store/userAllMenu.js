import { defineStore } from "pinia";

export const useUserAllMenuStore = defineStore("userAllMenu", {
  state: () => ({
    allMenuList: [],
    allVendorList: [],
  }),
  actions: {
    // GET req to get all menu list
    async setAllMenuList(token) {
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
        console.log(`allmenuList from backend:`, data);

        const convertToNumber = data.map((obj) => ({
          ...obj,
          price: parseFloat(obj.price),
          quantity: 1,
          totalPrice: 0.0,
        }));

        this.allMenuList = convertToNumber;
      } catch (error) {
        console.error(error);
      }
    },
    getAllVendorIds() {
      const vendors = this.allMenuList.map((item) => {
        return item.vendorId;
      });
      console.log(`vendors:`, vendors);
      const uniqueVendors = [...new Set(vendors)]; //to store unique vendorId only(no duplicate)

      return uniqueVendors;
    },

    async getVendorsInfo(ids, token) {
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
          `http://localhost:3000/users/?ids=${idsJoined}`,
          options
        );
        const data = await response.json();
        console.log(`allVendors:`, data);
        this.allVendorList = [...data];
      } catch (err) {
        console.error(err);
      }
    },
  },
  getters: {
    sumTotalPrice(state) {
      return state.cartItems.reduce(
        (totalPriceSum, food) => totalPriceSum + food.totalPrice,
        0
      );
    },
  },
});

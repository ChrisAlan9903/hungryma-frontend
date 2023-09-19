import { defineStore } from "pinia";

export const useVendorMenus2Store = defineStore("vendorMenus2", {
  state: () => ({
    vendorMenuIds: null, // list of vendor food ids
    vendorOrderList: null, // list of all vendor orders based on matching food ids
    vendorOrderList2: [], // list of vendor orders + food name
    vendorOrderList3: null, // list of GROUPED vendor orders
    vendorOrderList4: [], // list with orderStatus
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
    setVendorOrderList3() {
      const items = this.vendorOrderList2;
      const itemSorted = this.vendorOrderList2.reduce((acc, item) => {
        const existingOrder = acc.find(
          (order) => order.orderId === item.orderId
        );

        if (existingOrder) {
          existingOrder.orders.push(item);
        } else {
          acc.push({ orderId: item.orderId, orders: [item] });
        }

        return acc;
      }, []);
      this.vendorOrderList3 = itemSorted;

      // console.log(JSON.stringify(itemSorted, null, 2));
      //   console.log(JSON.stringify(itemSorted, null, 1));
    },
    async getOrderStatus(token) {
      const options = {
        method: "GET",
        headers: {
          Authorization: token,
        },
      };

      for (const item of this.vendorOrderList3) {
        try {
          // Task: getting OrderStatus from OrderId
          const orderStatusRes = await fetch(
            `http://localhost:3000/orders/${item.orderId}`,
            options
          );
          const data = await orderStatusRes.json();
          console.log(`Data for ID ${item}:`, data);

          this.vendorOrderList4.push({
            ...item,
            orderStatus: data.orderStatus,
          });
        } catch (err) {
          console.error(`Error for ID ${item}:`, err);
        }
      }
    },
    resetAllVendorOrderList() {
      this.vendorOrderList = [];
      this.vendorOrderList2 = [];
      this.vendorOrderList3 = [];
      this.vendorOrderList4 = [];
    },
  },
});

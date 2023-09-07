import { defineStore } from "pinia";

// TO EDIT: cartItems value is temporary will change later based on API calls
export const useUserCartStore = defineStore("userCart", {
  state: () => ({
    cartItems: [],
    // sumQuantity: 0,
    // sumTotalPrice: 0,
  }),
  actions: {
    setMenuList(menuObject) {
      if (!menuObject) return;

      console.log(`passed menuObject:`, menuObject);
      this.vendorMenuList = menuObject;
    },
    updateCartItem(itemId, newQuantity, newTotalPrice) {
      const findFood = this.cartItems.find((food) => food.id === itemId);
      if (findFood) {
        // Update the quantity property of the found object
        findFood.quantity = newQuantity;
        findFood.totalPrice = newTotalPrice;
        console.log("Quantity updated successfully:", this.cartItems);
      } else {
        console.log("Object with id", itemId, "not found in the array.");
      }
    },
    clearCart() {
      this.cartItems = [];
    },

    addItemToCart(foodObject) {
      const findFood = this.cartItems.find((food) => food.id === foodObject.id);

      if (findFood) {
        findFood.quantity++;
        console.log(`update add to cart quantity`);
      } else {
        this.cartItems.push(foodObject);
      }
      // ⚠️TODO: need to add if same foodObject is added multiple time, need to increase the quantity in the object instead.
    },

    async createOrder(token, userId, orderAmount) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          userId: userId,
          totalAmount: orderAmount,
          orderStatus: "pending",
        }),
      };

      try {
        const response = await fetch("http://localhost:3000/orders/", options);
        const data = await response.json();
        console.log(`Order Created:`, data);
        return data;
      } catch (err) {
        console.error(err);
      }
    },

    async createOrderItem(token, foodObject, orderId) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          orderId: orderId,
          foodItemId: foodObject.id,
          quantity: foodObject.quantity,
          price: foodObject.totalPrice,
        }),
      };

      try {
        const response = await fetch(
          "http://localhost:3000/orderItems/",
          options
        );
        const data = await response.json();
        console.log(`orderItem created:`, data);
      } catch (err) {
        console.error(err);
      }
    },
  },
  getters: {
    sumQuantity(state) {
      // const qValue = this.cartItems.length;
      // console.log(`qValue:`, qValue);
      // return qValue;
      return state.cartItems.reduce(
        (quantitySum, food) => quantitySum + food.quantity,
        0
      );
      // console.log(`sumQuantity:`, qValue);
      // return qValue;
    },
    sumTotalPrice(state) {
      // const qValue = this.cartItems.length;
      // console.log(`qValue:`, qValue);
      // return qValue;
      return state.cartItems.reduce(
        (totalPriceSum, food) => totalPriceSum + food.totalPrice,
        0
      );
      // console.log(`sumQuantity:`, qValue);
      // return tPValue;
    },
  },
});

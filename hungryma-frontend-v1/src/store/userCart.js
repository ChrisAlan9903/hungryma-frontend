import { defineStore } from "pinia";

// TO EDIT: cartItems value is temporary will change later based on API calls
export const useUserCartStore = defineStore("userCart", {
  state: () => ({
    cartItems: [
      {
        id: 1,
        name: "Food 1",
        price: 50.9,
        categoriesId: 3,
        imageFood: "",
        quantity: 1,
        totalPrice: 0,
      },
      {
        id: 2,
        name: "Food 2",
        price: 24.5,
        categoriesId: 1,
        imageFood: "",
        quantity: 1,
        totalPrice: 0,
      },
      {
        id: 3,
        name: "Food 3",
        price: 12.99,
        categoriesId: 2,
        imageFood: "",
        quantity: 1,
        totalPrice: 0,
      },
      {
        id: 4,
        name: "Food 4",
        price: 7.25,
        categoriesId: 4,
        imageFood: "",
        quantity: 1,
        totalPrice: 0,
      },
      {
        id: 5,
        name: "Food 5",
        price: 35.75,
        categoriesId: 6,
        imageFood: "",
        quantity: 1,
        totalPrice: 0,
      },
      {
        id: 6,
        name: "Food 6",
        price: 19.99,
        categoriesId: 5,
        imageFood: "",
        quantity: 1,
        totalPrice: 0,
      },
    ],
    // sumQuantity: 0,
    // sumTotalPrice: 0,
  }),
  actions: {
    setMenuList(menuObject) {
      if (!menuObject) return;

      console.log(`passed menuObject:`, menuObject);
      this.vendorMenuList = menuObject;
    },
    updateCartItems(itemId, newQuantity, newTotalPrice) {
      const findFood = this.cartItems.find((food) => food.id === itemId);
      if (findFood) {
        // Update the quantity property of the found object
        findFood.quantity = newQuantity;
        findFood.totalPrice = newTotalPrice;
        console.log("Quantity updated successfully:", this.cartItems);
      } else {
        console.log("Object with id", targetId, "not found in the array.");
      }
    },
    // updateSumQuantity() {
    //   this.sumQuantity = this.cartItems.reduce(
    //     (quantitySum, food) => quantitySum + food.quantity,
    //     0
    //   );
    // },
    // updateSumTotalPrice() {
    //   this.sumTotalPrice = this.cartItems.reduce(
    //     (totalPriceSum, food) => totalPriceSum + food.totalPrice,
    //     0
    //   );
    // },
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

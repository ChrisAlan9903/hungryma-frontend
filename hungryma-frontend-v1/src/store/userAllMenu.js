import { defineStore } from "pinia";

export const useUserAllMenuStore = defineStore("userAllMenu", {
  state: () => ({
    allMenuList: [
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
      {
        id: 7,
        name: "Food 7",
        price: 19.75,
        categoriesId: 4,
        imageFood: "",
        quantity: 1,
        totalPrice: 0.0,
      },
      {
        id: 8,
        name: "Food 8",
        price: 12.45,
        categoriesId: 2,
        imageFood: "",
        quantity: 1,
        totalPrice: 0.0,
      },
      {
        id: 9,
        name: "Food 9",
        price: 27.6,
        categoriesId: 3,
        imageFood: "",
        quantity: 1,
        totalPrice: 0.0,
      },
      {
        id: 10,
        name: "Food 10",
        price: 14.3,
        categoriesId: 1,
        imageFood: "",
        quantity: 1,
        totalPrice: 0.0,
      },
      {
        id: 11,
        name: "Food 11",
        price: 23.15,
        categoriesId: 6,
        imageFood: "",
        quantity: 1,
        totalPrice: 0.0,
      },
      {
        id: 12,
        name: "Food 12",
        price: 18.5,
        categoriesId: 5,
        imageFood: "",
        quantity: 1,
        totalPrice: 0.0,
      },
      {
        id: 13,
        name: "Food 13",
        price: 16.75,
        categoriesId: 1,
        imageFood: "",
        quantity: 1,
        totalPrice: 0.0,
      },
      {
        id: 14,
        name: "Food 14",
        price: 21.9,
        categoriesId: 4,
        imageFood: "",
        quantity: 1,
        totalPrice: 0.0,
      },
      {
        id: 15,
        name: "Food 15",
        price: 29.25,
        categoriesId: 2,
        imageFood: "",
        quantity: 1,
        totalPrice: 0.0,
      },
    ],
  }),
  actions: {
    // example of
    setMenuList(menuObject) {
      if (!menuObject) return;

      console.log(`passed menuObject:`, menuObject);
      this.vendorMenuList = menuObject;
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

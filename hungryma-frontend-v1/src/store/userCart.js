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
      },
      {
        id: 2,
        name: "Food 2",
        price: 24.5,
        categoriesId: 1,
        imageFood: "",
      },
      {
        id: 3,
        name: "Food 3",
        price: 12.99,
        categoriesId: 2,
        imageFood: "",
      },
      {
        id: 4,
        name: "Food 4",
        price: 7.25,
        categoriesId: 4,
        imageFood: "",
      },
      {
        id: 5,
        name: "Food 5",
        price: 35.75,
        categoriesId: 6,
        imageFood: "",
      },
      {
        id: 6,
        name: "Food 6",
        price: 19.99,
        categoriesId: 5,
        imageFood: "",
      },
    ],
  }),
  actions: {
    setMenuList(menuObject) {
      if (!menuObject) return;

      console.log(`passed menuObject:`, menuObject);
      this.vendorMenuList = menuObject;
    },
  },
});

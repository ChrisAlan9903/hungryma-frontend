import { defineStore } from "pinia";

export const useCurrentUserStore = defineStore("currentUser", {
  state: () => ({
    token: null,
    currentUser: null,
  }),
  actions: {
    setToken(tokenItem) {
      if (!tokenItem) {
        console.log(`no token to set in pinia !`);
        return;
      }
      console.log(`Token going to set in pinia:`, tokenItem);
      this.token = tokenItem;
      console.log(`Token SET in pinia`);
      console.log(`token set in pinia already:`, this.token);
    },

    async getCurrentUser() {
      console.log(`this.token value:`, this.token);
      const options = {
        method: "GET",
        headers: {
          Authorization: this.token,
        },
      };

      try {
        const response = await fetch(
          "http://localhost:3000/users/user/current",
          options
        );
        const data = await response.json();
        console.log(data);
        this.currentUser = data;
        return data;
      } catch (err) {
        console.error(err);
        return err;
      }
    },
  },
});

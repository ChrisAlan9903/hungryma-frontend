import { defineStore } from "pinia";
export const useReloadPageStore = defineStore("reloadPage", {
  state: () => ({
    reloadOnce: false,
  }),
  actions: {
    setReloadOnce(toggle) {
      this.reloadOnce = toggle;
    },
  },
});

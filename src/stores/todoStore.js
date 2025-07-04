import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    count: 10,
    name: "ikel",
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});

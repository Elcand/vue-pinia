import { difineStore } from "pinia";

export const useTodoStore = difineStore("todo", {
    state: () => ({
        count: 0,
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
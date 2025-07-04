<template>
  <h1>Todo Store</h1>
  <!-- {{ todoStore.name }} // state -->
  <!-- {{ todoStore.doubleCount }} // getters -->

  <div class="count">
    <h2>Count: {{ todoStore.count }}</h2>
  </div>
  <button @click="todoStore.increment">+</button>
</template>

<script>
import { useTodoStore } from "@/stores/TodoStore";

export default {
  setup() {
    const todoStore = useTodoStore();

    return { todoStore };
  },
};
</script>

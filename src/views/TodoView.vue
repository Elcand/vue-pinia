<template>
  <h1>Todo Store</h1>
  {{ todoStore }}
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

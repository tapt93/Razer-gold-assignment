<script setup lang="tsx">
import TodoForm from './components/TodoForm.vue';
import TodoList from './components/TodoList.vue';
</script>

<template>
  <div class="d-flex flex-column gap-4">
    <h2 class="text-center">Todo App</h2>
    <TodoForm />
    <TodoList />
  </div>
</template>
<script setup lang="tsx">
import { getTodoData } from '@/services/todo';
import { onMounted } from 'vue';
import TodoForm from './components/TodoForm.vue';
import TodoList from './components/TodoList.vue';
import { useTodos } from './stores/index';

const { set } = useTodos()

onMounted(() => {
  getTodoData().then(data => set(data));
})
</script>

<template>
  <div class="d-flex flex-column gap-4">
    <h2 class="text-center">Todo App</h2>
    <TodoForm />
    <TodoList />
  </div>
</template>
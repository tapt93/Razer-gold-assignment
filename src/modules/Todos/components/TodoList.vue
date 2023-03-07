<script setup lang="ts">
import { TodoStatus } from '@/types/todo.type';
import TodoStatusColumn from './TodoStatusColumn.vue';

const statusKeys = Object.keys(TodoStatus) as Array<keyof typeof TodoStatus>;
</script>

<template>
  <div class="d-flex flex-column gap-1 mt-4 container">
    <h2>ToDo List</h2>
    <hr />
    <div class="row">
      <div class="col" v-for="status in statusKeys">
        <TodoStatusColumn :status="TodoStatus[status]" />
      </div>
    </div>
  </div>
</template>
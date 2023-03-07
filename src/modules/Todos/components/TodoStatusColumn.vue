<script setup lang="ts">
import { ITodo, TodoStatus } from '@/types/todo.type';
import { computed } from 'vue';
import draggable from "vuedraggable";
import { useTodos } from '../stores';
import TodoListItem from './TodoListItem.vue';

const { status } = defineProps<{ status: TodoStatus }>();

const { todoList, changeStatus } = useTodos()
const list = computed(() => (todoList.filter(c => c.status === status)))

const change = (evt: { added: any } | { removed: any }, status: TodoStatus) => {
  if ('added' in evt) {
    const todo = { ...evt.added.element } as ITodo;
    changeStatus(todo.id, status)
  }
}
</script>

<template>
  <div class="d-flex flex-column align-items-center vh-100">
    <h3 class="text-uppercase">{{ status }} ({{ list.length }})</h3>
    <div class="d-flex flex-column gap-2 border p-4 px-1 h-100 w-100">
      <draggable class="h-100" :list="list" group="task" @change="$event => change($event, status)" item-key="id">
        <template #item="{ element }">
          <TodoListItem :item="element" />
        </template>
      </draggable>
    </div>
  </div>
</template>
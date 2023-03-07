<script setup lang="ts">
import { ITodo } from '@/types/todo.type';
import { ref } from 'vue';
import { useTodos } from '../stores';
import dayjs from 'dayjs';

const { item } = defineProps<{ item: ITodo }>();

const { remove, edit } = useTodos();

const isEditing = ref(false);
const editValue = ref(item.name);
const inputRef = ref<HTMLInputElement>();

const handleEdit = () => {
  isEditing.value = true;
  inputRef.value?.focus()
}

const closeEdit = () => {
  isEditing.value = false;
}

const onSave = () => {
  closeEdit();
  edit(item.id, { name: editValue.value } as ITodo)
}

const onKeyPress = (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    onSave();
  }
}
</script>
<template>
  <div class="border rounded p-4 bg-white mb-2 text-break" role="button">
    <div class="d-flex flex-row justify-content-between">
      <div class="pe-2">
        <input v-show="isEditing" ref="inputRef" v-model="editValue" type="text" class="form-control"
          placeholder="Todo name" aria-label="Todo name" @keypress="onKeyPress" @blur="closeEdit">
        <p v-show="!isEditing" class="fw-semibold fs-4">{{ item.name }}</p>
        <p>Created at: {{ dayjs(item.createdAt).format('DD/MM/YYYY HH:mm:ss') }}</p>
      </div>
      <div class="d-flex flex-row gap-2">
        <button class="btn btn-outline-primary btn-sm" style="height: fit-content" @click="handleEdit">
          <i class="bi bi-pencil-square"></i>
        </button>
        <button class="btn btn-outline-danger btn-sm" style="height: fit-content" @click="remove(item.id)">
          <i class="bi bi-trash"></i>
        </button>
      </div>
    </div>
  </div>
</template>
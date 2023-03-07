<script setup lang="ts">
import { ITodo } from '@/types/todo.type';
import { ref } from 'vue';
import { useTodos } from '../stores';

const { add } = useTodos()

const name = ref('');

const onSave = () => {
  if (name.value) {
    add({ name: name.value } as ITodo);
    name.value = '';
  }
}

const onKeyPress = (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    onSave();
  }
}
</script>

<template>
  <div class="container">
    <div class="input-group">
      <input v-model="name" type="text" class="form-control" placeholder="Todo name" aria-label="Todo name" autofocus
        @keypress="onKeyPress" aria-describedby="button-addon2">
      <button class="btn btn-primary" type="button" id="button-addon2" @click="onSave">
        <i class="bi bi-plus"></i> Add new
      </button>
    </div>
  </div>
</template>
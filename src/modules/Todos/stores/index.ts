import { ITodo, TodoStatus } from "@/types/todo.type";
import { defineStore } from "pinia";
import { v4 as uuidv4 } from 'uuid';

type ToDoState = {
  todoList: ITodo[];
}

export const useTodos = defineStore('todo', {
  state: () => ({
    todoList: []
  } as ToDoState),

  actions: {
    add(todo: ITodo) {
      todo.createdAt = new Date();
      todo.id = uuidv4();
      todo.status = TodoStatus.TODO;

      this.todoList.push(todo);
    },
    remove(id: string) {
      const deleteIndex = this.todoList.findIndex(c => c.id === id);
      if (deleteIndex >= 0) {
        this.todoList.splice(deleteIndex, 1);
      }
    },
    edit(id: string, payload: ITodo) {
      const todo = this.getById(id);
      if (todo) {
        todo.updatedAt = new Date();
        todo.name = payload.name;
      }
    },
    changeStatus(id: string, status: TodoStatus) {
      const todo = this.getById(id);
      if (todo) {
        todo.status = status;
        todo.updatedAt = new Date();
      }
    },
    getById(id?: string): ITodo | undefined {
      if (!id) return undefined;
      return this.todoList.find(c => c.id === id);
    },
    set(todos: ITodo[]) {
      this.todoList = [...todos];
    }
  }
})
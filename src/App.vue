<template>
  <div id="app">
    <h1>ShopingList</h1>
    <div>
        <todo-list v-bind:todos="todos"></todo-list>
        <!-- <create-todo v-on:create-todo="createTodo"></create-todo> -->
    </div>
  </div>
</template>

<script>
import ToDoAPI from './lib/api';
import TodoList from './components/TodoList';

export default {
  name: 'app',
  components: {
    TodoList,
  },
  data() {
    const todos = ToDoAPI.getAll();
    return { todos };
  },
  methods: {
    refresh() {
    },
    createTodo() {
    },
    updateToDo() {
    },
    deleteToDo() {
    },
  },
};
</script>

<style scoped>

</style>

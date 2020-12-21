<template>
  <div>
    <h2 class="center">Add your items here</h2>
    <ul>
      <todo
        v-for="todo in todos"
        :todo="todo"
        v-bind:key="todo.id"></todo>
    </ul>
  </div>
</template>

<script type = "text/javascript" >
import Todo from './Todo';

export default {
  props: ['todos'],
  components: {
    Todo,
  },
  methods: {
    deleteTodo(todo) {
      console.log(todo);
    },
    completeTodo(todo) {
      console.log(todo);
    },
    editToDo(todo) {
      console.log(todo);
    },
  },
};
</script>

<style scoped>
</style>


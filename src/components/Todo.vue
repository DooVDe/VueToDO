<template>
  <li>
    <input type='checkbox'/>
    <p contenteditable="true" @input="onInput"> {{ todo.title }} </p>
  </li>
</template>

<script type='text/javascript'>
import App from '../App';

export default {
  components: { App },
  props: ['todo'],
  data() {
    return {};
  },
  methods: {
  },
};
</script>

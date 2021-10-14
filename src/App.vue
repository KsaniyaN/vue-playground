<template>
    <Nav />
    <TodoApp />
    <Parent />
</template>

<script>
import Nav from "./components/Nav.vue";
import Parent from "./components/Parent.vue";
import TodoApp from './components/TodoApp.vue';

export default {
    name: "App",
    components: {
        Nav,
        TodoApp,
        Parent
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>

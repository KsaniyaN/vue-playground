<template>
    <!-- <Nav /> -->
    <!-- <TodoApp />
    <Parent /> -->
    <!-- <HeroesList /> -->
    <Computed />
</template>

<script>
import Nav from "./components/Nav.vue";
import TodoApp from "./components/TodoApp.vue";
import Parent from "./components/Parent.vue";
import HeroesList from "./components/HeroesList.vue";
import Computed from "./components/Computed.vue";

export default {
    name: "App",
    components: {
        Nav,
        TodoApp,
        Parent,
        HeroesList,
        Computed,
    },
};
</script>

<style>
#app {
    font-family: "Trebuchet MS", Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

* {
    margin-bottom: 1em;
}
</style>

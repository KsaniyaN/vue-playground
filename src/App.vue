<template>
    <!-- <Nav /> -->
    <!-- <TodoApp />
    <Parent /> -->
    <!-- <HeroesList /> -->
    <Computed />
    <Tree :tree-data="tree"/>
</template>

<script>
    import Nav from "./components/Nav.vue";
    import TodoApp from "./components/TodoApp.vue";
    import Parent from "./components/Parent.vue";
    import HeroesList from "./components/HeroesList.vue";
    import Computed from "./components/Computed.vue";
    import Tree from "./components/Tree.vue";

    export default {
        name: "App",
        components: {
            Nav,
            TodoApp,
            Parent,
            HeroesList,
            Computed,
            Tree,
        },

        data: () => ({
            tree: {
                label: "Root Item",
                children: [
                    {
                        label: "Item 1.1",
                        children: [
                            {label: "Item 1.1.1"},
                            {label: "Item 1.1.2"},
                        ],
                    },
                    {label: "Item 1.2"},
                ],
            },
        }),

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

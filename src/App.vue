<template>
<!--    <Nav/>-->
    <TodoApp/>
<!--    <Parent/>-->
<!--    <HeroesList/>-->
<!--    <Computed/>-->
<!--    <Tree :tree-data="tree"/>-->
<!--    <SimpleWebworker/>-->
<!--    <ComlinkWebworker/>-->
</template>

<script>
import Nav from "./components/Nav.vue";
import TodoApp from "./components/TodoApp.vue";
import Parent from "./components/Parent.vue";
import HeroesList from "./components/HeroesList.vue";
import Computed from "./components/Computed.vue";
import Tree from "./components/Tree.vue";
//WebWorkers
import SimpleWebworker from "../simple-webworker/SimpleWebworker.vue";
import ComlinkWebworker from "../simple-webworker/comlink/ComlinkWebworker.vue";

export default {
    name: "MyApp",

    components: {
        ComlinkWebworker,
        SimpleWebworker,
        Nav, TodoApp, Parent, HeroesList, Computed, Tree,
    },

    data() {
        return {
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
        }
    },

};
</script>

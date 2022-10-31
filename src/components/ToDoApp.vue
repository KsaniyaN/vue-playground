<template>
    <div>
        <h1>Hi, lets Learn Vue.js 3</h1>
        <h2>ToDo List</h2>
        <div v-for="todo in todos" :key="todo.id" :class="[todo.completed ? 'completed' : '']" data-test="todo">
            {{ todo.text }}
            <input type="checkbox" v-model="todo.completed" data-test="todo-checkbox" />
        </div>

        <form data-test="form" @submit.prevent="createTodo">
            <label>New ToDo: </label>
            <input data-test="new-todo" v-model="newTodo" />
        </form>
    </div>
</template>

<script>
export default {
    name: "TodoApp",

    data() {
        return {
            newTodo: "",
            todos: [
                {
                    id: 1,
                    text: "Learn Vue.js 3",
                    completed: false,
                },
                {
                    id: 2,
                    text: "Visit India",
                    completed: false,
                },
            ],
        };
    },

    methods: {
        createTodo() {
            this.todos.push({
                id: 3,
                text: this.newTodo,
                completed: false,
            });
            this.newTodo = "";
        },
    },
};
</script>

<style scoped>
.completed {
    text-decoration: line-through;
}
</style>

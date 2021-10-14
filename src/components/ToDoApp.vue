<template>
    <div>
        <h1>Hi, lets Learn Vue.js 3</h1>
        <div 
            v-for="todo in todos" 
            :key="todo.id" 
            data-test="todo"
            :class="[todo.completed ? 'completed' : '']">
                {{ todo.text }}
                <input type="checkbox" v-model="todo.completed" data-test="todo-checkbox" />
        </div>

        <form data-test="form" @submit.prevent="createTodo">
            <input data-test="new-todo" v-model="newTodo" />
        </form>
    </div>
</template>

<script>
export default {
    name: 'TodoApp',

    data() {
        return {
            newTodo: "",
            todos: [
                {
                    id: 1,
                    text: 'Learn Vue.js 3',
                    completed: false
                },
                {
                    id: 2,
                    text: 'Visit India',
                    completed: false
                }
            ]
        }
    },

    methods: {
       createTodo(){
           this.todos.push({
                id: 3,
                text: this.newTodo,
                completed: false,
           })
       } 
    }

}
</script>

<style scoped>
    .completed {
        text-decoration: line-through;
    }
</style>
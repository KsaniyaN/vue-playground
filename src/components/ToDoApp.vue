<template>
    <div>
        TEST
        <div v-for="todo in todos" :key="todo.id" data-test="todo">{{ todo.text }}</div>
    </div>
</template>

<script>
export default {
    name: 'ToDoApp',

    data() {
        return {
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
    }
}
</script>
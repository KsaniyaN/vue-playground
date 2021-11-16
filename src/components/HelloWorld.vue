<template>
    <h1>{{ message }}</h1>

    <div>
        <button type="button" @click="count++">count is: {{ count }}</button>
    </div>
</template>

<script>
    export default {
        props: {
            message: String,
        },

        data() {
            return {
                count: 0
            }
        }
    }
</script>

<style scoped>
    h1, div {
        margin-bottom: 1em;
    }
</style>

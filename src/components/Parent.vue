<template>
    <div>
        <!-- Parent
        <Child /> -->
        <p>------------------------------------------------------------------</p>
        <!-- <button @click="message = Date()">Show Date</button> -->
        <button @click="getDate">Show Date</button>
        <p>{{ message }}</p>
    </div>
</template>

<script>
    import Child from "./Child.vue";

    export default {
        name: "Parent",

        components: {Child},

        data() {
            return {
                message: null,
            };
        },

        methods: {
            getDate() {
                this.message = Date();
            },
        },
    };
</script>

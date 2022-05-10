<template>
    <div>
        Parent
        <!-- applying a class from parent to child -->
        <Child class="test"/>

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

<style scoped>
.test {
    color: mediumvioletred;
    font-family: fantasy;
    font-size: x-large;
}
</style>

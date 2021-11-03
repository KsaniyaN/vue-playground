<!-- https://www.digitalocean.com/community/tutorials/vuejs-recursive-components -->

<template>
    <li class="tree">
        <div class="label" @click="toggleChildren">{{ node.label }}</div>

        <ul v-if="node.children && node.children.length && showChildren">
            <node
                v-for="child in node.children"
                :node="child"
                :key="child.id"
            ></node>
        </ul>
    </li>
</template>

<script>
export default {
    name: "node",
    props: {
        node: Object,
    },

    data() {
        return { showChildren: false };
    },
// ToDo: toggle classes - has-children
    methods: {
        toggleChildren() {
            this.showChildren = !this.showChildren;
        },
    },
};
</script>

<style scoped>
/* ToDo: Less */
ul {
    padding-left: 16px;
    margin-bottom: 0;
}

ul li {
    list-style: none;
    margin-bottom: 0;
}
</style>

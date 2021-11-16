<!-- https://www.digitalocean.com/community/tutorials/vuejs-recursive-components -->

<template>
    <li>
        <div class="label" @click="toggleChildren" :class="labelClasses">
            <span
                class="icon"
                :class="treeNodeIcon"
                v-if="node.children && node.children.length"
            ></span>
            {{ node.label }}
        </div>

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
            return {showChildren: false};
        },

        methods: {
            toggleChildren() {
                this.showChildren = !this.showChildren;
            },
        },

        computed: {
            labelClasses() {
                return {"has-children": this.node.children};
            },

            treeNodeIcon() {
                return {
                    plus: !this.showChildren,
                    minus: this.showChildren,
                };
            },
        },
    };
</script>

<style scoped>
    /* ToDo: Less/Sass */
    ul {
        padding-left: 16px;
        margin-bottom: 0;
    }

    ul li {
        list-style: none;
        margin-bottom: 0;
    }

    .label.has-children {
        cursor: pointer;
    }

    .icon.plus::before {
        content: "+";
    }

    .icon.minus::before {
        content: "-";
    }
</style>

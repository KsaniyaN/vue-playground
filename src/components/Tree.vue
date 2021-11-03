<!-- https://www.digitalocean.com/community/tutorials/vuejs-recursive-components -->

<template>
    <div class="tree">
        <ul class="tree-list">
            <tree-node :node="treeData"></tree-node>
        </ul>
    </div>
</template>

<script>
import TreeNode from "./TreeNode.vue";

export default {
    props: {
        treeData: Object,
    },
    components: {
        TreeNode,
    },
};
</script>

<style>
.tree {
    text-align: left;
}
</style>

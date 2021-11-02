<!-- https://www.digitalocean.com/community/tutorials/vuejs-recursive-components -->

<template>
  <div class="tree">
    <ul class="tree-list">
      <node-tree :node="treeData"></node-tree>
    </ul>
  </div>
</template>

<script>
import NodeTree from "./NodeTree.vue";

export default {
  props: {
    treeData: Object,
  },
  components: {
    NodeTree,
  },
};
</script>

<style>
/* ToDo: add less */
.tree {
  text-align: left;
}
.tree ul li {
  list-style: none;
}
.tree-list ul {
  padding-left: 16px;
  margin-bottom: 0;
}
.tree-list ul li {
  margin-bottom: 0;
}
</style>
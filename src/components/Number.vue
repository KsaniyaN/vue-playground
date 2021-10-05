<template>
    <label for="age"><slot></slot></label>
    <input type="text" :value="value"/>
    <p class="note">{{ note }}</p>
</template>

<script>
export default {
    props: {
        value: {
            type: Number,
            default: 40
        },
        note: {
            type: String,
            default: ""
        }
    },
};
</script>

<style scoped>
    label {
        margin-right: 1em;
    }
    input {
        outline: none;
        padding: 4px 4px 3px;
    }
    p.note {
        color: gray;
        font-size: smaller;
    }
</style>
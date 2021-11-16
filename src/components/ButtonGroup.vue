<template>
    <button :disabled="isDisabled">
        <slot></slot>
    </button>

    <button :disabled="false">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        props: {
            isDisabled: {
                type: Boolean,
                default: false,
            },
        },
    };
</script>

<style>
    button {
        margin-right: .5em;
    }
</style>
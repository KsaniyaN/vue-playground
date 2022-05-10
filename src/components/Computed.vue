<!-- https://vuejs.org/v2/guide/computed.html#Computed-Properties -->
<!-- https://www.vuemastery.com/courses/intro-to-vue-3/computed-properties-vue3/ -->

<template>
    <blockquote>
        Think of computed properties like a calculator, because they
        calculate or compute values for us
    </blockquote>
    <div>
        <p>Original message: "{{ message }}"</p>

        <!-- Computed class -->
        <p :class="{'is-computed': isComputed}">Computed reversed message: "{{ reversedMessage }}"</p>
        <!-- Conditional class -->
        <p :class="[isComputed ? 'is-computed' : '']">Computed reversed message: "{{ reversedMessage }}"</p>
    </div>
</template>

<script>
export default {
    name: "Computed",

    data() {
        return {
            message: "Hi Xenia",
            isActive: true,
            error: null
        };
    },

    computed: {
        reversedMessage: function () {
            return this.message.split("").reverse().join("");
        },

        isComputed: function () {
            return this.isActive && !this.error
        }
    },
};
</script>

<style scoped>
blockquote {
    background-color: rgb(236, 236, 236);
    border-left: 3px lightgrey solid;
    padding: 1em;
}

.is-computed {
    color: dodgerblue;
}
</style>

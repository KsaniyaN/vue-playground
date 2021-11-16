<!-- https://css-tricks.com/methods-computed-and-watchers-in-vue-js/ -->
<template>
    <p>------------------------------------------------------------------</p>
    <label>Check console: </label>
    <input type="number" v-model.number="counter" min="0" max="10"/>
    <p>------------------------------------------------------------------</p>

    <div class="heroes">
        <div class="container">
            <h1>Heroes</h1>

            <label for="filter-name">Find your hero:</label>
            <input v-model="findName" id="filter-name" type="text"/>

            <ul>
                <li v-for="name in filteredNames" :key="name.id">
                    {{ name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeroesList",

        data() {
            return {
                findName: "",
                names: [
                    "Xenia N",
                    "Milena V",
                    "Martin V",
                    "Alex Va",
                    "Olga N",
                    "Olga B",
                    "Mariia Gu",
                ],
                counter: 0
            };
        },

        computed: {
            filteredNames() {
                let filter = new RegExp(this.findName, "i");
                return this.names.filter((el) => el.match(filter));
            },
        },

        watch: {
            counter() {
                console.log("The counter has changed!");
            },
        },
    };
</script>

<style scoped>
    .heroes {
        display: flex;
        justify-content: center;
        background: rgb(131, 58, 180);
        background: linear-gradient(
            45deg,
            rgba(131, 58, 180, 1) 0%,
            rgba(253, 29, 29, 1) 50%,
            rgba(252, 176, 69, 1) 100%
        );
        line-height: 1.4;
        color: #2c0938;
        padding: 1em 1em 0.15em;
    }

    .container {
        background: #fff;
        border-radius: 5px;
        opacity: 0.95;
        padding: 1em;
        width: 270px;
    }

    ul {
        padding-left: 0;
    }

    li {
        list-style-type: none;
    }
</style>

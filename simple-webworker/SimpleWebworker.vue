<template>
    <div id="app-webworker">
        <div class="loaded-image">
            <img :src="loadedImage" v-if="loadedImage" alt=""/>
        </div>

        <p v-if="counter">{{ counter }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loadedImage: null,
            counter: 0
        }
    },

    methods: {
        getImage() {
            fetch('https://api.imgflip.com/get_memes')
                .then((response) => response.json())
                .then((data) => {
                    let result = data.data.memes[this.getRandomInt(100)].url;
                    this.loadedImage = result;
                })
                .catch(e => console.log(e))
        },

        getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
    },

    mounted() {
        if (window.Worker) {
            const worker = new Worker('./worker.js');
            worker.postMessage('');

            this.getImage();

            worker.onmessage = (e) => {
                this.counter = e.data;
                if (this.counter % 4 === 0) {
                    this.getImage();
                }
            }
        }
    }
}
</script>

<style>
body {
    background-color: #8EC5FC;
    margin: 0;
}

#app {
    margin-top: 0;
}

#app-webworker {
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-top: 0;
}

p {
    font-size: 5rem;
    color: #FFF;
    margin: 24px 0;
}

.loaded-image {
    margin: 1em auto 0;
}

img {
    width: auto;
    max-height: 300px;
    border-radius: 10px;
}
</style>
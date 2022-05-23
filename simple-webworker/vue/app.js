const App = {
    data() {
        return {
            loadedImage: null,
            counter: 0
        }
    },

    /**
     * call the getImage method the first time,
     * then set up an onmessage listener on our worker object to listen to updates from the worker thread,
     * we check if the counter value sent by the worker is divisible by 10,
     * if it is, we call the getImage method again
     */
    mounted() {
        if (window.Worker) {
            const worker = new Worker('worker.js');
            worker.postMessage('');

            this.getImage();

            worker.onmessage = (e) => {
                this.counter = e.data;
                if (this.counter % 4 === 0) {
                    this.getImage();
                }
            }
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
    }
}

Vue.createApp(App).mount("#app");
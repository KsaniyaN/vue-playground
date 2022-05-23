const App = {
    data() {
        return {
            dogImage: null,
            counter: 0
        }
    },

    /**
     * call the getDogImage method the first time,
     * then set up an onmessage listener on our worker object to listen to updates from the worker thread,
     * we check if the counter value sent by the worker is divisible by 10,
     * if it is, we call the getDogImage method again
     */
    mounted() {
        if (window.Worker) {
            const worker = new Worker('worker.js');
            worker.postMessage('');

            this.getDogImage();

            worker.onmessage = (e) => {
                this.counter = e.data;
                if (this.counter % 10 === 0) {
                    this.getDogImage();
                }
            }
        }
    },

    methods: {
        getDogImage() {
            fetch('https://dog.ceo/api/breeds/image/random')
                .then((response) => response.json())
                .then((data) => {
                    this.dogImage = data.message;
                })
                .catch(e => console.log(e))
        }
    }
}

Vue.createApp(App).mount("#app");
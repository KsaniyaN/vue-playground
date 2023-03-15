/**
 * Pub-sub design pattern
 * Publisher-Subscriber
 * Enable an application to announce events to multiple interested consumers asynchronously, without coupling the senders to the receivers.
 */

/**
 * The event emitter is a powerful tool that allows us to decouple logic and handle asynchronicity in Javascript
 */

const events = require("events");

// instance of event emitter
const emitter = new events.EventEmitter();

emitter.on("customEvent", (message, user) => {
    console.log(`${user}: ${message}`);
});

emitter.emit("customEvent", "Hello World", "Computer");
emitter.emit("customEvent", "That's pretty cool", "XN");

process.stdin.on("data", data => {
    const input = data.toString().trim();
    if (input === "exit") {
        emitter.emit("customEvent", "Bye!", "Process");
        process.exit();
    }
    emitter.emit("customEvent", input, "Terminal");
})

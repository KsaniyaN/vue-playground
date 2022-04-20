const events = require("events");

// instance of event emitter
const emitter = new events.EventEmitter();

emitter.on("customEvent", (message, user) => {
    console.log(`${user}: ${message}`);
});

// emitter.emit("customEvent", "Hello World", "Computer");
// emitter.emit("customEvent", "That's pretty cool huh?", "XN");

process.stdin.on("data", data => {
    const input = data.toString().trim();
    if (input === "exit") {
        emitter.emit("customEvent", "Bye!", "process");
        process.exit();
    }
    emitter.emit("customEvent", input, "terminal");
})

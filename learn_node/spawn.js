// launch external processes - asynchronously
const cp = require("child_process");

const questionApp = cp.spawn("node", ["questions.js"]);

questionApp.stdin.write("X /n");
questionApp.stdin.write("Syd /n");
questionApp.stdin.write("rest");

questionApp.stdout.on("data", data => {
    console.log(`from the question app: ${data}`);
});

questionApp.on("close", () => {
    console.log(`questions are exited`);
});
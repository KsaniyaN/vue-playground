// let hello = "Hello World from Node.js"

// referring to global Node object
// global.console.log(hello);

// console.log(hello);

// ----------------------------------------------------------------------------------------------------
// path module
// console.log(__dirname);
// console.log(__filename);

// const path = require("path");
// console.log(`The file name is ${path.basename(__filename)}`);

// ----------------------------------------------------------------------------------------------------
// process object
// console.log("This process id is: " + process.pid); // process id
// console.log("Current node version is: " + process.versions.node); // version of node

// ----------------------------------------------------------------------------------------------------
// getting/setting an array of process arguments
console.log(process.argv);

// terminal command: node firstFile Xenia N
// const [, , firstName, lastName] = process.argv;
// console.log(`Your name is ${firstName} ${lastName}`);

// terminal command: node firstFile --user Xenia --greeting "Privetiki"
const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}

const greeting = grab("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}`);
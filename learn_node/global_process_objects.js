// ----------------------------------------------------------------------------------------------------
// exploring Node global object

// let hello = "Hello World from Node.js";
// let justNode = hello.slice(17);
//
// console.log(hello);
// console.log(`Who let the ${justNode} out`);

// ----------------------------------------------------------------------------------------------------
// path module
// console.log(__dirname);
// console.log(__filename);

// const path = require("path");
// console.log(`The file name is ${path.basename(__filename)}`);

// for (let key in global) {
//     console.log(key);
// }

// ----------------------------------------------------------------------------------------------------
// process object - information about current process instance
// environment information
// read env variables
// communicate with terminal
// exit the current process

// console.log("This process id is: " + process.pid); // process id
// console.log("Current node version is: " + process.versions.node); // version of node

// ----------------------------------------------------------------------------------------------------
// getting/setting an array of process arguments
console.log(process.argv);

// terminal command: node firstFile Xenia N
// const [, , firstName, lastName] = process.argv;
// console.log(`Your name is ${firstName} ${lastName}`);

function grab(flag) {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}

let greeting = grab("--greeting");
let user = grab("--user");

// --> terminal command: node global_process_objects --user Xenia --greeting "hello from Node"
console.log(`${greeting}, ${user}`);

// we can create all sorts of cool command line applications just using this array \0_0/ ::)
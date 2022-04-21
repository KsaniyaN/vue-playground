// execute handles synchronous processes
const cp = require("child_process");

// open a link
// cp.exec("open https://www.linkedin.com/learning");

// open one more Terminal
// cp.exec("open -a Terminal .");

// show dir content
// cp.exec("ls", (err, data,stderr) => {
//     // if (err) {
//     //     throw err;
//     // }
//     // console.log(data);
//     console.log(stderr)
// })

// execute any external command
cp.exec("node read-stream", (err, data,stderr) => {
    console.log(data);
})
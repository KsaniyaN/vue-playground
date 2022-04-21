const fs = require("fs");

const readStream = fs.createReadStream("./assets/readme.md", "UTF-8");

let fileTxt = "";

// console.log("type something...");
// process.stdin.on("data", data => {
//     console.log(`I read ${data.toString().trim().length} characters of text`);
//     process.exit();
// });

readStream.on("data", data => {
    console.log(`I read ${data.toString().trim().length} characters of text`);
    fileTxt += data;
    // process.exit();
});

readStream.once("data", data => {
    console.log(data);
});

// readStream has completed
readStream.on("end", () => {
    console.log("finished reading file");
    console.log(`In total I read ${fileTxt.length} characters of text`);
});
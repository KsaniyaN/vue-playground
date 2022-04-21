const fs = require("fs");

// synchronous
// const files = fs.readdirSync("./assets");

// async, doesn't save output to the variable
fs.readdir("./assets", (err, files) => {
    if (err) {
        throw err;
    }
    console.log("complete");
    console.log(files);
});

console.log("started reading files");



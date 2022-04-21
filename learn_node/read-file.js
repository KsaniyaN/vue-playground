const fs = require("fs");

// sync
// const text = fs.readFileSync("./assets/readme.md", "UTF-8");

// async - text
// fs.readFile("./assets/readme.md", "UTF-8", (err, text) => {
//     console.log("File content reading completed")
//     console.log(text);
// });

// async reading img
fs.readFile("./assets/xenia.jpg", (err, img) => {
    if(err) {
        console.log(`An error has occurred: ${err.message}`);
        process.exit();
    }
    console.log(img);
});

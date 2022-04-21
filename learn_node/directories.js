const fs = require("fs");

// rename dir
// fs.renameSync("./storage-files", "./storage");

// remove dir content
fs.readdirSync("./storage").forEach(fileName => {
    fs.unlinkSync(`./storage/${fileName}`)
})

// remove dir
fs.rmdir("./storage", err => {
    if (err) {
        throw err;
    }
    console.log("./storage directory removed");
})
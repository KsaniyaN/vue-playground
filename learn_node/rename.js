const fs = require("fs");

// 1. renaming
fs.renameSync("./assets/colors.json", "./assets/colorData.json");

// 2. moving
fs.rename("./assets/notes.md", "./storage-files/notes.md", err => {
    if (err) {
        throw err;
    }
});

// 3. removing
setTimeout(() => {
    fs.unlinkSync("./assets/xenia.jpg");
}, 4000);
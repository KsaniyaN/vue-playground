const fs = require("fs");

const writeStream = fs.createWriteStream("./assets/my-file.txt", "UTF-8");
const readStream = fs.createReadStream("./assets/readme.md", "UTF-8");

// output to console
// process.stdout.write("Hello");
// process.stdout.write(" world\n");

// output to file
// writeStream.write("Hello");
// writeStream.write(" world\n");

// take input and save to file
// process.stdin.on("data", data => {
//     writeStream.write(data);
// });

// or the same with pipe
// process.stdin.pipe(writeStream);

// take data from existing file and write it to another file
// readStream.on("data", data => {
//     writeStream.write(data);
// });

// or the same with pipe
// readStream - from, writeStream - to
readStream.pipe(writeStream);
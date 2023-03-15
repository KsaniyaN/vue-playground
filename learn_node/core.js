// path
const path = require("path");
const dirUploads = path.join(
    __dirname,
    'www',
    'files',
    'uploads'
);
console.log(dirUploads); // C:\My Data\Playground\vue-playground\learn_node\www\files\uploads


// util
const util = require("util");
const { log } = require("util");

// util.log fn timestamps each log
util.log(path.basename(__filename));        // deprecated already ::)
log(" ^ The name of the current file");

// v8
const v8 = require("v8");
// how much memory our app is using
util.log(v8.getHeapStatistics());
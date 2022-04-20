// path
const path = require("path");
// const dirUploads = path.join(__dirname, 'www', 'files', 'uploads');
// console.log(dirUploads);

// util
const util = require("util");
const { log } = require("util");
util.log(path.basename(__filename));        // deprecated already ::)
log(" ^ The name of the current file");

// v8
const v8 = require("v8");
util.log(v8.getHeapStatistics());
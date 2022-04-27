/**
 * Goals:
 * get the name of the current directory
 * check if the current dir is already a Git repo
 */

const fs = require('fs');
const path = require('path');

module.exports = {

    getCurrentDirectoryBase: () => {
        // console.log(path.basename(path.dirname(fs.realpathSync(__filename)))); // returning current working dir
        return path.basename(process.cwd());   // returning current working directory even if we are not in it - allowing global fty
    },

    directoryExists: (filePath) => {
        try {
            return fs.statSync(filePath).isDirectory();
        } catch (err) {
            return false;
        }
    }

};



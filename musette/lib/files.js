/**
 * Goals:
 * get the name of the current directory
 * check if the current dir is already a Git repo
 */

const fs = require('fs');
const path = require('path');
const chalk = require("chalk");

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
    },

    isGitRepository: () => {
        if (files.directoryExists('.git')) {
            console.log(chalk.red('Sorry! Can\'t create a new git repo because this directory is already inside ' +
                'a git repository'));
            process.exit();
        }
    }

};



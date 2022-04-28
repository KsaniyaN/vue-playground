const inquirer = require('inquirer');
const minimist = require('minimist');
const files = require('./files.js');

module.exports = {
    askGitHubCredentials: () => {
        const questions = [
            {
                name: 'username',
                type: 'input',
                message: 'Please enter your GitHub username or email address:',
                validate: function (value) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter your GitHub username or email address:'
                    }
                }
            },
            {
                name: 'password',
                type: 'password',
                message: 'Please enter your GitHub password:',
                validate: function (value) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter your GitHub password:'
                    }
                }
            }
        ];

        return inquirer.prompt(questions);
    }
}
const inquirer = require('inquirer');
const minimist = require('minimist');   // setting defaults for the prompts
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
    },

    askRepositoryDetails: () => {
        // 0 - path to the node itself
        // 1 - path to script
        const argv = require('minimist')(process.argv.slice(2));
        const questions = [
            {
                type: 'input',
                name: 'name',
                message: 'Please enter a name for your repository',
                default: argv._[0] || files.getCurrentDirectoryBase(),
                validate: function (value) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter a unique name for the repository.'
                    }
                }
            },
            {
                type: 'input',
                name: 'description',
                default: argv._[1] || null,
                message: 'Set description of the repo (optional)'
            },
            {
                type: 'input',
                name: 'visibility',
                message: 'Would you like this repo to be public or private?',
                choices: [
                    'public',
                    'private'
                ],
                default: 'public'
            }
        ];
        return inquirer.prompt(questions);
    },
}
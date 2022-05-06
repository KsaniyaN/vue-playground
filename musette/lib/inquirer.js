import minimist from 'minimist';   // setting defaults for the prompts
import files from './files.js';

export default {

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
        // ToDo: Prompt doesn't work here for me - check octokit API
        // return this.prompt(questions);
        return process.stdout.write(`\n ${questions[0]}`);
    },

    askRepositoryDetails: () => {
        // 0 - path to the node itself
        // 1 - path to script
        const argv = require(minimist)(process.argv.slice(2));
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
        return this.prompt(questions);
    },

    askIgnoreFiles: (filelist) => {
        const questions = [
            {
                type: 'checkbox',
                name: 'ignore',
                message: 'Select the files and/or folders you wish to ignore',
                choices: filelist,
                default: ['node_modules']
            }
        ];
        return this.prompt(questions);
    }
}
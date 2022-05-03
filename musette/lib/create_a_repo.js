const _ = require('lodash');
const fs = require('fs');
const git = require('simple-git');  // helper for running git commands

const inquirer = require('./inquirer.js');
const gh = require('./github_credentials.js');

module.exports = {
    createRemoteRepository: async () => {
        const github = gh.getInstance();

        const answers = await inquirer.askRepositoryDetails();

        const data = {
            name: answers.name,
            description: answers.description,
            private: (answers.visibility === 'private')
        };

        try {
            const response = await github.repos.createForAuthenticatedUser(data);

            return response.data.ssh_url;
        } catch (err) {
            throw err;
        }
    }
}
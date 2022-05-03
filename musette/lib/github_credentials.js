const octokit = require('@octokit/rest');   // required to access GitHub Rest API
const Configstore = require('configstore');
const _ = require('lodash');    // set of general purpose utilities

const pkg = require('../package.json');
const conf = new Configstore(pkg.name);

module.exports = {
    // new instance of octokit for the user access
    getInstance: () => {
        return octokit;
    },

    // creating a fn for authentication
    gitHubAuth: (token) => {
        octokit.authenticate({
            type: 'oauth', token: token
        })
    },

    // store credentials
    getStoredGitHubToken: () => {
        return conf.get('github_credentials.token');
    },

    setGitHubCredentials: async () => {
        const credentials = await inquirer.askGitHubCredentials();
        octokit.authenticate(_.extend({
            type: 'basic'
        }), credentials);
    },

    registerNewToken: async () => {
        try {
            const response = await octokit.oauthAuthorization.createAuthorization({
                // to have more access than just read
                scopes: ['user', 'public_repo', 'repo', 'repo:status'],
                note: 'musette: tool for dev workflow automation with git'
            });
            // store a token if it is retrieved
            const token = response.data.token;
            if (token) {
                conf.set('github_credentials.token', token);
                return token;
            } else {
                throw new Error('Missing Token');
            }
        } catch (err) { // to catch the entire promise if it fails
            console.log("No response");
            throw err;
        }
    }
}
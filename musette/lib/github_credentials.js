import _ from 'lodash';
import {Octokit} from '@octokit/rest';   // required to access GitHub Rest API

import Configstore from 'configstore';
//import pkg from '../package.json' assert { type: 'json' };
//const conf = new Configstore(pkg.name);
// tmp - following node api docs but assert doesn't work
const conf = new Configstore(("test-pkg"));

import CLI from 'clui';    // toolkit for nice looking command line
const Spinner = CLI.Spinner;

import inquirer from "./inquirer.js";

export default {

    // new instance of octokit for the user access
    getInstance: () => {
        return octokit;
    },

    // creating a fn for authentication
    gitHubAuth: (token) => {
        global.octokit = new Octokit({
            auth: token
        });
    },

    // store credentials
    getStoredGitHubToken: () => {
        return conf.get('github_credentials.token');
    },

    setGithubCredentials: async () => {
        const credentials = await inquirer.askGitHubCredentials();
        const result = _.extend(
            {
                type: "basic"
            },
            credentials
        );

        // global.octokit = new Octokit({
        //     auth: result
        // });
    },

    registerNewToken: async () => {
        const status = new Spinner("Authenticating you, please wait...");
        status.start();

        try {
            const response = await global.octokit.oauthAuthorizations.createAuthorization({
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
        } finally {
            status.stop();
        }
    }
}
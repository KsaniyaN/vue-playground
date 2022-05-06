import _ from 'lodash';

import {Octokit} from '@octokit/rest';   // required to access GitHub Rest API
const octokit = new Octokit;

import Configstore from 'configstore';
//import pkg from '../package.json' assert { type: 'json' };
//const conf = new Configstore(pkg.name);
// tmp - following node api docs but assert doesn't work
const conf = new Configstore(("test-pkg"));

import CLI from 'clui';    // toolkit for nice looking command line
const Spinner = CLI.Spinner;

import chalk from 'chalk';

import inquirer from "./inquirer.js";

export default {

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
        // octokit.authenticate(_.extend({
        //     type: 'basic'
        // }), credentials);

        const result = _.extend({
                type: "basic"
            },
            credentials
        );

        global.octokit = Octokit({
            auth: result
        });
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
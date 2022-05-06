import _ from 'lodash';
import fs from 'fs';
import git from 'simple-git';  // helper for running git commands

import inquirer from './inquirer.js';
import gh from './github_credentials.js';

export default {

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
    },

    createGitIgnore: async () => {
        // getting all the .gitignore files
        const filelist = _.without(fs.readdirSync('.'), '.git', '.gitignore');

        if (filelist.length) {
            const answers = await inquirer.askIgnoreFiles(filelist);
            if (answers.ignore.length) {
                fs.writeFileSync('.gitignore', answers.ignore.join('\n'))
            } else {
                touch('.gitignore'); // exiting the process
            }
        } else {
            touch('.gitignore');
        }
    },

    setupRepository: async (url) => {
        try {
            await git
                .init()
                .add('.gitignore')
                .add('./*')
                .commit('Initial commit')
                .addRemote('origin', url)   // origin is a remote repository, url - address of our repo
                .push('origin', 'master');
            return true;
        } catch (err) {
            throw err;
        }
    }
}
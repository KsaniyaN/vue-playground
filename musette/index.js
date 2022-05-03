/**
 * Chalk package
 * https://www.npmjs.com/package/chalk
 */
import chalk from 'chalk';     // Chalk: applies ANSI colors and styles

console.log(chalk.blue('Hello world!'));
console.log(chalk.bgRed('Hello Milena!'));

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color

console.log(error('Error!'));
console.log(warning('Warning!'));

/**
 * Commander package
 * You write code to describe your command line interface. Commander looks after parsing the arguments into options and
 * command-arguments, displays usage errors for problems, and implements a help system.
 * https://www.npmjs.com/package/commander
 */

// https://stackoverflow.com/questions/60377115/nodejs-server-referenceerror-require-is-not-defined-when-type-module
import {createRequire} from 'module';

const require = createRequire(import.meta.url);

/** https://github.com/tj/commander.js#quick-start
 * For larger programs which may use commander in multiple ways, including unit testing, it is better to create a local Command object to use
 */
const {Command} = require('commander');
const musette = new Command();

const figlet = require('figlet');   // FIGlet: creates large letters with text
const clear = require('clear');     // Clear: removes current output in the console

musette
    .command('init')
    .description('Draw app banner')
    .action(() => {
        clear();
        console.log(chalk.greenBright(figlet.textSync('Milena', {verticalLayout: "full"})));
    })

// musette
//     .name('string-util')
//     .description('CLI to some JavaScript string utilities')
//     .version('0.8.0');
//
// musette.command('split') // node index help split    // node index split --separator=/ a/b/c     // [ 'a', 'b', 'c' ]
//     .description('Split a string into substrings and display as an array')
//     // .argument('<string>', 'string to split')
//     // .option('--first', 'display just the first substring')
//     // .option('-s, --separator <char>', 'separator character', ',')
//     .action((str, options) => {
//         const limit = options.first ? 1 : undefined;
//         console.log(str.split(options.separator, limit));
//     });
//
// musette.parse();

/**
 * ToDo:
 * type="module" & require don't work together
 * have to find a correct way to import files from lib
 */
const files = require('./lib/files.js');
const github = require('./lib/github_credentials.js');

musette.command('octocheck')
    .description('Check user GitHub credentials')
    .action(async () => {
        let token = github.getStoredGitHubToken();
        if (!token) {
            await github.setGitHubCredentials();
            token = await github.registerNewToken();
        }
        console.log(token);
    })

musette.parse(process.argv);

if (!musette.args.length) {
    musette.help();
}


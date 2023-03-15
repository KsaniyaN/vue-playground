/** Every Javascript file is a module.
 * We break up our code into separate files - modules.
 * The variables in each file are scoped to each module.
 * Everything we are going to export can be consumed by a different file.
 * Modules make our code reusable and consumable, because we can publish our code to NPM and share them with community.
 */

let count = 0;

const inc = () => ++count;
const dec = () => --count;

const getCount = () => count;

module.exports = {
    anything: true,
    name: "XN",
    count,
    inc,
    dec,
    getCount
}
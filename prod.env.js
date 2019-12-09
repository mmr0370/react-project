'use strict';

const childProcess = require('child_process')
const branch = childProcess.execSync('git rev-parse --abbrev-ref HEAD').toString().replace(/\s+/, '');

let BRANCH = '0.0.0';

if (branch !== 'master') {
    const array = branch.split('-');
    BRANCH = array[1];
}
;


module.exports = {
    NODE_ENV: '"production"',
    NODE_BRANCH: `"${BRANCH}"`
};
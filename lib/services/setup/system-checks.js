"use strict";
var command_line_1 = require('../command-line');
function npmVersionThreeOrLater() {
    var minVersion = 3;
    return new Promise(function (resolve, reject) {
        var threeOrLater = command_line_1.default('npm', '-v').then(function (res) { return parseInt(res, 10) >= minVersion; });
        if (!threeOrLater) {
            reject({
                key: 'updateNpm',
                title: 'Please update to NPM version 3+',
                click: null,
                text: 'Open a terminal and run:\n `npm install npm -g`',
                button: 'Update NPM',
                verify: 'NPM updated to version 3 or later'
            });
        }
        else {
            resolve();
        }
    });
}
exports.npmVersionThreeOrLater = npmVersionThreeOrLater;

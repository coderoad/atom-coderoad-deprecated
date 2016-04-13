"use strict";
var command_line_1 = require('../../services/command-line');
var minVersion = 3;
function npmVersionThreeOrLater() {
    return new Promise(function (resolve, reject) {
        var threeOrLater = command_line_1.default('npm', '-v').then(function (res) { return parseInt(res, 10) >= minVersion; });
        if (!threeOrLater) {
            resolve(false);
        }
        else {
            resolve(true);
        }
    });
}
exports.npmVersionThreeOrLater = npmVersionThreeOrLater;

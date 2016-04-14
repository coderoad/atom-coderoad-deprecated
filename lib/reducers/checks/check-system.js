"use strict";
var command_line_1 = require('../../services/command-line');
function minVersion(command, minVersion) {
    return new Promise(function (resolve, reject) {
        var minOrLater = command_line_1.default(command, '-v')
            .then(function (res) {
            if (parseInt(res, 10).toString() === 'NaN') {
                return false;
            }
            var hasSecondDigit = res.match(/([0-9]+)\.([0-9]+)/);
            if (!!hasSecondDigit) {
                var versions = minVersion.match(/([0-9]+)\.([0-9]+)/);
                var firstDigit = parseInt(hasSecondDigit[1], 10);
                var firstVersion = parseInt(versions[1], 10);
                return firstDigit > firstVersion ||
                    firstDigit === firstVersion && parseInt(hasSecondDigit[2], 10) >= parseInt(firstVersion[2], 10);
            }
            else {
                return parseInt(res, 10) >= parseInt(minVersion, 10);
            }
        });
        if (!minOrLater) {
            resolve(false);
        }
        else {
            resolve(true);
        }
    });
}
function npmMinVersion() {
    return minVersion('npm', '3');
}
exports.npmMinVersion = npmMinVersion;
function nodeMinVersion() {
    return minVersion('node', '0.10');
}
exports.nodeMinVersion = nodeMinVersion;

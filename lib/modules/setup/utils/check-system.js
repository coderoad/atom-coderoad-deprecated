"use strict";
var atom_plugin_command_line_1 = require('atom-plugin-command-line');
function matchVersions(v) {
    return v.match(/([0-9]+)\.([0-9]+)/);
}
function minVersion(command, minVersion) {
    return new Promise(function (resolve, reject) {
        var minOrLater = atom_plugin_command_line_1.default(command, '-v')
            .then(function (res) {
            if (parseInt(res, 10).toString() === 'NaN') {
                return false;
            }
            var mins = matchVersions(minVersion);
            if (!!mins) {
                var resMins = matchVersions(res);
                var firstDigit = parseInt(resMins[1], 10);
                var firstVersion = parseInt(mins[1], 10);
                return firstDigit > firstVersion ||
                    firstDigit === firstVersion && parseInt(resMins[2], 10) >= parseInt(firstVersion[2], 10);
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
function requiresXCode() {
    if (!navigator.platform.match(/Mac/)) {
        return true;
    }
    return atom_plugin_command_line_1.default('xcode-select', '-v').then(function (res) {
        if (!!res.match(/xcode-select version [0-9]+/)) {
            return true;
        }
        return false;
    });
}
exports.requiresXCode = requiresXCode;

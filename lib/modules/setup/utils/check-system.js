"use strict";
var atom_plugin_command_line_1 = require('atom-plugin-command-line');
var versions = {
    node: '4.0.0',
    atom: '1.8.0',
    npm: '3.0.0'
};
function matchVersions(v) {
    return v.match(/([0-9]+)\.([0-9]+)/);
}
function isAboveVersion(a, b) {
    if (a === b) {
        return true;
    }
    var a_components = a.split('.');
    var b_components = b.split('.');
    var len = Math.min(a_components.length, b_components.length);
    for (var i = 0; i < len; i++) {
        var first = parseInt(a_components[i], 10);
        var second = parseInt(b_components[i], 10);
        if (first > second) {
            return true;
        }
        if (first < second) {
            return false;
        }
    }
    if (a_components.length > b_components.length) {
        return true;
    }
    if (a_components.length < b_components.length) {
        return false;
    }
    return true;
}
function minVersion(command, minVersion) {
    return new Promise(function (resolve, reject) {
        var minOrLater = atom_plugin_command_line_1.default(command, '-v')
            .then(function (res) { return isAboveVersion(res, minVersion); });
        if (!minOrLater) {
            resolve(false);
        }
        else {
            resolve(true);
        }
    });
}
function atomMinVersion() {
    return new Promise(function (resolve, reject) {
        var minOrLater = atom_plugin_command_line_1.default('atom', '-v').then(function (res) {
            var match = res.match(/Atom\s+:\s+([0-9]\.[0-9]\.[0-9])/);
            if (match && match[1] && isAboveVersion(match[1], versions.atom)) {
                resolve(true);
            }
            else {
                resolve(false);
            }
        });
    });
}
exports.atomMinVersion = atomMinVersion;
function npmMinVersion() {
    return minVersion('npm', versions.npm);
}
exports.npmMinVersion = npmMinVersion;
function nodeMinVersion() {
    return minVersion('node', versions.node);
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

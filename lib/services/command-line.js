"use strict";
var exists_1 = require('./exists');
var child_process_1 = require('child_process');
function commandLine(root, commands) {
    if (process.platform === 'darwin' && process.resourcesPath) {
        var localPath = '/usr/local/bin/' + root;
        var globalPath = '/usr/bin/' + root;
        if (exists_1.fileExists(localPath)) {
            root = localPath;
        }
        else if (exists_1.fileExists(globalPath)) {
            root = globalPath;
        }
        else {
            throw root + ' not found. Python may not be installed';
        }
    }
    var run = child_process_1.exec("" + root + (commands ? ' ' + commands : ''));
    return new Promise(function (resolve, reject) {
        run.stdout.on('data', function (data) { return resolve(data); });
        run.stderr.on('data', function (data) { return reject(data); });
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = commandLine;

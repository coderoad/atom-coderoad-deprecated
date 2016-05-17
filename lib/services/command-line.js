"use strict";
var node_file_exists_1 = require('node-file-exists');
var child_process_1 = require('child_process');
function commandLine(root, commands) {
    if (process.platform === 'darwin' && process.resourcesPath) {
        var localPath = '/usr/local/bin/' + root;
        var globalPath = '/usr/bin/' + root;
        if (node_file_exists_1.default(localPath)) {
            root = localPath;
        }
        else if (node_file_exists_1.default(globalPath)) {
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

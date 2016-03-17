"use strict";
var child_process_1 = require('child_process');
var path = require('path');
var node = null;
if (process.platform === 'darwin' && process.resourcesPath) {
    node = path.resolve(process.resourcesPath, '..', 'Frameworks', 'Atom Helper.app', 'Contents', 'MacOS', 'Atom Helper');
}
else if (process.platform.match(/win/)) {
    node = 'node';
}
else {
    node = process.execPath;
}
var options = {
    cwd: path.resolve(__dirname, '..', '..')
};
if (options.env == null) {
    options.env = Object.create(process.env);
}
options.env.ATOM_SHELL_INTERNAL_RUN_AS_NODE = 1;
function checkNodeVersion(params) {
    var child = child_process_1.spawn(node, params, options);
    child.stdout.on('data', function (data) { return console.log(data); });
}
exports.checkNodeVersion = checkNodeVersion;

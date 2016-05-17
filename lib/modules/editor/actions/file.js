"use strict";
var fs_1 = require('fs');
var node_file_exists_1 = require('node-file-exists');
var editor_1 = require('./editor');
function openFolder() {
    atom.open();
}
exports.openFolder = openFolder;
function save() {
    editor_1.getEditor().then(function (editor) { return editor.save(); });
}
exports.save = save;
function open(file, options) {
    if (options === void 0) { options = {}; }
    return new Promise(function (resolve, reject) {
        if (node_file_exists_1.default(file)) {
            fs_1.unlink(file);
        }
        var openTimeout = 200;
        atom.workspace.open(file, options);
        setTimeout(function () { return resolve(); }, openTimeout);
    });
}
exports.open = open;

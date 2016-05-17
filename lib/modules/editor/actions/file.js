"use strict";
var fs_1 = require('fs');
var node_file_exists_1 = require('node-file-exists');
var editor_1 = require('./editor');
var openTimeout = 200;
function openFolder() {
    atom.open();
}
exports.openFolder = openFolder;
function save() {
    editor_1.getEditor().then(function (editor) { return editor.save(); });
}
exports.save = save;
function open(filePath, options) {
    if (options === void 0) { options = {}; }
    return new Promise(function (resolve, reject) {
        if (node_file_exists_1.default(filePath)) {
            fs_1.unlink(filePath);
        }
        atom.workspace.open(filePath, options);
        setTimeout(function () { return resolve(); }, openTimeout);
    });
}
exports.open = open;

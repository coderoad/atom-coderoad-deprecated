"use strict";
var fs_1 = require('fs');
var exists_1 = require('../services/exists');
var getEditorCount = 0;
function save() {
    var editor = findEditor();
    editor.save();
}
exports.save = save;
function findEditor() {
    var editor = atom.workspace.getActiveTextEditor();
    var max = 1000;
    if (!editor) {
        getEditorCount += 1;
        setTimeout(function () {
            return findEditor();
        }, 10);
    }
    else if (getEditorCount > max) {
        console.log('Failed to find active editor');
        return null;
    }
    else {
        getEditorCount = 0;
        return editor;
    }
}
exports.findEditor = findEditor;
function getEditor() {
    return new Promise(function (resolve, reject) {
        resolve(findEditor());
    });
}
exports.getEditor = getEditor;
function open(filePath, options) {
    if (options === void 0) { options = {}; }
    if (exists_1.fileExists(filePath)) {
        fs_1.unlink(filePath);
    }
    atom.workspace.open(filePath, options);
}
exports.open = open;
function set(text) {
    return getEditor().then(function (editor) {
        editor.setText(text);
        editor.insertNewline();
        editor.moveToBottom();
        editor.save();
        setCursorPosition(editor);
    });
}
exports.set = set;
function insert(text, options) {
    if (options === void 0) { options = {}; }
    options = Object.assign(options, {
        autoIndent: true
    });
    return getEditor().then(function (editor) {
        editor.moveToBottom();
        editor.insertText(text, options);
        editor.insertNewline();
        editor.moveToBottom();
        editor.save();
        setCursorPosition(editor);
    });
}
exports.insert = insert;
function setCursorPosition(editor) {
    editor.scan(/::>/g, function (match) {
        var start = match.range.start;
        match.replace('');
        editor.setCursorScreenPosition(start, { autoscroll: true });
    });
}

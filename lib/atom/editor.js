"use strict";
var _base_1 = require('../_base');
var fs = require('fs');
var exists_1 = require('../services/exists');
var Action = require('../actions/actions');
function setAtomGlobals() {
    if (atom.project.rootDirectories.length > 0) {
        window.coderoad.dir = atom.project.rootDirectories[0].path;
        _base_1.store.dispatch(Action.setSetup({ hasDirectory: true }));
    }
    else {
        var message = 'Create a new Atom project. In Atom: File > Open > any folder';
        _base_1.store.dispatch(Action.toggleAlert({ message: message, action: 'tip', duration: 6000 }));
        console.log(message);
        window.coderoad.dir = null;
    }
}
exports.setAtomGlobals = setAtomGlobals;
var getEditorCount = 0;
function save() {
    var editor = findEditor();
    console.log(editor);
    editor.save();
}
exports.save = save;
function findEditor() {
    var editor = atom.workspace.getActiveTextEditor();
    if (!editor) {
        getEditorCount += 1;
        setTimeout(function () {
            return findEditor();
        }, 10);
    }
    else if (getEditorCount > 1000) {
        console.log('Failed to find active editor');
        return undefined;
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
        fs.unlink(filePath);
    }
    atom.workspace.open(filePath, options);
    return true;
}
exports.open = open;
function set(text) {
    return getEditor().then(function (editor) {
        editor.setText(text);
        editor.insertNewline();
        editor.moveToBottom();
        editor.save();
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
    });
}
exports.insert = insert;
function closeAllPanels() {
    var editors = atom.workspace.getTextEditors();
    editors.forEach(function (editor) {
        editor.destroy();
    });
}
exports.closeAllPanels = closeAllPanels;
function quit() {
}
exports.quit = quit;
function openFolder() {
    atom.open();
}
exports.openFolder = openFolder;

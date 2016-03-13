"use strict";
var fs = require('fs');
var exists_1 = require('../services/exists');
function setAtomGlobals() {
    if (atom.project.rootDirectories.length > 0) {
        window.coderoad.dir = atom.project.rootDirectories[0].path;
        if (navigator.appVersion.indexOf('Win') > -1) {
            window.coderoad.win = true;
        }
    }
    else {
        window.coderoad.dir = null;
    }
}
exports.setAtomGlobals = setAtomGlobals;
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
var consoleHasOpened = false;
function toggleDevTools() {
    if (!consoleHasOpened) {
        consoleHasOpened = true;
        console.log('Atom-CodeRoad: runs on save');
    }
    atom.toggleDevTools();
}
exports.toggleDevTools = toggleDevTools;
function openDevTools() {
    atom.openDevTools();
    consoleHasOpened = true;
}
exports.openDevTools = openDevTools;

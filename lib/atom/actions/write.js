"use strict";
var editor_1 = require('./editor');
function write(action, text, options) {
    if (options === void 0) { options = {}; }
    return editor_1.getEditor().then(function (editor) {
        editor.moveToBottom();
        editor[(action + "Text")](text, options);
        editor.insertNewline();
        editor.moveToBottom();
        setCursorPosition(editor);
        editor.save();
    });
}
function set(text) {
    return write('set', text);
}
exports.set = set;
function insert(text, options) {
    if (options === void 0) { options = {}; }
    return write('insert', text, options);
}
exports.insert = insert;
var cursor = /::>/g;
function setCursorPosition(editor) {
    return editor.scan(cursor, function (scanned) {
        editor.setCursorScreenPosition(scanned.range.start);
        scanned.replace('');
        scanned.stop();
    });
}

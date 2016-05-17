"use strict";
var types_1 = require('./types');
function editorDevToolsToggle() {
    return { type: types_1.EDITOR_DEVTOOLS_TOGGLE };
}
exports.editorDevToolsToggle = editorDevToolsToggle;
function editorInsert(content) {
    return { type: types_1.EDITOR_INSERT, payload: { content: content } };
}
exports.editorInsert = editorInsert;
function editorOpen(file, options) {
    return { type: types_1.EDITOR_OPEN, payload: { file: file, options: options } };
}
exports.editorOpen = editorOpen;
function editorSave() {
    return { type: types_1.EDITOR_SAVE };
}
exports.editorSave = editorSave;
function editorSet(content) {
    return { type: types_1.EDITOR_SET, payload: { content: content } };
}
exports.editorSet = editorSet;

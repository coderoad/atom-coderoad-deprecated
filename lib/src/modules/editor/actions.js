"use strict";
var types_1 = require('./types');
var path_1 = require('path');
function editorDevToolsToggle() {
    return { type: types_1.EDITOR_DEVTOOLS_TOGGLE };
}
exports.editorDevToolsToggle = editorDevToolsToggle;
function editorInsert(content) {
    return { type: types_1.EDITOR_INSERT, payload: { content: content } };
}
exports.editorInsert = editorInsert;
function editorOpen(file, options) {
    return function (dispatch, getState) {
        file = path_1.join(getState().dir, file);
        dispatch({ type: types_1.EDITOR_OPEN, payload: { file: file, options: options } });
    };
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
function editorScroll(content) {
    return { type: types_1.EDITOR_SCROLL, payload: { content: content } };
}
exports.editorScroll = editorScroll;
function editorWriteFileFromContent(to, content) {
    return function (dispatch, getState) {
        var dir = getState().dir;
        dispatch({
            type: types_1.EDITOR_WRITE_FILE_FROM_CONTENT,
            payload: { to: to, content: content, dir: dir }
        });
    };
}
exports.editorWriteFileFromContent = editorWriteFileFromContent;
function editorWriteFileFromFile(to, from) {
    return function (dispatch, getState) {
        var _a = getState(), dir = _a.dir, tutorial = _a.tutorial;
        var tutorialDir = tutorial.config.dir;
        dispatch({
            type: types_1.EDITOR_WRITE_FILE_FROM_FILE,
            payload: { to: to, from: from, dir: dir, tutorialDir: tutorialDir }
        });
    };
}
exports.editorWriteFileFromFile = editorWriteFileFromFile;

"use strict";
function getEditor() {
    return new Promise(function (resolve, reject) {
        var editor = atom.workspace.getActiveTextEditor();
        var checkForEditor = setInterval(function () {
            if (editor) {
                clearInterval(checkForEditor);
                resolve(editor);
            }
        }, 50);
    });
}
exports.getEditor = getEditor;

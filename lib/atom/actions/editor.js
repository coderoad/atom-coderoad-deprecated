"use strict";
function getEditor() {
    return new Promise(function (resolve, reject) {
        var getEditorCount = 0;
        var editor = atom.workspace.getActiveTextEditor();
        while (!editor) {
            getEditorCount += 1;
            setTimeout(function () {
                editor = atom.workspace.getActiveTextEditor();
            });
            if (getEditorCount > 999) {
                console.log('Failed to find active editor');
                reject(null);
            }
        }
        resolve(editor);
    });
}
exports.getEditor = getEditor;

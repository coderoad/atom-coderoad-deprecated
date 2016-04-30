"use strict";
function getEditor() {
    return new Promise(function (resolve, reject) {
        var getEditorCount = 0;
        var editor = atom.workspace.getActiveTextEditor();
        while (!editor) {
            getEditorCount += 1;
            setTimeout(function () {
                editor = atom.workspace.getActiveTextEditor();
            }, 10);
            if (getEditorCount > 1000) {
                console.log('Cannot find active text editor');
                setTimeout(function () {
                    editor = atom.workspace.getActiveTextEditor();
                }, 100);
            }
        }
        resolve(editor);
    });
}
exports.getEditor = getEditor;

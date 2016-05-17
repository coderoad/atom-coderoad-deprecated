"use strict";
function closeAllPanels() {
    var editors = atom.workspace.getTextEditors();
    editors.forEach(function (editor) {
        editor.destroy();
    });
}
exports.closeAllPanels = closeAllPanels;

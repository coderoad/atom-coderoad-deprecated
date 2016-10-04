"use strict";
var editor_1 = require("./editor");
function openFolder() {
    atom.open();
}
exports.openFolder = openFolder;
function save() {
    editor_1.getEditor().then(function (editor) { return editor.save(); });
}
exports.save = save;
function open(file, options) {
    if (options === void 0) { options = {}; }
    return new Promise(function (resolve, reject) {
        atom.workspace.open(file, options);
        atom.workspace.onDidOpen(function () { return resolve(); });
    });
}
exports.open = open;
function scroll(content) {
    return editor_1.getEditor().then(function (editor) {
        var regex = new RegExp(content.replace(/[\\\.\+\*\?\^\$\[\]\(\)\{\}\/\'\#\:\!\=\|]/ig, '\\$&'), 'gm');
        return editor.scan(regex, function (scanned) {
            var _a = scanned.range.start, row = _a.row, column = _a.column;
            editor.setCursorScreenPosition([row + 1, column]);
            scanned.stop();
        });
    });
}
exports.scroll = scroll;
//# sourceMappingURL=file.js.map
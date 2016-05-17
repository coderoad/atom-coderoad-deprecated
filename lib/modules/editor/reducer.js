"use strict";
var types_1 = require('./types');
var index_1 = require('./index');
function editor(editor, action) {
    if (editor === void 0) { editor = 'atom'; }
    switch (action.type) {
        case types_1.EDITOR_DEVTOOLS_TOGGLE:
            index_1.toggleDevTools();
            return editor;
        case types_1.EDITOR_SAVE:
            index_1.save();
            return editor;
        default:
            return editor;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = editor;

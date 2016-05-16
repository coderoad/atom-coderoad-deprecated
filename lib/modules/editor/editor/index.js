"use strict";
var types_1 = require('../types');
var editor_1 = require('../../../atom/editor');
function editor(editor, action) {
    if (editor === void 0) { editor = 'atom'; }
    switch (action.type) {
        case types_1.EDITOR_DEVTOOLS_TOGGLE:
            editor_1.toggleDevTools();
            return editor;
        default:
            return editor;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = editor;

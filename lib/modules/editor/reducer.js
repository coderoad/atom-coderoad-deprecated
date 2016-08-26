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
        case types_1.EDITOR_OPEN:
            var _a = action.payload, file = _a.file, options = _a.options;
            index_1.open(file, options);
            return editor;
        case types_1.EDITOR_INSERT:
            index_1.insert(action.payload.content);
            return editor;
        case types_1.EDITOR_SET:
            index_1.set(action.payload.content);
            return editor;
        case types_1.EDITOR_SCROLL:
            index_1.scroll(action.payload.content);
            return editor;
        case types_1.EDITOR_WRITE_FILE_FROM_FILE:
            index_1.writeFileFromFile(action.payload);
            return editor;
        case types_1.EDITOR_WRITE_FILE_FROM_CONTENT:
            index_1.writeFileFromContent(action.payload);
            return editor;
        default:
            return editor;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = editor;

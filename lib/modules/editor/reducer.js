"use strict";
var index_1 = require('../../index');
var types_1 = require('./types');
function editorReducer(ed, action) {
    if (ed === void 0) { ed = ''; }
    switch (action.type) {
        case types_1.EDITOR_DEVTOOLS_TOGGLE:
            index_1.default.action.toggleDevTools();
            return ed;
        case types_1.EDITOR_SAVE:
            index_1.default.action.save();
            return ed;
        case types_1.EDITOR_OPEN:
            var _a = action.payload, file = _a.file, options = _a.options;
            index_1.default.action.open(file, options);
            return ed;
        case types_1.EDITOR_INSERT:
            index_1.default.action.insert(action.payload.content);
            return ed;
        case types_1.EDITOR_SET:
            index_1.default.action.set(action.payload.content);
            return ed;
        case types_1.EDITOR_SCROLL:
            index_1.default.action.scroll(action.payload.content);
            return ed;
        case types_1.EDITOR_WRITE_FILE_FROM_FILE:
            index_1.default.action.writeFileFromFile(action.payload);
            return ed;
        case types_1.EDITOR_WRITE_FILE_FROM_CONTENT:
            index_1.default.action.writeFileFromContent(action.payload);
            return ed;
        default:
            return ed;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = editorReducer;
//# sourceMappingURL=reducer.js.map
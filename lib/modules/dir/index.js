"use strict";
var index_1 = require('../../index');
function dirReducer(dir) {
    console.log(index_1.editor);
    return index_1.editor ? index_1.editor.directory() : '';
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = dirReducer;
//# sourceMappingURL=index.js.map
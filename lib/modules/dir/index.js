"use strict";
function dirReducer(dir) {
    if (atom && atom.project.rootDirectories.length > 0) {
        return atom.project.rootDirectories[0].path;
    }
    return '';
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = dirReducer;
//# sourceMappingURL=index.js.map
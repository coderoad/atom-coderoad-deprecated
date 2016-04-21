"use strict";
function dirReducer(dir) {
    if (dir === void 0) { dir = null; }
    if (atom.project.rootDirectories.length > 0) {
        return atom.project.rootDirectories[0].path;
    }
    else {
        return null;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = dirReducer;

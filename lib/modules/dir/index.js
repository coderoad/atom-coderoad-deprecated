"use strict";
function dirReducer(dir) {
    if (atom.project.rootDirectories.length > 0) {
        return atom.project.rootDirectories[0].path;
    }
    else {
        return '';
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = dirReducer;

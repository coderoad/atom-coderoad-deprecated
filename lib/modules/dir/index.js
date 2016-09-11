"use strict";
function dirReducer(dir) {
    if (!atom) {
        throw new Error('No project directory found. Atom may not be initialized.');
        return '';
    }
    if (atom && atom.project.rootDirectories.length > 0) {
        return atom.project.rootDirectories[0].path;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = dirReducer;

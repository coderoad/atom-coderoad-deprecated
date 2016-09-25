"use strict";
exports.directory = function () {
    if (atom && atom.project.rootDirectories.length > 0) {
        return atom.project.rootDirectories[0].path;
    }
    return '';
};
//# sourceMappingURL=directory.js.map
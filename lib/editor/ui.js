"use strict";
exports.addRightPanel = function (panel) {
    return atom.workspace.addRightPanel({
        item: panel,
        priority: 0,
    });
};
//# sourceMappingURL=ui.js.map
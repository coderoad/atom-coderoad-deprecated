"use strict";
var types_1 = require('./types');
var local_storage_1 = require('./utils/local-storage');
exports._progress = {
    completed: false,
    pages: []
};
function getReset(pages) {
    return {
        completed: false,
        pages: pages.map(function () { return false; })
    };
}
function progress(progress, action) {
    if (progress === void 0) { progress = exports._progress; }
    switch (action.type) {
        case types_1.PROGRESS_LOAD:
            var saved = local_storage_1.loadProgressFromLocalStorage(action.payload.tutorial);
            if (saved) {
                return saved;
            }
            return getReset(action.payload.tutorial.pages);
        case types_1.PROGRESS_COMPLETE_PAGE:
            var _a = action.payload, tutorial = _a.tutorial, pagePosition = _a.pagePosition, completed = _a.completed;
            progress.pages[pagePosition] = completed;
            local_storage_1.saveToLocalStorage(tutorial, progress);
            return progress;
        case types_1.PROGRESS_COMPLETE_TUTORIAL:
            progress.completed = action.payload.completed;
            local_storage_1.saveToLocalStorage(action.payload.tutorial, progress);
            return progress;
        case types_1.PROGRESS_RESET:
            var reset = getReset(action.payload.tutorial.pages);
            local_storage_1.saveToLocalStorage(action.payload.tutorial, reset);
            return reset;
        default:
            return progress;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = progress;
//# sourceMappingURL=index.js.map
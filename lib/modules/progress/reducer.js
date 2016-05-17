"use strict";
var types_1 = require('./types');
var local_storage_1 = require('./utils/local-storage');
var _progress = {
    completed: false,
    pages: []
};
function progress(progress, action) {
    if (progress === void 0) { progress = _progress; }
    switch (action.type) {
        case types_1.PROGRESS_LOAD:
            var tutorial = action.payload.tutorial;
            var saved = local_storage_1.loadProgressFromLocalStorage(tutorial);
            if (saved) {
                return saved;
            }
            return {
                completed: false,
                pages: tutorial.pages.map(function () { return false; })
            };
        case types_1.PROGRESS_COMPLETE_PAGE:
            var _a = action.payload, tutorial = _a.tutorial, pagePosition = _a.pagePosition, completed = _a.completed;
            progress.pages[pagePosition] = completed;
            local_storage_1.saveToLocalStorage(tutorial, progress);
            return progress;
        case types_1.PROGRESS_COMPLETE_TUTORIAL:
            var _b = action.payload.tutorial, tutorial = _b.tutorial, completed = _b.completed;
            progress.completed = completed;
            local_storage_1.saveToLocalStorage(tutorial, progress);
            return progress;
        default:
            return progress;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = progress;

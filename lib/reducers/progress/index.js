"use strict";
var _types_1 = require('../../actions/_types');
var local_storage_1 = require('./local-storage');
var _progress = {
    completed: false,
    pages: []
};
function progressReducer(progress, action) {
    if (progress === void 0) { progress = _progress; }
    switch (action.type) {
        case _types_1.PROGRESS_LOAD:
            var tutorial = action.payload.tutorial;
            var saved = local_storage_1.loadProgressFromLocalStorage(tutorial);
            if (saved) {
                return saved;
            }
            return {
                completed: false,
                pages: tutorial.pages.map(function () { return false; })
            };
        case _types_1.COMPLETE_PAGE:
            var _a = action.payload, tutorial = _a.tutorial, pagePosition = _a.pagePosition;
            progress.pages[pagePosition] = true;
            local_storage_1.saveToLocalStorage(tutorial, progress);
            return progress;
        case _types_1.COMPLETE_TUTORIAL:
            var tutorial = action.payload.tutorial.tutorial;
            progress.completed = true;
            local_storage_1.saveToLocalStorage(tutorial, progress);
            return progress;
        default:
            return progress;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = progressReducer;

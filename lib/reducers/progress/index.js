"use strict";
var _types_1 = require('../../actions/_types');
var local_storage_1 = require('./local-storage');
var store_1 = require('../../store');
var _progress = {
    completed: false,
    pages: []
};
function progressReducer(progress, action) {
    if (progress === void 0) { progress = _progress; }
    switch (action.type) {
        case _types_1.PROGRESS_LOAD:
            var saved = local_storage_1.loadProgressFromLocalStorage();
            if (saved) {
                return saved;
            }
            return {
                completed: false,
                pages: store_1.default.getState().tutorial.pages.map(function () { return false; })
            };
        case _types_1.COMPLETE_PAGE:
            var pagePosition = action.payload.pagePosition;
            progress.pages[pagePosition] = true;
            local_storage_1.saveToLocalStorage(progress);
            return progress;
        case _types_1.COMPLETE_TUTORIAL:
            progress.completed = true;
            local_storage_1.saveToLocalStorage(progress);
            return progress;
        default:
            return progress;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = progressReducer;

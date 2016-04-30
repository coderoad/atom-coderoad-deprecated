"use strict";
var _types_1 = require('../../actions/_types');
var local_storage_1 = require('./local-storage');
var store_1 = require('../../store');
var _progress = {
    completed: false,
    chapters: []
};
function progressReducer(progress, action) {
    if (progress === void 0) { progress = _progress; }
    switch (action.type) {
        case _types_1.PROGRESS_LOAD:
            var tutorial = store_1.default.getState().tutorial;
            var saved = local_storage_1.loadProgressFromLocalStorage();
            if (saved) {
                return saved;
            }
            return {
                completed: false,
                chapters: !tutorial.chapters
                    ? []
                    : tutorial.chapters.map(function (chapter) {
                        return {
                            completed: false,
                            pages: chapter.pages.map(function () { return false; })
                        };
                    })
            };
        case _types_1.COMPLETE_PAGE:
            var _a = action.payload.position, chapter = _a.chapter, page = _a.page;
            progress.chapters[chapter].pages[page] = true;
            local_storage_1.saveToLocalStorage(progress);
            return progress;
        case _types_1.COMPLETE_CHAPTER:
            progress.chapters[action.payload.chapter].completed = true;
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

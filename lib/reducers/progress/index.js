"use strict";
var _types_1 = require('../../actions/_types');
var store_1 = require('../../store');
var _progress = {
    completed: false,
    chapters: [{
            title: '',
            description: '',
            completed: false,
            pages: [{
                    title: '',
                    description: '',
                    completed: false,
                }]
        }]
};
function progressReducer(progress, action) {
    if (progress === void 0) { progress = _progress; }
    switch (action.type) {
        case _types_1.PROGRESS_LOAD:
            var chapters = store_1.default.getState().tutorial.chapters;
            return {
                completed: false,
                chapters: !chapters ? [] : chapters.map(function (_a) {
                    var title = _a.title, description = _a.description, completed = _a.completed, pages = _a.pages;
                    return {
                        title: title, description: description, completed: completed || false,
                        pages: !pages ? [] : pages.map(function (page) {
                            return {
                                title: page.title,
                                description: page.description,
                                completed: page.completed || false,
                            };
                        })
                    };
                })
            };
        case _types_1.COMPLETE_PAGE:
            var position = action.payload.position;
            progress.chapters[position.chapter].pages[position.page].completed = true;
            return progress;
        case _types_1.COMPLETE_CHAPTER:
            progress.chapters[action.payload.chapter].completed = true;
            return progress;
        case _types_1.COMPLETE_TUTORIAL:
            progress.completed = true;
            return progress;
        default:
            return progress;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = progressReducer;

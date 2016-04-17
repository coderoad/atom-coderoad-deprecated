"use strict";
var _types_1 = require('../../actions/_types');
var tutorial_package_1 = require('../../services/tutorial-package');
var defaultProgress = {
    completed: false,
    chapters: [{
            title: '',
            description: '',
            completed: false,
            pages: [{
                    title: '',
                    description: '',
                    completed: false
                }]
        }]
};
function progressReducer(progress, action) {
    if (progress === void 0) { progress = defaultProgress; }
    switch (action.type) {
        case _types_1.TUTORIAL_SET:
            return tutorial_package_1.default.getProgress();
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

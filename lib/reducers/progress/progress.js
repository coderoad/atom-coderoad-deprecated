"use strict";
var Type = require('../../actions/actionTypes');
var package_1 = require('../../services/package');
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
        case Type.SET_PROGRESS:
            return package_1.default.getProgress();
        case Type.PAGE_COMPLETE:
            var position = action.payload.position;
            progress.chapters[position.chapter].pages[position.page].completed = true;
            return progress;
        case Type.CHAPTER_COMPLETE:
            progress.chapters[action.payload.chapter].completed = true;
            return progress;
        case Type.PROJECT_COMPLETE:
            progress.completed = true;
            return progress;
        default:
            return progress;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = progressReducer;

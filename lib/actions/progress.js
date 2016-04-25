"use strict";
var _types_1 = require('./_types');
var store_1 = require('../store');
function progressLoad() {
    return { type: _types_1.PROGRESS_LOAD };
}
exports.progressLoad = progressLoad;
function completePage() {
    var position = store_1.default.getState().position;
    var pageLength = store_1.default.getState().progress.chapters[position.chapter].pages.length;
    if (position.page >= pageLength - 1) {
        store_1.default.dispatch(completeChapter());
    }
    return {
        payload: { position: position },
        type: _types_1.COMPLETE_PAGE,
    };
}
exports.completePage = completePage;
function completeChapter() {
    var chapter = store_1.default.getState().position.chapter;
    var chapterLength = store_1.default.getState().progress.chapters.length;
    if (chapter >= chapterLength - 1) {
        store_1.default.dispatch(completeTutorial());
    }
    return {
        payload: { chapter: chapter },
        type: _types_1.COMPLETE_CHAPTER,
    };
}
exports.completeChapter = completeChapter;
function completeTutorial() {
    return { type: _types_1.COMPLETE_TUTORIAL };
}
exports.completeTutorial = completeTutorial;

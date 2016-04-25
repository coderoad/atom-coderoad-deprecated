"use strict";
var _types_1 = require('./_types');
var position_1 = require('./position');
var store_1 = require('../store');
function progressLoad() {
    setTimeout(function () {
        store_1.default.dispatch(position_1.positionLoad());
    });
    return { type: _types_1.PROGRESS_LOAD };
}
exports.progressLoad = progressLoad;
function isTrue(x) {
    return x === true;
}
function completePage() {
    var position = store_1.default.getState().position;
    var chapter = store_1.default.getState().progress.chapters[position.chapter];
    if (chapter.pages.every(function (x) { return x; })) {
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
    var progress = store_1.default.getState().progress;
    if (progress.chapters.every(function (x) { return x.completed; })) {
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

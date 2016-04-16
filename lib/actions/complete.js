"use strict";
var _types_1 = require('./_types');
var store_1 = require('../store/store');
function completePage() {
    var position = store_1.store.getState().position;
    var pageLength = store_1.store.getState().progress.chapters[position.chapter].pages.length;
    if (position.page >= pageLength - 1) {
        return completeChapter();
    }
    return { type: _types_1.COMPLETE_PAGE, payload: { position: position } };
}
exports.completePage = completePage;
function completeChapter() {
    var chapter = store_1.store.getState().position.chapter;
    var chapterLength = store_1.store.getState().progress.chapters.length;
    if (chapter >= chapterLength - 1) {
        return completeTutorial();
    }
    return { type: _types_1.COMPLETE_CHAPTER, payload: { chapter: chapter } };
}
exports.completeChapter = completeChapter;
function completeTutorial() {
    return { type: _types_1.COMPLETE_TUTORIAL };
}
exports.completeTutorial = completeTutorial;

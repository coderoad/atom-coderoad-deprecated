"use strict";
var Type = require('./actionTypes');
var _base_1 = require('../_base');
function pageComplete() {
    var position = _base_1.store.getState().position;
    var pageLength = _base_1.store.getState().progress.chapters[position.chapter].pages.length;
    if (position.page >= pageLength - 1) {
        return chapterComplete();
    }
    return { type: Type.PAGE_COMPLETE, payload: { position: position } };
}
exports.pageComplete = pageComplete;
function chapterComplete() {
    var chapter = _base_1.store.getState().position.chapter;
    var chapterLength = _base_1.store.getState().progress.chapters.length;
    if (chapter >= chapterLength - 1) {
        return projectComplete();
    }
    return { type: Type.CHAPTER_COMPLETE, payload: { chapter: chapter } };
}
exports.chapterComplete = chapterComplete;
function projectComplete() {
    return { type: Type.PROJECT_COMPLETE };
}
exports.projectComplete = projectComplete;

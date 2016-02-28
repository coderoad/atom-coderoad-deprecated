"use strict";
var Type = require('./actionTypes');
var _base_1 = require('../_base');
function pageComplete() {
    var position = _base_1.store.getState().position;
    var pageLength = _base_1.store.getState().progress.chapters[position.chapter].pages.length;
    var action = { type: Type.PAGE_COMPLETE, payload: { position: position } };
    if (position.page >= pageLength - 1) {
        _base_1.store.dispatch(chapterComplete());
        return action;
    }
    return action;
}
exports.pageComplete = pageComplete;
function chapterComplete() {
    var chapter = _base_1.store.getState().position.chapter;
    var chapterLength = _base_1.store.getState().progress.chapters.length;
    var action = { type: Type.CHAPTER_COMPLETE, payload: { chapter: chapter } };
    if (chapter >= chapterLength - 1) {
        _base_1.store.dispatch(projectComplete());
        return action;
    }
    return action;
}
exports.chapterComplete = chapterComplete;
function projectComplete() {
    return { type: Type.PROJECT_COMPLETE };
}
exports.projectComplete = projectComplete;

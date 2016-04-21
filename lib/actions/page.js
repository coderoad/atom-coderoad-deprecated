"use strict";
var _types_1 = require('./_types');
var store_1 = require('../store');
var _position = {
    chapter: 0,
    page: 0,
};
function pageNext() {
    var position = null;
    var _a = store_1.store.getState().position, page = _a.page, chapter = _a.chapter;
    var chapters = store_1.store.getState().tutorial.chapters;
    if (page < chapters[chapter].pages.length - 1) {
        position = {
            chapter: chapter,
            page: page + 1,
        };
    }
    else if (chapter < chapters.length - 1) {
        position = {
            chapter: chapter + 1,
            page: 0,
        };
    }
    else {
        return {
            payload: { route: 'final' },
            type: _types_1.ROUTE_SET,
        };
    }
    return {
        payload: { position: position },
        type: _types_1.PAGE_SET,
    };
}
exports.pageNext = pageNext;
function pageSet(position) {
    if (position === void 0) { position = _position; }
    if (position.completed) {
        return {
            payload: { route: 'final' },
            type: _types_1.ROUTE_SET,
        };
    }
    return {
        payload: { position: position },
        type: _types_1.PAGE_SET,
    };
}
exports.pageSet = pageSet;

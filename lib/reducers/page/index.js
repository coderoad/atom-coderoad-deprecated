"use strict";
var _types_1 = require('../../actions/_types');
var store_1 = require('../../store');
var _page = {
    title: '',
    description: '',
    completed: false,
};
function pageReducer(p, action) {
    if (p === void 0) { p = _page; }
    switch (action.type) {
        case _types_1.PAGE_NEXT:
            var next = null;
            var pos = action.payload.position;
            var chapters = store_1.store.getState().tutorials.chapters.chapters;
            if (pos.page < chapters[pos.chapter].pages.length - 1) {
                next = {
                    chapter: pos.chapter,
                    page: pos.page + 1,
                };
            }
            else if (pos.chapter < chapters.length - 1) {
                next = {
                    chapter: pos.chapter + 1,
                    page: 0,
                };
            }
            else {
                next = {
                    chapter: pos.chapter,
                    page: pos.page,
                    completed: true,
                };
            }
        case _types_1.PAGE_SET:
            var _a = next || action.payload.position, chapter = _a.chapter, page = _a.page, completed = _a.completed;
            var tp = store_1.store.getState().tutorial.chapters[chapter].pages[page];
            return Object.assign({}, { completed: completed || false }, {
                title: tp.title,
                description: tp.description,
                onPageComplete: tp.onPageComplete,
                completed: tp.completed,
            });
        case _types_1.COMPLETE_PAGE:
            var title = p.title, description = p.description, onPageComplete = p.onPageComplete;
            return {
                title: title,
                description: description,
                onPageComplete: onPageComplete,
                completed: true,
            };
        default:
            return p;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = pageReducer;

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
        case _types_1.PAGE_SET:
            var _a = action.payload.position, chapter = _a.chapter, page = _a.page;
            var _b = store_1.default.getState().tutorial
                .chapters[chapter].pages[page], title = _b.title, description = _b.description, onPageComplete = _b.onPageComplete, completed = _b.completed;
            return {
                title: title,
                description: description,
                onPageComplete: onPageComplete,
                completed: completed || false
            };
        case _types_1.COMPLETE_PAGE:
            return Object.assign({}, p, { completed: true });
        default:
            return p;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = pageReducer;

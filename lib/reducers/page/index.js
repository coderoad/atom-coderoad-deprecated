"use strict";
var _types_1 = require('../../actions/_types');
var store_1 = require('../../store');
var editor_1 = require('../../atom/editor');
var _page = {
    title: '',
    description: '',
    completed: false,
};
function pageReducer(p, action) {
    if (p === void 0) { p = _page; }
    switch (action.type) {
        case _types_1.PAGE_SET:
            var page = action.payload.position.page;
            var _a = store_1.default.getState().tutorial.pages[page], title = _a.title, description = _a.description, onPageComplete = _a.onPageComplete, completed = _a.completed;
            editor_1.clearConsole();
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

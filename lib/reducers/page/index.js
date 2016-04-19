"use strict";
var _types_1 = require('../../actions/_types');
var _page = {
    title: '',
    description: '',
    completed: false
};
function pageReducer(page, action) {
    if (page === void 0) { page = _page; }
    switch (action.type) {
        case _types_1.PAGE_SET:
            return action.payload.page;
        case _types_1.COMPLETE_PAGE:
            return {
                title: page.title,
                description: page.description,
                onPageComplete: page.onPageComplete,
                completed: true
            };
        default:
            return page;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = pageReducer;

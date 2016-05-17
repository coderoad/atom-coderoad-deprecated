"use strict";
var types_1 = require('../types');
var _page = {
    title: '',
    description: '',
};
function pageReducer(p, action) {
    if (p === void 0) { p = _page; }
    switch (action.type) {
        case types_1.PAGE_SET:
            var _a = action.payload, pagePosition = _a.pagePosition, tutorial = _a.tutorial;
            var _b = tutorial.pages[pagePosition], title = _b.title, description = _b.description, onPageComplete = _b.onPageComplete;
            return {
                title: title,
                description: description,
                onPageComplete: onPageComplete,
            };
        default:
            return p;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = pageReducer;

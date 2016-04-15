"use strict";
var actionTypes_1 = require('../../actions/actionTypes');
var defaultPage = {
    title: '',
    description: '',
    completed: false
};
function pageReducer(page, action) {
    if (page === void 0) { page = defaultPage; }
    switch (action.type) {
        case actionTypes_1.SET_PAGE:
            return action.payload.page;
        case actionTypes_1.PAGE_COMPLETE:
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

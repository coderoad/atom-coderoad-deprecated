"use strict";
var Type = require('../../actions/actionTypes');
var defaultPage = {
    title: '',
    description: '',
    explanation: '',
    completed: false
};
function pageReducer(page, action) {
    if (page === void 0) { page = defaultPage; }
    switch (action.type) {
        case Type.SET_PAGE:
            return action.payload.page;
        default:
            return page;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = pageReducer;

"use strict";
var _types_1 = require('../../actions/_types');
var store_1 = require('../../store');
var _position = {
    chapter: 0,
    page: 0,
};
function positionReducer(position, action) {
    if (position === void 0) { position = _position; }
    switch (action.type) {
        case _types_1.POSITION_LOAD:
            var chapters = store_1.default.getState().progress.chapters;
            var chapter = chapters.indexOf(function (x) { return !x.completed; });
            if (chapter < 0) {
                chapter = chapters.length - 1;
            }
            var progressPage = chapters[chapter].pages;
            var page = progressPage.indexOf(function (x) { return !x; });
            if (page < 0) {
                page = progressPage.length - 1;
            }
            return { chapter: chapter, page: page };
        case _types_1.PAGE_SET:
        case _types_1.POSITION_SET:
            return action.payload.position;
        default:
            return position;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = positionReducer;

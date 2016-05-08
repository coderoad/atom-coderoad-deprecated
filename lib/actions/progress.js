"use strict";
var _types_1 = require('./_types');
var page_1 = require('./page');
var store_1 = require('../store');
function progressLoad() {
    setTimeout(function () { return store_1.default.dispatch(page_1.pagePositionLoad()); });
    var tutorial = store_1.default.getState().tutorial;
    return { type: _types_1.PROGRESS_LOAD, payload: { tutorial: tutorial } };
}
exports.progressLoad = progressLoad;
function completePage() {
    var _a = store_1.default.getState(), pagePosition = _a.pagePosition, progress = _a.progress;
    if (progress.pages.every(function (x) { return x.completed; })) {
        store_1.default.dispatch(completeTutorial());
    }
    return { type: _types_1.COMPLETE_PAGE, payload: { pagePosition: pagePosition } };
}
exports.completePage = completePage;
function completeTutorial() {
    return { type: _types_1.COMPLETE_TUTORIAL };
}
exports.completeTutorial = completeTutorial;
